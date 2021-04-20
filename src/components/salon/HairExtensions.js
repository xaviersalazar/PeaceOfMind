import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/hair-ext-main.jpg";
const title = "Hair Extensions";
const hairExtensions = [
  {
    row: [
      {
        icon: "/resources/services/salon/hair-ext.jpg",
        title: "Hair Extensions 'Install'",
        price: "",
        desc: "Prices vary, contact us for a consultation.",
        sm: 12,
        xl: 4,
      },
    ],
  },
];
export const HairExtensions = () => (
  <ServicePage background={background} title={title} rows={hairExtensions} />
);
