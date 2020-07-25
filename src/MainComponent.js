import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import classes from './main.module.css';
import logo from './logo.jpeg';
import Register from './Register';
import Confirm from './Confirm';
import "@reach/dialog/styles.css";

const StyleDiv = styled.div`
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: black;

const StyleButton = styled.button`
border: none;
outline: 0;
display: inline-block;
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

const SelectStyle = styled.select`
border:1px solid #456879;
border-radius:10px;
height: 50px;
width: 300px;
padding-left: 12px;
font-size:20px;`

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
                    <input type="password" className={classes.div} placeholder="Use Numbers" pattern = "[0-9]+" name="psw" required />

                    <StyleButton type="submit">Continue</StyleButton>
                </form>
            )}
            </Confirm>
            </div>
            </div>
        </div>
    );
}

export default maincomponent

