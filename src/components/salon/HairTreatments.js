import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/salon/hair-treatments-main.jpg";
const title = "Hair Treatments";
const hairTreatment = [
  {
    row: [
      {
        icon: "/resources/services/salon/hair-treatments-keep-it-curl.jpg",
        title: "Keep It Curl Organic Colour Systems Treatment",
        price: "$20.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/hair-treatments-aqua-boost.jpg",
        title: "Aqua Boost Organic Treatment",
        price: "$22.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/hair-treatments-breakage.jpg",
        title: "Power Build Treatment",
        price: "$22.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/hair-treatments-organic-colour.jpg",
        title: "Organic Colour Systems Smooth+ Treatment",
        price: "$20.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/hair-treatments-organic-scalp.jpg",
        title: "Dry Scalp & Dandruff",
        price: "$45.00",
        desc: "Organic Custom Blend & Scalp Tonic",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/hair-treatments-scalp.jpg",
        title: "Dry Scalp",
        price: "$20.00",
        desc: "Dry Scalp Tonic",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/hair-treatments-clarifying.jpg",
        title: "Organic Colour Systems Intensive Clarifying",
        price: "$20.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/hair-treatments-brazilian-blowout.jpg",
        title: "Organic Colour Systems Brazilian Blowout Treatment",
        price: "$200.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/hair-treatments-pom-scalp.jpg",
        title: "Peace Of Mind Scalp Treatment ",
        price: "$52.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/hair-treatments-rainbow-chakra.jpg",
        title: "Rainbow Chakra Treatment",
        price: "$87.00",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/hair-treatments-charcoal.jpg",
        title: "Charcoal Treatment",
        price: "$22.00+",
        desc: "",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/salon/hair-treatments-lice.jpg",
        title: "Organic Lice Removal Treatment",
        price: "$200.00+",
        desc: "Must book 2 weeks in advance",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/salon/hair-treatments-silk-press.jpg",
        title: "Silk Press",
        price: "",
        desc: "",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const HairTreatments = () => (
  <ServicePage background={background} title={title} rows={hairTreatment} />
);
