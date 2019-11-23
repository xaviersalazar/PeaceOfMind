import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/salon/natural-main.jpg";
const title = "Natural Styling";
const naturalStyling = [
  {
    row: [
      {
        icon: "/resources/services/salon/natural-shampoo.jpg",
        title: "Shampoo & Diffuse",
        price: "$35.00 - $60.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/natural-basic-corn-row.jpg",
        title: "Basic Corn Row",
        price: "$50.00 - $100.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/natural-corn-row-design.jpg",
        title: "Corn Row w/ Design",
        price: "$60.00 - $150.00",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/salon/natural-bantu.jpg",
        title: "Bantu Knots",
        price: "$80.00 - $150.00",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  }
];

export default class NaturalStyling extends Component {
  render() {
    return (
      <ServicePage
        background={background}
        title={title}
        rows={naturalStyling}
      />
    );
  }
}
