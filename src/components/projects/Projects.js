import React, { Fragment, PureComponent } from 'react'
import { Project } from './Project'
import './styles.css'

const projects = [
  {
    imageDesktop: '/images/7now-rn-web.png',
    imageDesktopAlt: '7NOW',
    imageMobile: '/images/7now-rn.png',
    imageMobileAlt: '7NOW React Native',
    linkAddress: 'https://itunes.apple.com/us/app/7now-food-alcohol-delivery/id1316244211?mt=8',
    longDescription: (
      <p>
                The mobile app is built in React Native and uses Redux, Redux Sagas, and
                Immutable.js for state management. I was responsible for the overall frontend
                architecture, navigation implementation, onboarding flows, and the location/7NOW
                Pins functionality, as well as writing many of the resuable UI components.
            </p>
        ),
    mobileImageLandscape: false,
    shortDescription: "7-Eleven's delivery service for mobile.",
    title: '7NOW Mobile App'
  },
  {
    imageDesktop: '/images/7now-web.png',
    imageDesktopAlt: '7NOW',
    imageMobile: '/images/7now-web-mobile.png',
    imageMobileAlt: '7NOW web mobile',
    linkAddress: 'https://delivery.7-eleven.com/home',
    longDescription: (
      <p>
                The web app is built in React using the Material UI component library, and uses
                Redux for state management.
            </p>
        ),
    mobileImageLandscape: false,
    shortDescription: "7-Eleven's delivery service for the web.",
    title: '7NOW Web App'
  },
  {
    imageDesktop: '/images/photo-blog.png',
    imageDesktopAlt: 'photos site',
    imageMobile: '/images/photos-mobile.png',
    imageMobileAlt: 'photos site mobile',
    linkAddress: null, // 'http://mjinkens.com/photos',
    longDescription: (
      <p>
                This app was built using the MERN stack - MongoDB, Express, React, and Node.js and
                is hosted on AWS. The app dynamically builds the menu components based on database
                content, and shows the photo location on an embedded Google Maps instance.
            </p>
        ),
    mobileImageLandscape: true,
    shortDescription: 'A photo sharing app built in React for travel and adventure photos',
    title: 'Photo Sharing - Update in Progress'
  },
  {
    imageDesktop: '/images/giving-clearly.png',
    imageDesktopAlt: 'giving clearly',
    imageMobile: '/images/giving-clearly-mobile.png',
    imageMobileAlt: 'giving clearly mobile',
    linkAddress: null,
    longDescription: (
      <p>
                This app is built in React and uses Redux for state management. In addition to the
                overall layout and page design, the site logos were designed and created by me using
                Inkscape.
            </p>
        ),
    mobileImageLandscape: false,
    shortDescription: 'A React app for connecting people with charities to make giving easy',
    title: 'givingclearly.com (In Progress)'
  },
  {
    imageDesktop: '/images/class-site.png',
    imageDesktopAlt: 'class site',
    imageMobile: '/images/class-site-mobile.png',
    imageMobileAlt: 'class site mobile',
    linkAddress: 'http://djinkens.com/apwh',
    longDescription: (
      <Fragment>
        <p>
                    This app was built using Bootstrap, jQuery, Node.js, Express, and MongoDB, and
                    is hosted on AWS. The app provides a secure login to allow authorized users the
                    ability to manage the app&#39;s content including files, announcements,
                    assignments, and calendar items.
                </p>
        <p>
                    All text-based content features a WYSIWYG editor allowing custom formatting, and
                    embedded images and video. The app also features a daily news video from CNN10,
                    which is accessed through the CNN.com RSS feed and embedded into the page.
                </p>
      </Fragment>
        ),
    mobileImageLandscape: false,
    reverse: false,
    shortDescription:
            'A homepage for students to keep up to date with course materials and important events',
    title: 'Class Homepage'
  },
  {
    imageDesktop: '/images/crypto.png',
    imageDesktopAlt: 'crypto',
    imageMobile: null,
    imageMobileAlt: null,
    linkAddress: null,
    longDescription: (
      <Fragment>
        <p>
                    This program is written primarily in JavaScript, with some C++, and run using
                    Node.js. The program is designed to conduct real-time network-wide analysis to
                    detect arbitrage opportunties on the Ripple distributed exchange for digital
                    assets. The program uses the Ripple Data API to compile a list of all assets and
                    currencies meeting a trading volume threshold. The program then uses
                    Ripple&#39;s <i>rippled</i> JavaScript API to compile the real-time orderbooks
                    for every currency and asset meeting the threshold, and constructs a directed
                    graph of all possible trading paths.
                </p>
        <p>
                    After constructing the directed graph the program then uses a Bellman-Ford
                    pathfinding algorithm and Depth First Search traversal, implemented in C++ and
                    exposed to JavaScript with the V8 engine&#39;s API, to analyze the directed
                    graph for arbitrage opportunities. If an arbitrage path is detected, the
                    analysis program logs the path and deploys a sub-program to continually monitor
                    the path.
                </p>
        <p>
                    The sub-program will execute trades on the network as long as the path remains
                    profitable. The program is designed to automatically handle network connectivity
                    issues by timing out at certain points of the algorithm, and automatically
                    resuming operation.
                </p>
        <p>
                    Feel free to contact me if you're interested in more details about this program,
                    and I'd be happy to go over it.
                </p>
      </Fragment>
        ),
    mobileImageLandscape: false,
    shortDescription: `A program implemented in Node.js to analyze digital asset exchange
            networks for arbitrage opportunities and automatically execute
            trades`,
    title: 'Crytpocurrency Arbitrage'
  },
  {
    imageDesktop: '/images/mjinkens.png',
    imageDesktopAlt: 'mjinkens.com',
    imageMobile: '/images/mjinkens-mobile.png',
    imageMobileAlt: 'mjinkens.com mobile',
    linkAddress: 'http://mjinkens.com',
    longDescription: (
      <p>
                This app was built using React, and uses Redux for state management. The app uses
                Firebase cloud functions and is hosted on Firebase, with Travis CI.
            </p>
        ),
    mobileImageLandscape: false,
    shortDescription: 'A React app for showcasing the React apps I have developed',
    title: 'mjinkens.com (Beware of Recursion)'
  }
]

export class Projects extends PureComponent {
  render () {
    return (
      <div className='container projects'>
        <h1>PROJECTS</h1>

        {projects.map(
                    (
                        {
                            imageDesktop,
                            imageDesktopAlt,
                            imageMobile,
                            imageMobileAlt,
                            linkAddress,
                            longDescription,
                            mobileImageLandscape,
                            shortDescription,
                            title
                        },
                        index
                    ) =>
                      <Project
                        index={index}
                        imageDesktop={imageDesktop}
                        imageDesktopAlt={imageDesktopAlt}
                        imageMobile={imageMobile}
                        imageMobileAlt={imageMobileAlt}
                        key={index}
                        linkAddress={linkAddress}
                        longDescription={longDescription}
                        mobileImageLandscape={mobileImageLandscape}
                        shortDescription={shortDescription}
                        title={title}
                        />
                )}
      </div>
    )
  }
}
