import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import classes from './main.module.css';
import logo from './logo.jpeg';
import Register from './Register';
import Confirm from './Confirm';
import "@reach/dialog/styles.css";


const maincomponent = (props) => {
    return (
        <div className={classes.div}>
            <Header />
            <h2 className={classes.heading}>Register with us to avail the exciting offers</h2>
            <div className={classes.bgimg}>
            <div className={classes.App}>
            <Confirm title = "Confirm" description="Are you sure that all your details are correct?">
            {confirm => (
            <form className={classes.container} onSubmit={confirm(props.click)}>
                    <h1>Register</h1>

                    <label for="email" className={classes.div}><b>Name</b></label>
                    <input type="text" className={classes.div} placeholder="Enter Name" name="name" value = {props.name} onChange = {props.clicked} required />

                    <label for="email" className={classes.div}><b>Email</b></label>
                    <input type="email" className={classes.div} placeholder="Enter Email" name="email" required />

                    <label for="psw" className={classes.div}><b>Password</b></label>
                    <input type="password" className={classes.div} placeholder="Use Number" pattern = "[0-9]+" name="psw" required />

                    <button className = {classes.button} type="submit">Continue </button>
                </form>
            )}
            </Confirm>
            </div>
            </div>
        </div>
    );
}

export default maincomponent

