import React, { PureComponent } from 'react'
import './styles.css'

export class About extends PureComponent {
    state = {
        hasEnteredView: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const { hasEnteredView } = this.state
            const about = document.querySelector('.about')
            const aboutPos = about.getBoundingClientRect()

            if (aboutPos.top <= window.innerHeight / 3 && !hasEnteredView) {
                this.setState({ hasEnteredView: true })
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    render() {
        const { hasEnteredView } = this.state

        return (
            <div className="container about">
                <h1>ABOUT</h1>
                <div className="info">
                    <div className={hasEnteredView ? 'info-p translate0' : 'info-p'}>
                        <div className="info-img">
                            <img src="/images/me1.png" alt="me" />
                        </div>
                        <h2>What I Do</h2>
                        <p>
                            Hi, I&#39;m Matt.<br />
                            <br />I&#39;m a full stack developer with a focus on the front end,
                            specializing in React Native and React.js.
                        </p>
                        <p>
                            I build high quality, responsive user interfaces with React Native,
                            React.js, and the associated technologies such as Redux, Immutable,
                            Redux Sagas, etc. I also have experience working with SVG files and
                            photo editing software to create custom graphics and logos.
                        </p>
                        <p>
                            On the backend, I am experienced using Node.js along with serverless
                            technologies such as Firebase and AWS, to deliver performant and
                            scalable apps for a wide range of use cases.
                        </p>
                        <p>
                            When I&#39;m not working, I love to spend time outdoors doing anything
                            from cycling to mountaineering.
                        </p>
                        <div className="about-i">
                            <i className="fab fa-react fa-fw dev-icon" title="React" />
                            <i className="fab fa-js fa-fw dev-icon" title="JavaScript" />
                            <i className="fab fa-node-js fa-fw dev-icon" title="Node" />
                            <i className="fab fa-sass fa-fw dev-icon" title="SASS" />
                            <i className="fab fa-html5 fa-fw dev-icon py-3" title="HTML5" />
                            <i className="fab fa-css3-alt fa-fw dev-icon" title="CSS3" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
