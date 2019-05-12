import React, { Fragment, PureComponent } from 'react'
import { SidebarItem } from './SidebarItem'
import { util } from '../../../utils'
import './styles.css'

const sidebarItems = [
    {
        component: (
            <Fragment>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 445 410"
                    id="svg997"
                >
                    <path
                        className="mountain-logo-aurora"
                        d="M261 156L277 112L341 89L301 63L346 63L422 59L445 0L341 7L250 18L97 125L157 115L0 255L81 285L147 248"
                        id="c21Ij40KeN"
                    />
                    <path
                        className="mountain-logo-fill"
                        d="M318.48 240.75L411.79 401.46L225.17 401.46L38.57 401.46L131.87 240.75L225.17 80.04L318.48 240.75Z"
                        id="g1SfUECICx"
                    />
                    <path
                        className="mountain-logo"
                        d="M280 182L244 216L225.54 187L206 216L165 182"
                        id="caPw0frxn"
                    />
                    <path
                        className="mountain-logo"
                        d="M390.36 401.46L274.46 266.43L222.68 389.64L150.36 308.39L82.5 401.46"
                        id="e4ML3hr9gt"
                    />
                </svg>
                <p>mjinkens.com</p>
            </Fragment>
        ),
        scrollTarget: '.landing-wrapper',
    },
    {
        component: (
            <Fragment>
                <i className="fas fa-fw fa-info-circle" id="about" />
                <p>About</p>
            </Fragment>
        ),
        scrollTarget: '.about',
    },
    {
        component: (
            <Fragment>
                <i className="fas fa-fw fa-laptop" id="work" />
                <p>Projects</p>
            </Fragment>
        ),
        scrollTarget: '.projects',
    },
    {
        component: (
            <Fragment>
                <i className="fas fa-fw fa-envelope" id="contact-btn" />
                <p>Contact</p>
            </Fragment>
        ),
        scrollTarget: '.contact',
    },
]

export class Sidebar extends PureComponent {
    state = {
        sidebarFixed: false,
        sidebarItemIndex: 0,
    }

    _onClick = selector => () => {
        const el = document.querySelector(selector)
        const pos = util.getOffset(el)
        window.scrollTo({
            top: pos.top + 20,
            behavior: 'smooth',
        })
    }

    _onScroll = () => {
        const landing = document.querySelector('.landing-wrapper')
        const about = document.querySelector('.about')
        const projects = document.querySelector('.projects')
        const contact = document.querySelector('.contact')

        const landingPos = landing.getBoundingClientRect()
        const aboutPos = about.getBoundingClientRect()
        const projectsPos = projects.getBoundingClientRect()
        const contactPos = contact.getBoundingClientRect()

        if (landingPos.top <= -window.innerHeight * 1.1) {
            this.setState({ sidebarFixed: true })
        } else {
            this.setState({ sidebarFixed: false })
        }

        if (contactPos.top <= window.innerHeight / 3) {
            this.setState({ sidebarItemIndex: 3 })
        } else if (projectsPos.top <= window.innerHeight / 3) {
            this.setState({ sidebarItemIndex: 2 })
        } else if (aboutPos.top <= window.innerHeight / 3) {
            this.setState({ sidebarItemIndex: 1 })
        } else if (landingPos.top <= -window.innerHeight * 0.25) {
            this.setState({ sidebarItemIndex: 0 })
        }
    }

    componentDidMount() {
        const landing = document.querySelector('.landing-wrapper')
        const about = document.querySelector('.about')
        const projects = document.querySelector('.projects')
        const contact = document.querySelector('.contact')

        const landingPos = landing.getBoundingClientRect()
        const aboutPos = about.getBoundingClientRect()
        const projectsPos = projects.getBoundingClientRect()
        const contactPos = contact.getBoundingClientRect()

        if (contactPos.top <= window.innerHeight / 3) {
            this.setState({ sidebarItemIndex: 3 })
        } else if (projectsPos.top <= window.innerHeight / 3) {
            this.setState({ sidebarItemIndex: 2 })
        } else if (aboutPos.top <= window.innerHeight / 3) {
            this.setState({ sidebarItemIndex: 1 })
        } else if (landingPos.top <= -window.innerHeight * 0.25) {
            this.setState({ sidebarItemIndex: 0 })
        }

        window.addEventListener(
            'scroll',
            util.throttle(() => {
                const landingPos = landing.getBoundingClientRect()
                const aboutPos = about.getBoundingClientRect()
                const projectsPos = projects.getBoundingClientRect()
                const contactPos = contact.getBoundingClientRect()

                if (landingPos.top <= -window.innerHeight * 1.1) {
                    this.setState({ sidebarFixed: true })
                } else {
                    this.setState({ sidebarFixed: false })
                }

                if (contactPos.top <= window.innerHeight / 3) {
                    this.setState({ sidebarItemIndex: 3 })
                } else if (projectsPos.top <= window.innerHeight / 3) {
                    this.setState({ sidebarItemIndex: 2 })
                } else if (aboutPos.top <= window.innerHeight / 3) {
                    this.setState({ sidebarItemIndex: 1 })
                } else if (landingPos.top <= -window.innerHeight * 0.25) {
                    this.setState({ sidebarItemIndex: 0 })
                }
            })
        )
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    render() {
        const { sidebarFixed, sidebarItemIndex } = this.state

        return (
            <div className={sidebarFixed ? 'sidebar sidebar-fixed' : 'sidebar'}>
                {sidebarItems.map(({ component, scrollTarget }, index) =>
                    <SidebarItem
                        index={index}
                        key={index}
                        onClick={this._onClick}
                        scrollTarget={scrollTarget}
                        sidebarItemIndex={sidebarItemIndex}
                    >
                        {component}
                    </SidebarItem>
                )}
            </div>
        )
    }
}
