import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/finishing-touches-main.jpg";
const title = "Finishing Touches";
const finishingTouches = [
  {
    row: [
      {
        icon: "/resources/services/salon/finishing-touches-blowdry.jpg",
        title: "Blow Dry",
        price: "$25.00 - $45.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/finishing-touches-up-do.jpg",
        title: "Up-do's",
        price: "$57.00+",
        desc: "Braiding, up-styles and curls",
        sm: 12,
        xl: 4,
      },
      {
        icon:
          "/resources/services/salon/straightening-organic-thermal-straightening-haircut.jpg",
        title: "Ironworks",
        price: "$25.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/finishing-touches-french-braid.jpg",
        title: "French Braid",
        price: "$37.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/finishing-touches-dutch-braid.jpg",
        title: "Dutch Braid",
        price: "$37.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const FinishingTouches = () => (
  <ServicePage background={background} title={title} rows={finishingTouches} />
);
