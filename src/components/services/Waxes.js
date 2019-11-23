import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/massages/waxing-main.jpg";
const title = "Waxing";
const waxes = [
  {
    row: [
      {
        icon: "/resources/services/massages/waxing-arms.jpg",
        title: "Arm Waxing",
        price: "$25.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/waxing-back.jpg",
        title: "Back Waxing",
        price: "$70.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/waxing-bikini.jpg",
        title: "Bikini Waxing",
        price: "$35.00",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/massages/waxing-brazilian.jpg",
        title: "Brazilian Bikini Waxing",
        price: "$80.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/waxing-face.jpg",
        title: "Face Waxing",
        price: "$50.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/waxing-full-leg.jpg",
        title: "Full Leg Waxing",
        price: "$70.00",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/massages/waxing-chest.jpg",
        title: "Chest Waxing",
        price: "$50.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/waxing-chin.jpg",
        title: "Chin Waxing",
        price: "$18.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/waxing-extended-bikini.jpg",
        title: "Extended Bikini Waxing",
        price: "$55.00",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/massages/waxing-eyebrow.jpg",
        title: "Eyebrow Waxing",
        price: "$25.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/waxing-lip.jpg",
        title: "Lip Waxing",
        price: "$20.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/waxing-lower-leg.jpg",
        title: "Lower Leg Waxing",
        price: "$40.00",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/massages/waxing-armpit.jpg",
        title: "Underarm Waxing",
        price: "$28.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/waxing-upper-leg.jpg",
        title: "Upper Leg Waxing",
        price: "$40.00",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  }
];

export default class Waxes extends Component {
  render() {
    return <ServicePage background={background} title={title} rows={waxes} />;
  }
}
