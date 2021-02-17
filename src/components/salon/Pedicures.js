import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/pedicures-main.png";
const title = "Pedicures";
const pedicures = [
  {
    row: [
      {
        icon: "/resources/services/salon/pedicures-hot-towel.jpg",
        title: "Hot Towel Pedi",
        price: "$87.00",
        desc:
          "Unlike most nail salons where you dip your feet in the same contaminated foot bath bowl, we use fresh clean hot towels that are infused with herbs & aromatherapy oils, ensuring you never get a foot fungus. Using hot stones to massage tired aching feet, an all-natural organic foot and leg scrub made in house and a revitalizing foot massage. We clean up the cuticle, file, and finish with a vegan friendly organic non-toxic, free of DBP, formaldehyde, formaldehyde resin, and non GMO nail lacquer.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/oxygen-foot-soak-benefits.jpg",
        title: "Pedi Bowl",
        price: "$52.00",
        desc:
          "Unlike most nail salons where you dip your feet in the same contaminated foot bath, we use fresh clean water with fresh herbs and aromatherapy oils, ensuring you never get a foot fungus. Using tea tree, coconut milk, and lavender to help soften the feet. We clean up the cuticle, file, and finish with a vegan friendly all organic non-toxic, free of DBP, formaldehyde, formaldehyde resin, and non GMO nail lacquer.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/pedicures-cbd-oil.jpg",
        title: "CBD Oil Add-on",
        price: "$47.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const Pedicures = () => {
  return <ServicePage background={background} title={title} rows={pedicures} />;
};
