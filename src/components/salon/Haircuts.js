import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/salon/haircuts-main.jpg";
const title = "Haircuts";
const haircuts = [
  {
    row: [
      {
        icon: "/resources/services/salon/haircut-blow-dry.jpg",
        title: "Haircut & Blow dry",
        price: "$72.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/haircut-express.jpg",
        title: "Express cut",
        price: "$35.00 - $45.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/haircut-kids.jpg",
        title: "Kid's Haircut (12 & under)",
        price: "$15.00 - $20.00",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/salon/haircut-bangs.jpg",
        title: "Bangs",
        price: "$17.00",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  }
];

export default class Haircuts extends Component {
  render() {
    return (
      <ServicePage background={background} title={title} rows={haircuts} />
    );
  }
}
