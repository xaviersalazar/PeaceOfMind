import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/makeup-main.jpg";
const title = "Makeup";
const makeup = [
  {
    row: [
      {
        icon: "/resources/services/salon/makeup-everyday.jpg",
        title: "Everyday",
        price: "$77.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/makeup-bridal.jpg",
        title: "Bridal",
        price: "$202.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const Makeup = () => {
  return <ServicePage background={background} title={title} rows={makeup} />;
};
