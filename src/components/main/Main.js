import React from 'react';
import { Loading } from '../loading/Loading';
import { Landing } from '../landing/Landing';
import { Sidebar } from '../common/sidebar/Sidebar';
import { About } from '../about/About';
import { Spacer } from '../common/Spacer';
import { Projects } from '../projects/Projects';
import { Contact } from '../../containers/Contact';
import './styles.css';

export const Main = () => {
    return (
        <div className="main">
            <Loading />
            <Landing />
            <div className="content">
                <Sidebar />
                <About />
                <Spacer />
                <Projects />
                <Contact />
            </div>
        </div>
    );
};
