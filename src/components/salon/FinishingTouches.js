import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/salon/finishing-touches-main.jpg";
const title = "Finishing Touches";
const finishingTouches = [
  {
    row: [
      {
        icon: "/resources/services/salon/finishing-touches-blowdry.jpg",
        title: "Blow Dry",
        price: "$25.00 - $45.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/finishing-touches-formal.jpg",
        title: "Formal Up-do",
        price: "$80.00 - $100.00",
        desc: "Braiding, up-styles and curls",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon:
          "/resources/services/salon/straightening-organic-thermal-straightening-haircut.jpg",
        title: "Ironworks",
        price: "$25.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      }
    ]
  }
];

export default class FinishingTouches extends Component {
  render() {
    return (
      <ServicePage
        background={background}
        title={title}
        rows={finishingTouches}
      />
    );
  }
}
