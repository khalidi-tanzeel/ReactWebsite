import React from 'react';
import classes from './Footer.module.css';
import destination from './destination.jpeg';

const footer = () => {
    return (
        <div >
            <footer className={classes.footerdistributed}>

<div className={classes.footerleft}>
<img src={destination}/>
    <h3><span> Happy Tours</span></h3>

    <p className={classes.footerlinks}>
        <a href="#">Explore</a>
        |
        <a href="#">Instagram</a>
        |
        <a href="#">Facebook</a>
        |
        <a href="mailto:tanzeelrahimkhalidi@gmail.comm">Feedback</a>
    </p>


    <p className={classes.footercompanyname}>© 2020 HappyTours Pvt. Ltd.</p>
</div>

<div className={classes.footercenter}>
    <div>
        <i className={classes.fafamapmarker}></i>
          <p>
            Sydney,Australia - 400710</p>
    </div>

    <div>
        <i className={classes.fafaphone}></i>
        <p>+91 22-27782183</p>
    </div>
    <div>
        <i className={classes.fafaenvelope}></i>
        <p><a href="mailto:tanzeelrahimkhalidi@gmail.comm">HappyTours@gmail.com</a></p>
    </div>
</div>
<div className={classes.footerright}>
    <p className={classes.footercompanyabout}>
        <span>About the company</span>
        We offer world best tourists services to you, your satisfaction is our first pirority.</p>
</div>
</footer>
           </div>
        
    );
}
export default footer