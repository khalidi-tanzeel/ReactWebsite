import React from 'react';
import classes from './Footer.module.css'

const footer = () => {
    return (
        <div className={classes.line}>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <a className={classes.a}
                        href="https://twitter.com/julesforrest">
                        Explore</a>
                </li>

                <li className={classes.li}>
                    <a className={classes.a}
                        href="https://codepen.io/julesforrest">
                        Visit</a>
                </li>

                <li className={classes.li}>
                    <a className={classes.a}
                        href="mailto:julesforrest@gmail.com">
                        Follow</a>
                </li>

                <li className={classes.li}>
                    <a className={classes.a}
                        href="https://dribbble.com/julesforrest">
                        New Business</a>
                </li>
                <li>
                    <p>👋</p>
                </li>
            </ul>
        </div>
    );
}
export default footer