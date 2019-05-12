import React, { PureComponent } from 'react'
import './styles.css'

export class Project extends PureComponent {
    state = {
        showInfo: false,
        visible: false,
    }

    _getMobilePhotoOrientation = reverse => {
        const { mobileImageLandscape } = this.props

        if (reverse) {
            return mobileImageLandscape ? 'mobile-2' : 'mobile-3'
        } else {
            return mobileImageLandscape ? 'mobile-2' : 'mobile-1'
        }
    }

    _onInfoButtonClick = () => this.setState(({ showInfo }) => ({ showInfo: !showInfo }))

    componentDidMount() {
        const { index } = this.props
        const { visible } = this.state
        const el = document.querySelector(`#project-${index}`)

        window.addEventListener('scroll', () => {
            const pos = el.getBoundingClientRect()

            if (pos.top <= window.innerHeight / 1.25 && !visible) {
                this.setState({ visible: true })
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    render() {
        const {
            index,
            imageDesktop,
            imageDesktopAlt,
            imageMobile,
            imageMobileAlt,
            linkAddress,
            longDescription,
            shortDescription,
            title,
        } = this.props
        const { showInfo, visible } = this.state

        return index % 2 === 0
            ? <div className={visible ? 'project translate0' : 'project'} id={`project-${index}`}>
                  <div className={showInfo ? 'project-info project-p-show' : 'project-info'}>
                      <div>
                          <h3>
                              {title}
                          </h3>
                          <h4>
                              {shortDescription}
                          </h4>
                          {longDescription}
                      </div>
                      <div className="project-buttons">
                          <div
                              className="project-button project-button-1"
                              onClick={this._onInfoButtonClick}
                          >
                              {showInfo ? 'Less Info' : 'More Info'}
                          </div>
                          {linkAddress &&
                              <a
                                  href={linkAddress}
                                  className="project-button project-button-2"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  View Page
                              </a>}
                      </div>
                  </div>
                  <div className="project-img">
                      <img src={imageDesktop} alt={imageDesktopAlt} />
                      {imageMobile &&
                          <img
                              className={`mobile ${this._getMobilePhotoOrientation(true)}`}
                              src={imageMobile}
                              alt={imageMobileAlt}
                          />}
                  </div>
              </div>
            : <div className={visible ? 'project translate0' : 'project'} id={`project-${index}`}>
                  <div className="project-img">
                      <img src={imageDesktop} alt={imageDesktopAlt} />
                      {imageMobile &&
                          <img
                              className={`mobile ${this._getMobilePhotoOrientation(false)}`}
                              src={imageMobile}
                              alt={imageMobileAlt}
                          />}
                  </div>
                  <div className={showInfo ? 'project-info project-p-show' : 'project-info'}>
                      <div>
                          <h3>
                              {title}
                          </h3>
                          <h4>
                              {shortDescription}
                          </h4>
                          {longDescription}
                      </div>
                      <div className="project-buttons">
                          <div
                              className="project-button project-button-1"
                              onClick={this._onInfoButtonClick}
                          >
                              {showInfo ? 'Less Info' : 'More Info'}
                          </div>
                          {linkAddress &&
                              <a
                                  href={linkAddress}
                                  className="project-button project-button-2"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  View Page
                              </a>}
                      </div>
                  </div>
              </div>
    }
}