import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/sets-main.jpg";
const title = "Sets and Twists";
const setsAndTwists = [
  {
    row: [
      {
        icon: "/resources/services/salon/sets-press-curl.jpg",
        title: "Press and Curl",
        price: "$100.00 - $150.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/sets-shampoo-rinse.jpg",
        title: "Shampoo Services w/ Two-Stand Twist",
        price: "$95.00 - $110.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/sets-shampoo-rinse-flat.jpg",
        title: "Shampoo Services w/ Flat-Twist Set",
        price: "$95.00 - $110.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/sets-single-twist.jpg",
        title: "Single Twist Comb Twist",
        price: "$90.00 - $200.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/sets-double-twist.jpg",
        title: "Double Twist Two Strand",
        price: "$90.00 - $200.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/sets-straw.jpg",
        title: "Straw Set",
        price: "$90.00 - $150.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/sets-rod.jpg",
        title: "Rod Set",
        price: "$90.00 - $150.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const SetsAndTwists = () => (
  <ServicePage background={background} title={title} rows={setsAndTwists} />
);
