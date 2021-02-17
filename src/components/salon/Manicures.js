import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/manicures-main.png";
const title = "Manicures";
const manicures = [
  {
    row: [
      {
        icon: "/resources/services/salon/manicures-hot-towel.jpg",
        title: "Hot Towel Mani",
        price: "$47.00",
        desc:
          "Wrapping hands in herbal & aromatherapy infused towels to insure full relaxation and deep moisturization. We clean up the cuticle, file, and finish with a vegan friendly all organic non-toxic, free of DBP, formaldehyde, formaldehyde resin, and non GMO nail lacquer.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/manicures-bowl.jpg",
        title: "Mani Bowl",
        price: "$37.00",
        desc:
          "Using clean water, fresh herbs and aromatherapy oils. We clean up the cuticle, file, and finish with a vegan friendly all organic non-toxic, free of DBP, formaldehyde, formaldehyde resin, and non GMO nail lacquer.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/manicures-cbd-oil.jpg",
        title: "CBD Oil Add-on",
        price: "$27.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const Manicures = () => {
  return <ServicePage background={background} title={title} rows={manicures} />;
};
