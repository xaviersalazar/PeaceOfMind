import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/locs-main.jpg";
const title = "Locs";
const locs = [
  {
    row: [
      {
        icon: "/resources/services/salon/locs-maintainence.jpg",
        title: "Loc Maintainence",
        price: "$100.00 - $200.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/locs-styling.jpg",
        title: "Loc Styling",
        price: "$100.00 - $230.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const Locs = () => (
  <ServicePage background={background} title={title} rows={locs} />
);
