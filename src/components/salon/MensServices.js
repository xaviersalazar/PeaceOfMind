import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/salon/mens-main.jpg";
const title = "Mens Services";
const mensServices = [
  {
    row: [
      {
        icon: "/resources/services/salon/mens-haircut.jpg",
        title: "Haircut",
        price: "$30.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/mens-gray.jpg",
        title: "Gray Blending",
        price: "$45.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/mens-signature.jpg",
        title: "Signature Experience",
        price: "$65.00",
        desc:
          "Includes scalp massage, hot towel, haircut, and facial hair trim",
        sm: 12,
        xl: 4
      }
    ]
  }
];

export default class MensServices extends Component {
  render() {
    return (
      <ServicePage background={background} title={title} rows={mensServices} />
    );
  }
}
