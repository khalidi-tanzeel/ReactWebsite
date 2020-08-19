import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const header = () => {
    return(
 <div className = { classes.header }>
         <Link to = "/" className = { classes.logo }>HAPPY TOURS</Link>
          <div className = { classes.headerright }>
          <Link to = '/Home' >Places to go</Link>
          <Link to = './contacts'>Contact Us</Link>
          <Link to = '/about' >About Us</Link>
          <Link to = '/trip' className = { classes.active }>Plan Trip</Link>
           </div>
        </div>
    );
}

export default header
