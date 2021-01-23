import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/massages/scrub-weightloss-main.jpg";
const title = "Scrubs/Weightloss";
const scrubs = [
  {
    row: [
      {
        icon: "/resources/services/massages/scrub-weightloss-honey.jpg",
        title: "Honey Relax",
        price: "50 Minutes: $117.00 | Add onto any 1 hour massage: $82.00",
        desc:
          "A relaxation ritual richly crafted blend of sugar crystals, nutrient-rich antioxidants and essential oils creating a comprehensive exfoliation treatment. Spearmint leaf, organic , Lime, Lavender and Sandalwood are included in the 50 Minute Scrub.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/scrub-weightloss-polish.jpg",
        title: "Polish Me Perfect",
        price: "50 Minutes: $117.00 | Add onto any 1 hour massage: $82.00",
        desc:
          "Raw Sugar Cane granules produce glycolic acid, help refine pores, boost collagen and elastin, bind moisture and brighten skin all over along with reducing the sight of cellulite helping you become fully balanced using Grape Seed Oil,Coffee, Fresh Coconut , Geranium, Rosemary and Lavender.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/scrub-weightloss-wrap.jpg",
        title: "Weight Loss Body Wraps",
        price: "45 Minutes: $112.00 | 1 Hour: $147.00 | 1 Hour ½: $227.00",
        desc:
          "After the mixture is brushed on the body you are then wrapped in plastic wrap and thermal blanket. Clay body wraps absorb and draw out toxins in skin, bentonite clay particles hold a negative electrical charge, while toxins have a positive charge. The negatively charged particles draw the toxins out of skin through the pores. The theory goes back centuries, and it has been proven that Cleopatra used clay poultices as skin treatments.",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const ScrubsWeightloss = () => (
  <ServicePage background={background} title={title} rows={scrubs} />
);
