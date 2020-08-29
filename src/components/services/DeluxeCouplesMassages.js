import React, { Component } from "react";
import ServicePage from "../common/ServicePage";

const background = "/resources/services/massages/massage-couples-main.jpg";
const title = "Deluxe/Couples Massages";
const deluxeCouplesMassages = [
  {
    row: [
      {
        icon: "/resources/services/massages/massage-couples-1.jpg",
        title: "Couples #1",
        price: "1 Hour: $267.00 | Upgrade to Deep Tissue: $317.00",
        desc:
          "Swedish Massage with Aromatherapy.Performed in a serene setting, the duet massage encourages unity,connection and collective calm. Ease stress and unwind as two therapists perform side-by-side Swedish Massages that help the two of you relax. With a Cooling Mint Eye mask. Including reflexology and a scalp massage. Breathing treatment & Herbal infused hot towel with a foot detox herbal spray.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-couples-2.jpg",
        title: "Couples #2",
        price: "1 Hour: $342.00 | Upgrade to Deep Tissue: $392.00",
        desc:
          "Hot Stones & Aromatherapy. Performed in a serene setting, the duet massage encourages unity, connection and collective calm. Ease stress and unwind as two therapists perform side-by-side Swedish Massages that help the two of you relax.With a Cooling Mint Eye mask. Including reflexology and a scalp massage. Breathing treatment, with a Herbal infused detox spray.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-couples-3.jpg",
        title: "Couples #3",
        price: "1 Hour & 30 mins: $522.00",
        desc:
          "Deep Tissue Massage, Hot Stone, Aromatherapy & Indian Scalp Massage. Performed in a serene setting,the duet massage encourages unity, connection and collective calm. Ease stress and unwind as two therapists perform side-by-side Deep Tissue Massages that help the two of you relax.With a Cooling Eye mask. With our own Herbal breathing treatment and herbal foot detox spray.",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/massages/massage-deluxe-party.jpg",
        title: "Pampered Party Packet",
        price: "$350.00 Per Person (Party of 3 or More)",
        desc:
          "1 Hour and 35 Minutes of Swedish Massage, Hot Stones, Reflexology, Aromatherapy, and a Pressure Point Release Rain Drop Facial and Pearl Mask.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-deluxe-silk-spine.jpg",
        title: "Silk Spine Massage",
        price: "10 Minutes: $30.00",
        desc:
          "Gliding around spine very gently pushing tired knotted up muscles away from the spine gently caressing the nerves in the surrounding are to relive and relax your central nervous system. Allowing your central nervous system to flow freely and unblocked. Better sleep and fewer headaches along with lowered anxiety. Overall mood improvement!",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-deluxe-4-handed.jpg",
        title: "4 Handed Massage",
        price: "30 Minutes: $90.00 | 1 Hour: $180.00 | 1 Hour ½: $270.00",
        desc:
          "A therapeutic, duet massage is performed by two therapists whose coordinated movements induce relaxation and ease tension. To promote self balance and clarity. A soothing scalp massage and reflexology will leave you with a sense of calm and well-being. The organic,balancing massage oil used during treatment soothes the senses and nourishes the skin. Emerge renewed, refreshed and relaxed.",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export default class DeluxeCouplesMassages extends Component {
  render() {
    return (
      <ServicePage
        background={background}
        title={title}
        rows={deluxeCouplesMassages}
      />
    );
  }
}
