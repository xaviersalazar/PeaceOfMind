import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/salon/straightening-main.jpg";
const title = "Straightening Services";
const straighteningServices = [
  {
    row: [
      {
        icon: "/resources/services/salon/straightening-organic-blowout.jpg",
        title: "Organic Colours Systems Ultimate Blowout",
        price: "$150.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon:
          "/resources/services/salon/straightening-organic-blowout-haircut.jpg",
        title: "Organic Colours Systems Blowout w/ Haircut",
        price: "$170.00 - $180.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon:
          "/resources/services/salon/straightening-organic-thermal-straightening.jpg",
        title: "Organic Colours Systems Thermal Straightening",
        price: "$300.00 - $350.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon:
          "/resources/services/salon/straightening-organic-thermal-straightening-haircut.jpg",
        title: "Organic Colours Systems Thermal Straightening w/ Haircut",
        price: "$325.00 - $350.00",
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
        icon: "/resources/services/salon/straightening-retouch.jpg",
        title: "Retouch",
        price: "$245.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/straightening-retouch-haircut.jpg",
        title: "Retouch w/ Haircut",
        price: "$260.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      }
    ]
  }
];

export default class StraighteningServices extends Component {
  render() {
    return (
      <ServicePage
        background={background}
        title={title}
        rows={straighteningServices}
      />
    );
  }
}
