import React from 'react';
import Header from './Header';
import MainPage from './MainPage';
import MainComponent from './MainComponent';
import car from './car.jpeg';
import hotel from './hotel.jpeg';
import person from './person.jpeg';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleButton = styled.button`
border: none;
outline: 0;
display: inline-block;
padding: 10px 25px;
color: white;
background-color: black;
text-align: center;
cursor: pointer;
margin-right:50px;
box-shadow: 0px 10px 14px -7px #276873;
border-radius:8px;
display:inline-block;
cursor:pointer;
font-size:16px;
font-weight:bold;
padding:13px 32px;
text-decoration:none;
text-shadow:0px 1px 0px #3d768a;`


const Register = (props) =>{
    return (

        <div className={classes.div}>
            <Header/>
        <h2 className={classes.heading}>About Our Services</h2>
        <p className={classes.headings}> You can check our discounted <Link to = "/deals">deals</Link> and the other <Link to ="/Home">services</Link> that we are provided</p>
        <div className={classes.row}>
          <div className={classes.column}>
            <div className={classes.card}>
              <img src={hotel} alt="forest" style={{ width: "100%" }} />
              <div className={classes.container}>
                <h2 className={classes.titles}>Hotel Booking</h2>
                <p className={classes.title}>Hat Head National Park</p>
                <p className={classes.title}>A delightful stroll through rare coastal rainforest, this short track is a great way to introduce the kids to the joys of wildlife-spotting and birdwatching.</p>
                <p className={classes.title}>Distance : 2km return</p>
                <p className={classes.title}>Entry Fees : Park entry fees apply</p>
                <p> <Link to ="/HotelBooking"><button className={classes.button}>Book</button></Link></p>
              </div>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.card}>
              <img src={car} alt="mountain" style={{ width: "100%" }} />
              <div className={classes.container}>
                <h2 className={classes.titles}>Rent a Car</h2>
                <p className={classes.title}>Overland Track, Tasmania</p>
                <p className={classes.title}>A delightful stroll through rare coastal rainforest, this short track is a great way to introduce the kids to the joys of wildlife-spotting and birdwatching.</p>
                <p className={classes.title}>Distance : 1000km return</p>
                <p className={classes.title}>Entry Fees : Park entry fees apply</p>
                <p> <Link to ="/CarHire"><button className={classes.button}>Book</button></Link></p>
              </div>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.card}>
              <img src={person} alt="snow" style={{ width: "100%" }} />
              <div className={classes.container}>
                <h2 className={classes.titles}>Book Tourist Guide</h2>
                <p className={classes.title}>Snowy Mountains</p>
                <p className={classes.title}>A delightful stroll through rare coastal rainforest, this short track is a great way to introduce the kids to the joys of wildlife-spotting and birdwatching.</p>
                <p className={classes.title}>Distance : 5000km return</p>
                <p className={classes.title}>Entry Fees : Park entry fees apply</p>
                <p> <Link to ="/HireGuide"><button className={classes.button}>Book</button></Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
          
        
    )
}

export default Register
