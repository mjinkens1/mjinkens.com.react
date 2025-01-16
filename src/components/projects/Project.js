import React, { PureComponent } from 'react';
import { util } from '../../utils';
import './styles.css';

export class Project extends PureComponent {
    state = {
        showInfo: false,
        visible: false,
    };

    _getMobilePhotoOrientation = () => {
        const { mobileImageLandscape } = this.props;

        return mobileImageLandscape ? 'mobile-2' : 'mobile-1';
    };

    _onInfoButtonClick = () => this.setState(({ showInfo }) => ({ showInfo: !showInfo }));

    componentDidMount() {
        const { index } = this.props;
        const { visible } = this.state;
        const el = document.querySelector(`#project-${index}`);

        window.addEventListener(
            'scroll',
            util.throttle(() => {
                const pos = el.getBoundingClientRect();

                if (pos.top <= window.innerHeight / 1.25 && !visible) {
                    this.setState({ visible: true });
                }
            }),
        );
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
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
            video,
        } = this.props;
        const { showInfo, visible } = this.state;

        return index % 2 === 0 ? (
            <div className={visible ? 'project translate0' : 'project'} id={`project-${index}`}>
                <div className={showInfo ? 'project-info project-p-show' : 'project-info'}>
                    <div>
                        <h3>{title}</h3>
                        <div className="project-img project-img-small-screen">
                            {video ? (
                                <video
                                    className="video"
                                    src={video}
                                    controls={false}
                                    autoPlay
                                    muted
                                    loop
                                />
                            ) : (
                                <img src={imageDesktop} alt={imageDesktopAlt} />
                            )}
                            {imageMobile && (
                                <img
                                    className={`mobile ${this._getMobilePhotoOrientation(false)}`}
                                    src={imageMobile}
                                    alt={imageMobileAlt}
                                />
                            )}
                        </div>
                        <h4>{shortDescription}</h4>
                        {longDescription}
                    </div>
                    <div className="project-buttons">
                        <div
                            className="project-button project-button-1"
                            onClick={this._onInfoButtonClick}
                        >
                            {showInfo ? 'Less Info' : 'More Info'}
                        </div>
                        {linkAddress && (
                            <a
                                href={linkAddress}
                                className="project-button project-button-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Page
                            </a>
                        )}
                    </div>
                </div>
                <div className="project-img project-img-large-screen">
                    {video ? (
                        <video className="video" src={video} controls={false} autoPlay muted loop />
                    ) : (
                        <img src={imageDesktop} alt={imageDesktopAlt} />
                    )}
                    {imageMobile && (
                        <img
                            className={`mobile ${this._getMobilePhotoOrientation(true)}`}
                            src={imageMobile}
                            alt={imageMobileAlt}
                        />
                    )}
                </div>
            </div>
        ) : (
            <div className={visible ? 'project translate0' : 'project'} id={`project-${index}`}>
                <div className="project-img project-img-large-screen">
                    {video ? (
                        <video className="video" src={video} controls={false} autoPlay muted loop />
                    ) : (
                        <img src={imageDesktop} alt={imageDesktopAlt} />
                    )}
                    {imageMobile && (
                        <img
                            className={`mobile ${this._getMobilePhotoOrientation(false)}`}
                            src={imageMobile}
                            alt={imageMobileAlt}
                        />
                    )}
                </div>
                <div className={showInfo ? 'project-info project-p-show' : 'project-info'}>
                    <div>
                        <h3>{title}</h3>
                        <div className="project-img project-img-small-screen">
                            {video ? (
                                <video
                                    className="video"
                                    src={video}
                                    controls={false}
                                    autoPlay
                                    muted
                                    loop
                                />
                            ) : (
                                <img src={imageDesktop} alt={imageDesktopAlt} />
                            )}
                            {imageMobile && (
                                <img
                                    className={`mobile ${this._getMobilePhotoOrientation(false)}`}
                                    src={imageMobile}
                                    alt={imageMobileAlt}
                                />
                            )}
                        </div>
                        <h4>{shortDescription}</h4>
                        {longDescription}
                    </div>
                    <div className="project-buttons">
                        <div
                            className="project-button project-button-1"
                            onClick={this._onInfoButtonClick}
                        >
                            {showInfo ? 'Less Info' : 'More Info'}
                        </div>
                        {linkAddress && (
                            <a
                                href={linkAddress}
                                className="project-button project-button-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Page
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
