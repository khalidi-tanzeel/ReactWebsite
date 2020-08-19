import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import classes from './contacts.module.css';
import Register from './Register';
import Confirm from './Confirm';
import "@reach/dialog/styles.css";
import destination from './destination.jpeg';

const StyleDiv = styled.div`
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: black;
font-family:'Grenze Gotisch';`

const SelectStyle = styled.select`
border:1px solid #456879;
border-radius:10px;
font-family: 'Lemonada', cursive;
height: 50px;
width: 300px;
padding-left: 12px;
font-size:20px;`

const maincomponent = (props) => {
    return (
        <div className={classes.contacts}>
            <Header />
            <div className={classes.container}>
                 <div style={{ textAlign: "center" }}>
                    <h2>Register with us to avail the exciting offers</h2>
         
                </div>
                <div className={classes.row}>
                    <div className={classes.column}>
                        <img src={destination} style={{ width: '100%' }} />
                    </div>
                    <div className={classes.column}>
                        <Confirm title="Confirm" description="Are you sure that all your details are correct?">
                            {confirm => (
                                <form onSubmit={confirm(props.click)} >
                                    <label for="fname">Full Name</label>
                                    <input className={classes.contacts}
                                        type="text" id="fname"
                                        name="firstName"
                                        required
                                        placeholder="Your name.."
                                        onChange={props.clicked}
                                        value={props.firstName} />

                                    <label for="lname">Email Address</label>
                                    <input className={classes.contacts}
                                        type="text" id="lname"
                                        name="lastName"
                                        onChange={props.clicked}
                                        value={props.email}
                                        required
                                        placeholder="Your Email Address.." />

                                    <label for="psw" className={classes.div}>Password</label>
                                    <input type="password" className={classes.contacts} placeholder="Use Numbers" pattern="[0-9]+" name="psw" required />
                                     <br/>
                                     <br/>
                                    <input className={classes.contacts} type="submit" value="Continue"/>
                                </form>
                            )}
                        </Confirm>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default maincomponent

