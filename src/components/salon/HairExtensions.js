import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/salon/hair-ext-main.jpg";
const title = "Hair Extensions";
const hairExtensions = [
  {
    row: [
      {
        icon: "/resources/services/salon/hair-ext.jpg",
        title: "Hair Extensions",
        price: "",
        desc:
          "Preliminary consultation required. Cost of hair extensions additional. Price and time quoted at consultation. ong hair pricing may apply. Additional charge of $15 or $20",
        sm: 12,
        md: 6,
        lg: 3
      }
    ]
  }
];
export default class HairExtensions extends Component {
  render() {
    return (
      <ServicePage
        background={background}
        title={title}
        rows={hairExtensions}
      />
    );
  }
}
