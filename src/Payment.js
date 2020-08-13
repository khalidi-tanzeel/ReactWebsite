import React , {Component} from 'react';
import Header from './Header';
import classes from './Payment.module.css';
class Payment extends Component {

    handsleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/ConfirmBooking');
    }
    render (){
    return (
        <div>
            <Header />
            <div className={classes.row}>
                <div className={classes.col75}>
                    <div className={classes.container}>
                        <form onSubmit={this.handsleSubmit}>

                            <div className={classes.row}>
                                <div className={classes.col25} >

                                    <h3>Billing Address</h3>
                                    <label for="fname" className={classes.div}> <b>Full Name</b> </label>
                                    <input type="text" className={classes.div} id="fname" name="firstname" placeholder="Tanzeel Rahim" required />
                                    <label for="email" className={classes.div}> <b>Email</b></label>
                                    <input type="email" className={classes.div} id="email" name="email" placeholder="tanzeel@example.com" required />
                                    <label for="adr" className={classes.div} > <b>Address</b></label>
                                    <input type="text" className={classes.div} id="adr" name="address" placeholder="542 W. 15th Street" required />
                                    <label for="city" className={classes.div}><b>City</b></label>
                                    <input type="text" className={classes.div} id="city" name="city" placeholder="Sydney" required />

                                    <div className={classes.row}>
                                        <div className={classes.col50}>
                                            <label for="state" className={classes.div}><b>State</b></label>
                                            <input type="text" id="state" className={classes.div} name="state" placeholder="NSW" required required />
                                        </div>
                                        <div className={classes.col50}>
                                            <label for="zip" className={classes.div} ><b>Zip</b></label>
                                            <input type="text" className={classes.div} id="zip" name="zip" placeholder="10001" required />
                                        </div>
                                    </div>
                                </div>


                                <div className={classes.col50}>
                                    <h3>Payment</h3>
                                    <label for="cname" className={classes.div}><b>Name on Card</b></label>
                                    <input type="text" className={classes.div} id="cname" name="cardname" placeholder="Tanzeel" required />
                                    <label for="ccnum" className={classes.div}><b>Credit card number</b></label>
                                    <input type="number" className={classes.div} id="ccnum" name="cardnumber" placeholder="1111222233334444" required />
                                    <label for="expmonth" className={classes.div} ><b>Exp Month</b></label>
                                    <input type="text" className={classes.div} id="expmonth" name="expmonth" placeholder="September" required />
                                    <div className={classes.row}>
                                        <div className={classes.col50}>
                                            <label for="expyear" className={classes.div} ><b>Exp Date</b></label>
                                            <input type="date" className={classes.div} id="expyear" name="expyear" placeholder="9/12/2018" required />
                                        </div>
                                        <div className={classes.col50}>
                                            <label for="cvv" className={classes.div} ><b>CVV</b></label>
                                            <input type="number" className={classes.div} id="cvv" name="cvv" placeholder="352" required />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <label>
                                <input type="checkbox" name="sameadr" /> Shipping address same as billing
                            </label>
                            <input type="submit" value="Continue to checkout" className={classes.btn} />

                        </form>
                    </div>
                </div>


            </div>

        </div>

    );
}
}

export default Payment
