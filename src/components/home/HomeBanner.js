import React, { Component } from "react";
import { Col } from "reactstrap";

export default class HomeBanner extends Component {
  render() {
    return (
      <Col>
        <h1 className="text-center">Massage &amp; Natural Healing</h1>
        <p className="text-center px-5">
          Come in today for a Singles Massage Session or a Couples Discounted
          Massage Packet. We use all organic massage products using plants,
          fresh herbs and oils. We are unlike your everyday Day Spa. We are a
          private practice not corporate. We cater to just you when you arrive.
          We help ease all your aches and pains helping you find true Peace Of
          Mind.
        </p>
      </Col>
    );
  }
}
