import React from 'react';
import classes from './Footer.module.css';
import destination from './destination.jpeg';

const footer = () => {
    return (
        <div >
            <footer className={classes.footerdistributed}>

                <div className={classes.footerleft}>
                    <img src={destination} />
                    <h3><span> Happy Tours</span></h3>

                    <p className={classes.footerlinks}>
                        <a href="https://www.facebook.com/">Explore</a>
        &ensp;
        <a href="https://www.instagram.com/tanzeel_khalidii/">Instagram</a>
        &ensp;
        <a href="https://github.com/khalidi-tanzeel">GitHub</a>
        &ensp;
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
                        <br />
                        <i className={classes.fafaenvelope}></i>
                        <p><a href="mailto:tanzeelrahimkhalidi@gmail.comm">HappyTours@gmail.com</a></p>
                    </div>
                </div>
                <div className={classes.footerright}>
                    <p className={classes.footercompanyabout}>
                        <span>About the Company</span>
                    We offer world best tourists services to you.<br /><br />your satisfaction is our first pirority.</p>
                </div>
            </footer>
        </div>

    );
}
export default footer