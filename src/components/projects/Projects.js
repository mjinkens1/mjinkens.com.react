import React, { Fragment, PureComponent } from 'react';
import { Project } from './Project';
import './styles.css';

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
        title: '7NOW Mobile App',
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
        title: 'delivery.7-eleven.com',
    },
    {
        imageDesktop: '/images/mmspackers.png',
        imageDesktopAlt: 'M&Ms Packers',
        imageMobile: '/images/mmspackers-mobile.png',
        imageMobileAlt: 'M&Ms Packers Mobile',
        linkAddress: 'https://mmspackers.com',
        longDescription: (
            <p>
                This page was built with React and consists of several microsites that users access
                by scanning a QR code on M&Ms packages. I was responsible for the frontend
                architecture and implementation. The page features a Packers trivia mini-game, and a
                photo stickers implementation based on my react-transformable-draggable library.
                Purchase is required for full access to the site.
            </p>
        ),
        mobileImageLandscape: false,
        shortDescription: 'Promotional site for M&Ms and the Green Bay Packers',
        title: 'mmspackers.com',
    },
    {
        imageDesktop: '/images/rtd.gif',
        imageDesktopAlt: 'React Transformable Draggable',
        imageMobile: null,
        imageMobileAlt: null,
        linkAddress: 'https://github.com/mjinkens1/react-transformable-draggable',
        longDescription: (
            <p>
                I wrote this package to support the photo stickers implementation for
                mmspackers.com. It provides a set of React components that wrap any child
                component/element to make it draggable and droppable, as well as providing handles
                for rotating and resizing
            </p>
        ),
        mobileImageLandscape: false,
        shortDescription:
            'An open source library consisting of a set of React components to make any component/element draggable, droppable, and transformable by the user.',
        title: 'react-transformable-draggable',
        video: '/videos/rtd-video.mov',
    },
    // {
    //     imageDesktop: '/images/class-site.png',
    //     imageDesktopAlt: 'djinkens.org',
    //     imageMobile: '/images/class-site-mobile.png',
    //     imageMobileAlt: 'djinkens.org mobile',
    //     linkAddress: 'https://djinkens.org',
    //     longDescription: (
    //         <Fragment>
    //             <p>
    //                 This app was built using React, Redux, and Redux Sagas, and is hosted on
    //                 Google&#39;s Firebase. The app provides a secure login to allow authorized users
    //                 the ability to manage the app&#39;s content including files, announcements,
    //                 assignments, and calendar items. On the backend, content and data is managed
    //                 using Firebase&#39;s Cloud Functions, Firestore database, and storage buckets.
    //             </p>
    //             <p>
    //                 All text-based content features a WYSIWYG editor allowing custom formatting, and
    //                 embedded images and video. The app also features a daily news video from CNN10,
    //                 which is accessed through the CNN.com RSS feed and embedded into the page.
    //             </p>
    //         </Fragment>
    //     ),
    //     mobileImageLandscape: false,
    //     reverse: false,
    //     shortDescription:
    //         'A homepage for students to keep up to date with course materials and important events',
    //     title: 'djinkens.org',
    // },
    {
        imageDesktop: '/images/rncl.png',
        imageDesktopAlt: 'React Native Circle List',
        imageMobile: null,
        imageMobileAlt: null,
        linkAddress: 'https://github.com/mjinkens1/react-native-circle-list',
        longDescription: (
            <p>
                An open source library that consists of a React Native component that renders a list
                of items into an infinite circular list. The list dynamically inserts list items
                into the circle so large numbers of list items appear in a circle of a given size,
                with infinite looping over list items.
            </p>
        ),
        mobileImageLandscape: false,
        shortDescription: 'A React Native component to render a list of items in a circular list',
        title: 'react-native-circle-list',
    },
    // {
    //     imageDesktop: '/images/data-cloud.png',
    //     imageDesktopAlt: 'DataCloud',
    //     imageMobile: '/images/data-cloud-mobile.png',
    //     imageMobileAlt: 'DataCloud Mobile',
    //     linkAddress: 'https://www.datacloud.com/',
    //     longDescription: (
    //         <p>
    //             This page was built using Webflow, allowing for the development of a clean, modern
    //             web application that can be updated as needed by the client.
    //         </p>
    //     ),
    //     mobileImageLandscape: false,
    //     shortDescription: 'A marketing website for DataCloud',
    //     title: 'datacloud.com',
    // },

    // {
    //     imageDesktop: '/images/photo-blog.png',
    //     imageDesktopAlt: 'photos site',
    //     imageMobile: '/images/photos-mobile.png',
    //     imageMobileAlt: 'photos site mobile',
    //     linkAddress: null, // 'http://mjinkens.com/photos',
    //     longDescription: (
    //         <p>
    //             This app was built using the MERN stack - MongoDB, Express, React, and Node.js and
    //             is hosted on AWS. The app dynamically builds the menu components based on database
    //             content, and shows the photo location on an embedded Google Maps instance.
    //         </p>
    //     ),
    //     mobileImageLandscape: true,
    //     shortDescription: 'A photo sharing app built in React for travel and adventure photos',
    //     title: 'Photo Sharing - Update in Progress',
    // },
    // {
    //     imageDesktop: '/images/giving-clearly.png',
    //     imageDesktopAlt: 'giving clearly',
    //     imageMobile: '/images/giving-clearly-mobile.png',
    //     imageMobileAlt: 'giving clearly mobile',
    //     linkAddress: null,
    //     longDescription: (
    //         <p>
    //             This app is built in React and uses Redux for state management. In addition to the
    //             overall layout and page design, the site logos were designed and created by me using
    //             Inkscape.
    //         </p>
    //     ),
    //     mobileImageLandscape: false,
    //     shortDescription: 'A React app for connecting people with charities to make giving easy',
    //     title: 'givingclearly.com (In Progress)',
    // },
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
                    analysis program logs the path and deploys a child-program to continually
                    monitor the path.
                </p>
                <p>
                    The child-program will execute trades on the network as long as the path remains
                    profitable. The program is designed to automatically handle network connectivity
                    issues by timing out at certain points of the algorithm, and automatically
                    resuming operation.
                </p>
            </Fragment>
        ),
        mobileImageLandscape: false,
        shortDescription: `A program implemented in Node.js to analyze digital asset exchange
            networks for arbitrage opportunities and automatically execute
            trades`,
        title: 'Crytpocurrency Arbitrage',
    },
    {
        imageDesktop: '/images/chart.png',
        imageDesktopAlt: 'crypto',
        imageMobile: null,
        imageMobileAlt: null,
        linkAddress: null,
        longDescription: (
            <p>
                This program was written in Python and is deployed on AWS. It evaluates multiple
                trading strategies simultaneously to look for and execute profitable trades.
            </p>
        ),
        mobileImageLandscape: false,
        shortDescription: `A program implemented in Python to analyze and classify digital asset exchange data in order to extract patterns and indicators of future price direction and market sentiment.`,
        title: 'Crytpocurrency Market Analysis',
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
        title: 'mjinkens.com (Beware of Recursion)',
    },
];

export class Projects extends PureComponent {
    render() {
        return (
            <div className="container projects">
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
                            title,
                            video,
                        },
                        index,
                    ) => (
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
                            video={video}
                        />
                    ),
                )}
            </div>
        );
    }
}
