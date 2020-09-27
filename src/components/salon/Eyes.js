import React from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/salon/eyes-main.jpg";
const title = "Eyes";
const eyes = [
  {
    row: [
      {
        icon: "/resources/services/salon/eyes-brow-tint.jpg",
        title: "Eyebrow Tint",
        price: "$50.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/eyes-lash-tint.jpg",
        title: "Eyelash Tint",
        price: "$40.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/eyes-refill.jpg",
        title: "Refill",
        price: "$175.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/eyes-lash-ext.jpg",
        title: "Eyelash Extensions",
        price: "$202.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/eyes-lash-ext-volume.jpg",
        title: "Eyelash Extensions w/ Volume",
        price: "$250.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const Eyes = () => {
  return <ServicePage background={background} title={title} rows={eyes} />;
};
