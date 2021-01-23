import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/perms-main.jpg";
const title = "Perms";
const perms = [
  {
    row: [
      {
        icon: "/resources/services/salon/perm-basic.jpg",
        title: "Basic Wave",
        price: "$90.00 - $120.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/perm-basic-haircut.jpg",
        title: "Basic Wave w/ Haircut",
        price: "$95.00 - $130.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/perm-specialty.jpg",
        title: "Specialty Wave",
        price: "$95.00 - $140.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/perm-specialty-haircut.jpg",
        title: "Specialty Wave w/ Haircut",
        price: "$110.00 - $150.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const Perms = () => (
  <ServicePage background={background} title={title} rows={perms} />
);
