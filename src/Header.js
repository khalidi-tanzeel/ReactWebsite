import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const header = () => {
    return(
        <div className = { classes.header }>
         <Link to = "/" className = { classes.logo }>HAPPY TOURS</Link>
          <div className = { classes.headerright }>
          <Link to = '/Home'>Home</Link>
          <Link to = './contacts'>Contact</Link>
          <Link to = '/about'>About Us</Link>
           </div>
        </div>
    );
}

export default header

