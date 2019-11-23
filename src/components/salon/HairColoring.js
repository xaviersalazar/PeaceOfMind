import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/salon/haircolor-main.jpg";
const title = "Hair Coloring";
const smallNotice = "+Upcharge of $20 for premium color";
const hairColoring = [
  {
    row: [
      {
        icon: "/resources/services/salon/haircolor-premium.jpg",
        title: "Premium Color",
        price: "$85.00 - $105.00",
        desc:
          "The ultimate in hair coloring, providing smoothness, protection and brilliant shine for long-lasting color",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/haircolor-premium-haircut.jpg",
        title: "Premium Color w/ Haircut",
        price: "$85.00 - $110.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/haircolor-single.jpg",
        title: "Single-Process",
        price: "$65.00+",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/salon/haircolor-single-haircut.jpg",
        title: "Single-Process w/ Haircut",
        price: "$85.00 - $95.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/haircolor-double.jpg",
        title: "Double-Process+",
        price: "$90.00 - $120.00",
        desc: "Bleach & tone or high lift color & tone",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/haircolor-double-haircut.jpg",
        title: "Double-Process w/ Haircut+",
        price: "$105.00 - $120.00",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/salon/haircolor-gloss.jpg",
        title: "Glossing+",
        price: "$20.00",
        desc: "Performed following chemical service to add intense shine",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/haircolor-rinse.jpg",
        title: "Temporary Color Rinse",
        price: "$15.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/haircolor-corrective.jpg",
        title: "Corrective Color",
        price: "$90.00 - $120.00+",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  }
];

export default class HairColoring extends Component {
  render() {
    return (
      <ServicePage
        background={background}
        title={title}
        rows={hairColoring}
        smallNotice={smallNotice}
      />
    );
  }
}
