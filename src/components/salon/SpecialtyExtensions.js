import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/salon/specialty-main.jpg";
const title = "Specialty w/ Extensions";
const specialtyExtensions = [
  {
    row: [
      {
        icon: "/resources/services/salon/specialty-kinky.jpg",
        title: "Kinky Twist",
        price: "$150.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/specialty-rope.jpg",
        title: "Rope Twist",
        price: "$170.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/specialty-micro.jpg",
        title: "Micro Braids",
        price: "$300.00 - $450.00",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  }
];

export default class SpecialtyExtensions extends Component {
  render() {
    return (
      <ServicePage
        background={background}
        title={title}
        rows={specialtyExtensions}
      />
    );
  }
}
