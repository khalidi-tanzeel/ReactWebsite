import React, {Component} from 'react';
import Header from './Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyleButton = styled.button`
border: none;
outline: 0;
display: inline-block;
padding: 10px 25px;
color: white;
background-color: black;
text-align: center;
cursor: pointer;
margin-left:650px;
margin-top: 50px;
box-shadow: 0px 10px 14px -7px #276873;
border-radius:8px;
display:inline-block;
cursor:pointer;
font-family: 'Lemonada', cursive;
font-size:16px;
font-weight:bold;
padding:13px 32px;
text-decoration:none;
text-shadow:0px 1px 0px #3d768a;`

class book extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Link to ="/trip"> <StyleButton>Back</StyleButton> </Link>
            </div>
        );
    }
}

export default book
