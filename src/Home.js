import React from 'react';
import classes from './Home.module.css';
import Header from './Header';
import AboutHome from './AboutHome';

const home = () => {
    return (
        <div>
        <Header/>
        <AboutHome/>
        </div>
    );
}

export default home