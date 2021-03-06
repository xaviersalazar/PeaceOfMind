import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/highlight-main.jpg";
const title = "Hair Highlights";
const smallNotice = "+ Up charge of $20 for premium colour";
const hairHighlighting = [
  {
    row: [
      {
        icon: "/resources/services/salon/highlight-foil.jpg",
        title: "Foil+",
        price: "$120.00 - $140.00",
        desc:
          "The ultimate in hair coloring, providing smoothness, protection and brilliant shine for long-lasting color",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/highlight-foil-haircut.jpg",
        title: "Foil w/ Haircut+",
        price: "$120.00 - $150.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/highlight-partial-foil.jpg",
        title: "Partial Foil+",
        price: "$60.00 - 80.00",
        desc: "Up to 12 foils",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/highlight-partial-foil-haircut.jpg",
        title: "Partial Foil w/ Haircut+",
        price: "$70.00 - $90.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/highlight-accent-foil.jpg",
        title: "Accent Foil+",
        price: "$40.00 - $60.00+",
        desc: "Up to 4 foils",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/highlight-dimensional.jpg",
        title: "Dimensional Color+",
        price: "$120.00 - $140.00",
        desc: "Two or more colors to create a unique, multi-dimensional look",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/highlight-ombre.jpg",
        title: "Ombre Hair",
        price: "$200.00+",
        desc:
          "Coloring technique where a gradual fading of color from dark to light, or vice-versa, is achieved. Additional cost for add-on colour",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/highlight-ombre-haircut.jpg",
        title: "Ombre w/ Haircut",
        price: "$200.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/highlight-balayage.jpg",
        title: "Balayage Freehand+",
        price: "$200.00+",
        desc:
          "Technique of applying highlights, or lowlights, with select pieces of hair receiving the color enhancement",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/highlight-balayage-haircut.jpg",
        title: "Balayage w/ Haircut+",
        price: "$200.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/highlight-highlights.jpg",
        title: "Highlights+",
        price: "$127.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/highlight-partial-highlights.jpg",
        title: "Partial Highlights+",
        price: "$97.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const HairHighlights = () => (
  <ServicePage
    background={background}
    title={title}
    rows={hairHighlighting}
    smallNotice={smallNotice}
  />
);
