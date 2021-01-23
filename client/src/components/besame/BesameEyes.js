import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/eyes/eyes-main.jpg";
const title = "Eyes";
const otherNotice = "All products sold in store only";
const eyeProducts = [
  {
    row: [
      {
        icon: "/resources/eyes/black-mascara.jpg",
        title: "Black Mascara",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/eyes/mascara.jpg",
        title: "Brown Cake Mascara",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/eyes/mascara.jpg",
        title: "Black Cake Mascara",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
    ],
  },
];
export const BesameEyes = () => (
  <ServicePage
    background={background}
    title={title}
    rows={eyeProducts}
    otherNotice={otherNotice}
  />
);
