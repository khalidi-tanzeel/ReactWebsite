import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './contacts.module.css';
import Header from './Header';
import Confirm from './Confirm';
import "@reach/dialog/styles.css";
import destination from './destination.jpeg';

class admin extends Component {

  handsleSubmit = (event) => {
    this.props.history.push('/Book');
  }
  render() {
    return (

      <div className={classes.contacts}>
        <Header />
        <div className={classes.container}>
          <div style={{ textAlign: "center" }}>
            <h2>Admin Mode</h2>
            <h3>SignIn, with the admin credentials</h3>
          </div>
          <div className={classes.row}>
            <div className={classes.column}>
              <img src={destination} style={{ width: '100%' }} />
            </div>
            <div className={classes.column}>
              <Confirm title="Confirm" description="Are you sure that all your details are correct?">
                {confirm => (
                  <form onSubmit={confirm(this.handsleSubmit)} >


                    <label for="lname">Email Address</label>
                    <input className={classes.contacts}
                      type="email" id="lname"
                      name="lastName"
                      // onChange={props.clicked}
                      //value={props.email}
                      required
                      placeholder="Your Email Address.." />

                    <label for="psw" className={classes.div}>Password</label>
                    <input type="password" className={classes.contacts} placeholder="Use Numbers" pattern="[0-9]+" name="psw" required />
                    <label for="psw" className={classes.div}>Confirm Password</label>
                    <input type="password" className={classes.contacts} placeholder="******" pattern="[0-9]+" name="psw" required />
                    <br />
                    <br />
                    <input className={classes.contacts} type="submit" value="Continue" />
                  </form>
                )}
              </Confirm>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default admin
