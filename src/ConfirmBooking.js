import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';



const confirmOrder = () => {
    return (
    <div>
        <Header />
        <h4 style={{marginTop:100, marginBottom:300, textAlign:'center', marginLeft:20, marginRight:20}}>Hi User, Thanks for the booking with us, we will shortly send you the email regarding confirmation of your order <br/> <br/>
        <Link to ="/">OK</Link></h4>
        

</div>    
);
}

export default confirmOrder