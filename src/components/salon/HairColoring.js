import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/haircolor-main.jpg";
const title = "Hair Coloring";
const smallNotice = "+ Up charge of $20 for premium colour";
const hairColoring = [
  {
    row: [
      {
        icon: "/resources/services/salon/haircolor-gloss.jpg",
        title: "Glossing+",
        price: "$20.00",
        desc: "Performed following chemical service to add intense shine",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/haircolor-rinse.jpg",
        title: "Temporary Color Rinse",
        price: "$15.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/haircolor-corrective.jpg",
        title: "Colour Correction",
        price: "$252.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/haircolor-allover.jpg",
        title: "All Over Colour",
        price: "$137.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/haircolor-allover-shampoo.jpg",
        title:
          "All Over Colour w/ Take Home Shampoo & Conditioner (Travel Size)",
        price: "$147.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/haircolor-allover-bleach.jpg",
        title: "All Over Bleach+",
        price: "$167.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/haircolor-bleach-root.jpg",
        title: "Bleach Root Touch-up+",
        price: "$112.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/haircolor-root-touchup.jpg",
        title: "Root Touch-up+",
        price: "$82.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/haircolor-chemical.jpg",
        title: "Chemical Services",
        price: "$22.00 extra bowl",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const HairColoring = () => (
  <ServicePage
    background={background}
    title={title}
    rows={hairColoring}
    smallNotice={smallNotice}
  />
);
