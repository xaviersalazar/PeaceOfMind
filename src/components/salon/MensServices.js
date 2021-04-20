import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/mens-main.jpg";
const title = "Mens Services";
const mensServices = [
  {
    row: [
      {
        icon: "/resources/services/salon/mens-haircut.jpg",
        title: "Haircut",
        price: "$37.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/mens-gray.jpg",
        title: "Gray Blending",
        price: "$82.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/mens-signature.jpg",
        title: "Signature Experience",
        price: "$87.00+",
        desc:
          "Includes scalp massage, hot towel, hair cut, and facial hair trim",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/mens-beardtrims.jpg",
        title: "Beard Trimmings",
        price: "$17.00 - $27.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const MensServices = () => (
  <ServicePage background={background} title={title} rows={mensServices} />
);
