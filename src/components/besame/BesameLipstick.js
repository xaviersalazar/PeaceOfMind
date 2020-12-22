import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/lipsticks/lips-main.jpg";
const title = "Lips";
const otherNotice = "All products sold in store only";
const lipsticks = [
  {
    row: [
      {
        icon: "/resources/lipsticks/1920-besamered-lipstick.jpg",
        title: "Besame Red",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/lipsticks/1930-noirred-lipstick.jpg",
        title: "Noir Red",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/lipsticks/1930-tangored-lipstick.jpg",
        title: "Tango Red",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/lipsticks/1931-carmine-lipstick.jpg",
        title: "Carmine",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/lipsticks/1933-merlot-lipstick.jpg",
        title: "Merlot",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/lipsticks/1935-cherryred-lipstick.jpg",
        title: "Cherry Red",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/lipsticks/1945-americanbeauty-lipstick.jpg",
        title: "American Beauty",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/lipsticks/1946-redvelvet-lipstick.jpg",
        title: "Red Velvet",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/lipsticks/1955-exoticpink-lipstick.jpg",
        title: "Exotic Pink",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/lipsticks/1959-redhotred-lipstick.jpg",
        title: "Red Hot Red",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/lipsticks/1963-portraitpink-lipstick.jpg",
        title: "Portrait Pink",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/lipsticks/1967-debutantepink-lipstick.jpg",
        title: "Debutante Pink",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/lipsticks/1969-dustyrose-lipstick.jpg",
        title: "Dusty Rose",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
      {
        icon: "/resources/lipsticks/1970-chocolatekiss-lipstick.jpg",
        title: "Chocolate Kiss",
        sm: 12,
        md: 6,
        lg: 4,
        xl: 2,
      },
    ],
  },
];

export const BesameLipstick = () => (
  <ServicePage
    background={background}
    title={title}
    rows={lipsticks}
    otherNotice={otherNotice}
  />
);
