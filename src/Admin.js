import React , {Component} from 'react';
import { withRouter } from 'react-router-dom';
import classes from './main.module.css';
import styled from 'styled-components';
import logo from './logo.jpeg';
import Header from './Header';
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
margin-top: 5px;
box-shadow: 0px 10px 14px -7px #276873;
border-radius:8px;
display:inline-block;
cursor:pointer;
font-size:16px;
font-weight:bold;
padding:13px 32px;
text-decoration:none;
float: left;
text-shadow:0px 1px 0px #3d768a;`

class admin extends Component {

    handsleSubmit = (event) => {
        // event.preventDefault();
         this.props.history.push('/Book');
     }
    render(){
        return(
            <div>
                <Header/>
                 <div className={classes.bgimg}>
                <form className={classes.container} onSubmit={this.handsleSubmit}>
                    <h1>Admin Board</h1>

                    <label for="email" className={classes.div}><b>Email</b></label>
                    <input type="email" className={classes.div} placeholder="Enter Email" name="email" required />

                    <label for="psw" className={classes.div}><b>Password</b></label>
                    <input type="password" className={classes.div} placeholder="Use Numbers" pattern = "[0-9]+" name="psw" required />

                    <StyleButton type="submit">Submit</StyleButton>
                </form>
                </div>

            </div>
        );
    }
}

export default admin
