import React, { Component } from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import * as actions from "../actions";

class Payments extends Component {
  onToken = (token) => {
    this.props.handleToken(token);
  };
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="5 for 5 email credits"
        amount={500}
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn green">Add Credits</button>
      </StripeCheckout>
    );
  }
}
export default connect(null, actions)(Payments);
