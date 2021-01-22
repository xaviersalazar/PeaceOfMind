import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/haircuts-main.jpg";
const title = "Haircuts";
const haircuts = [
  {
    row: [
      {
        icon: "/resources/services/salon/haircut-blow-dry.jpg",
        title: "Haircut & Blow dry",
        price: "$72.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/haircut-express.jpg",
        title: "Express cut",
        price: "$35.00 - $45.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/haircut-kids.jpg",
        title: "Kid's Haircut (12 & under)",
        price: "$17.00 - $22.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/haircut-bangs.jpg",
        title: "Bangs",
        price: "$17.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/haircut-drycut.jpg",
        title: "Dry Cut",
        price: "$47.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const Haircuts = () => (
  <ServicePage background={background} title={title} rows={haircuts} />
);
