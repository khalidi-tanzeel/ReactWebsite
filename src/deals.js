import React from 'react';
import Header from './Header';
import classes from './deals.module.css';
import { Link } from 'react-router-dom';

const deals = () => {
    return (
        <div>
            <Header />
            <h2 style={{textAlign:"center", fontSize:"30px"}}>Discounted Prices</h2>
            <p  style={{textAlign:"center",fontSize:"20px"}}>You can signup to enjoy the perks of these deals or Wants to go <Link to ='/Register'>Back</Link>.</p>
            <div className={classes.columns}>
                <ul className={classes.price}>
                    <li className={classes.header} style={{ backgroundColor: "#9CAF59" }}>Basic</li>
                    <li className={classes.grey}>$ 99.99 / year</li>
                    <li>2 Bedroom suite</li>
                    <li>Free Wifi</li>
                    <li>10% Discount</li>
                    <li>Breakfast</li>
                    <li className={classes.grey}><a href="#" className={classes.button}>Sign Up</a></li>
                </ul>
            </div>

            <div className={classes.columns}>
                <ul className={classes.price}>
                    <li className={classes.header} style={{ backgroundColor: "#9CAF59" }}>Pro</li>
                    <li className={classes.grey}>$ 224.99 / year</li>
                    <li>3 Bedroom suite</li>
                    <li>Free Wifi</li>
                    <li>25% Discount</li>
                    <li>Breakfast & Lunch</li>
                    <li className={classes.grey}><a href="#" className={classes.button}>Sign Up</a></li>
                </ul>
            </div>

            <div className={classes.columns}>
                <ul className={classes.price}>
                    <li className={classes.header} style={{ backgroundColor: "#9CAF59" }}>Premium</li>
                    <li className={classes.grey}>$ 559.99 / year</li>
                    <li>5 Bedroom suite</li>
                    <li>Free Wifi</li>
                    <li>50% Discount</li>
                    <li>All Meals included</li>
                    <li className={classes.grey}><a href="#" className={classes.button}>Sign Up</a></li>
                </ul>
            </div>
        </div>
    );
}

export default deals
