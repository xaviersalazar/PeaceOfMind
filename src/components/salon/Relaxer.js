import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/salon/relaxer-main.jpg";
const title = "Relaxer";
const relaxers = [
  {
    row: [
      {
        icon: "/resources/services/salon/relaxer-relaxer.jpg",
        title: "Relaxer",
        price: "$100.00 - $120.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/relaxer-haircut.jpg",
        title: "Relaxer w/ Haircut",
        price: "$135.00 - $145.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/relaxer-color.jpg",
        title: "Relaxer w/ Color",
        price: "$150.00 - $200.00",
        desc: "",
        sm: 12,
        xl: 4
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/salon/relaxer-color-haircut.jpg",
        title: "Relaxer w/ Haircut & Color",
        price: "$170.00 - $225.00",
        desc: "",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/straightening-retouch.jpg",
        title: "Retouch",
        price: "$55.00 - $65.00",
        desc: 'Up to 1"',
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/salon/straightening-retouch-haircut.jpg",
        title: "Retouch w/ Haircut",
        price: "$80.00 - $100.00",
        desc: 'Up to 1"',
        sm: 12,
        xl: 4
      }
    ]
  }
];

export default class Relaxer extends Component {
  render() {
    return (
      <ServicePage background={background} title={title} rows={relaxers} />
    );
  }
}
