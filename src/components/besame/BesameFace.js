import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/massages/massage-about-main.jpg";
const title = "Face";
const otherNotice = "All products sold in store only";
const faceProducts = [
  {
    row: [
      {
        icon: "/resources/face/apricot-cream-rouge.jpg",
        title: "Apricot Cream Rogue",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/bisque-souffle-foundation.jpg",
        title: "Bisque Souffle Foundation",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/brightening-violet-powder.jpg",
        title: "Brightening Violet Powder",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/crimson-cream-rouge.jpg",
        title: "Crimson Cream Rouge",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/dark-cashmere-powder-compact.jpg",
        title: "Dark Cashmere Powder Compact",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/honey-souffle-foundation.jpg",
        title: "Honey Souffle Foundation",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/face/light-cashmere-powder-compact.jpg",
        title: "Light Cashmere Powder Compact",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/medium-beige-souffle-foundation.jpg",
        title: "Medium Beige Souffle Foundation",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/medium-cashmere-powder-compact.jpg",
        title: "Medium Cashmere Powder Compact",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/porcelain-cashmere-powder-compact.jpg",
        title: "Porcelain Cashmere Powder Compact",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/refill-dark.jpg",
        title: "Cashmere Powder Dark Refill",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/refill-light.jpg",
        title: "Cashmere Powder Light Refill",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/face/refill-medium.jpg",
        title: "Cashmere Powder Medium Refill",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/refill-porcelain.jpg",
        title: "Cashmere Powder Porcelain Refill",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/refill-violet.jpg",
        title: "Cashmere Powder Violet Refill",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/true-beige-souffle-foundation.jpg",
        title: "True Beige Souffle Foundation",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/violet-brightening-powder-compacts.jpg",
        title: "Violet Brightening Powder Compact",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      },
      {
        icon: "/resources/face/yellow-cameo-souffle-foundation.jpg",
        title: "Yellow Cameo Souffle Foundation",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2
      }
    ]
  }
];

// TODO: Change background of main pic
export default class BesameFace extends Component {
  render() {
    return (
      <ServicePage
        background={background}
        title={title}
        rows={faceProducts}
        otherNotice={otherNotice}
      />
    );
  }
}
