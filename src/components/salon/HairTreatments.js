import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/salon/hair-treatments-main.jpg";
const title = "Hair Treatments";
const hairTreatment = [
  {
    row: [
      {
        icon: "/resources/services/salon/hair-treatments-keep-it-curl.jpg",
        title: "Keep It Curl Organic Colour Systems Treatment",
        price: "$20.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/hair-treatments-aqua-boost.jpg",
        title: "Moisture Aqua Boost Organic Treatment",
        price: "$20.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/hair-treatments-breakage.jpg",
        title: "Breakage & Strength Loss Power Build Treatment",
        price: "$20.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/hair-treatments-organic-colour.jpg",
        title: "Organic Colour Systems Smooth+ Treatment",
        price: "$20.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/salon/hair-treatments-organic-scalp.jpg",
        title: "Dry Scalp & Dandruff",
        price: "$45.00",
        desc: "Organic Custom Blend & Scalp Tonic",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/hair-treatments-scalp.jpg",
        title: "Dry Scalp",
        price: "$20.00",
        desc: "Dry Scalp Tonic",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/hair-treatments-clarifying.jpg",
        title: "Organic Colour Systems Intensive Clarifying",
        price: "$20.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      }
    ]
  }
];

export default class HairTreatments extends Component {
  render() {
    return (
      <ServicePage background={background} title={title} rows={hairTreatment} />
    );
  }
}
