import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/massages/facials-main.jpg";
const title = "Facials";
const facials = [
  {
    row: [
      {
        icon: "/resources/services/massages/facials-cleopatra.jpg",
        title: "Cleopatra's Dead Sea",
        price: "45 Minutes: $147.00",
        desc:
          "Purifies hydrates and restores elasticity adding moisture to skin for a vibrant complexion. Along with making the skin soft supple and smoother looking. It reaches deep in to the pores, removing grime which slow down the nourishing process. Chamomile, jojoba oil, Maris salt, vitamin B5, Aloe Vera, fruit oil, Vitamin E. With an added Jade Stone Massage to cool down the skin and give it that added natural glow.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/facials-back.jpg",
        title: "Custom Back Facial",
        price: "45 Minutes: $167.00",
        desc:
          "Purify your neck, shoulders and back, with a custom organic blend made moments before your treatment.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/facials-poppy-seed.jpg",
        title: "Don't Crease Me Poppy Seed",
        price: "45 Minutes: $147.00",
        desc:
          "Lemons and poppy seed facial wrinkles and fine line reducer. It exfoliates and polishes leaving skin radiant! With all organic products featuring lemon, poppy seeds ,coconut oil rosemary nutmeg and vitamin E and B-5 almond oil , pecan shells, grape fruit and clove.",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/massages/facials-cupping.jpg",
        title: "Facial Cupping Face Lift Treatment",
        price: "45 Minutes: $177.00 | 1 Hour: $237.00",
        desc:
          "This gentle, but effective treatment that makes us look and feel youthful and radiant. I use a light suction technique, as an all-natural alternative to a surgical facelift or laser and chemical treatments. It tones your facial muscles and reduces under eye puffiness. The suction created, lifts, tones, and plumps muscles. It relaxes facial muscles and plumps the lines father time has etched on your face. Its deep invigorating action increases elastin and collagen; preserving our youthfulness. It reverses gravity’s effects on your face, like hanging upside would; giving a youthful glow. It gives your face a lymphatic drainage and increases circulation, resulting in a clearer, cleaner, more even complexion with such beautiful color you will forget to wear makeup! It’s completely painless and leaves no marks.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/facials-fire-ice.jpg",
        title: "Fire & Ice",
        price: "50 Minutes: $157.00",
        desc:
          "Positively stimulating eminence facial. With infusion of fresh apple and grape natural fruit acids for an active organic exfoliation. Paprika and other fresh herbs stimulate circulation and deeply detoxify the skin. With a cold Globe Massage! This facial finishes with cooling application of chilled organic masques suited to your skins needs. Fire & Ice  will leave your skin glowing, toned, detoxified and firm.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/facials-goodbye-pore-me.jpg",
        title: "Goodbye Pore Me",
        price: "45 Minutes: $175.00",
        desc:
          "Minimize pores and wipes out dead surface from your face. Rare Amazonian white clay, Herbal Moisturizer, cinnamon Bark, Ginger Root, Apricot Kernel Oil, Vitamin E, Avocado Oil Sweet Almond Oil.",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/massages/facials-honey-bee.jpg",
        title: "Honey Bee Pollen My Feathers",
        price: "Add on $27.00 to any Facial",
        desc:
          "This mask works against Acne and eczema. Perfect for anti-aging absorbs free Radicals.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/facials-just-for-him.jpg",
        title: "Just For Him Hot Towel",
        price: "35 Minutes: $147.00",
        desc:
          "This tailor-made treatment utilizes actives that address his skin. The face is deeply cleansed, moisturized, and soothed to reduce sensitivity commonly associated with daily shaving. An energizing facial mask applied during a scalp massage is a must to leave him feeling revived and relaxed, so that challenges of the day can be boldly met and conquered with confidence.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/facials-pumpkin-pie.jpg",
        title: "Pumpkin Pie Without A Limit",
        price: "45 Minutes: $167.00",
        desc:
          "Pumpkin, naturally rich in beta carotene and active enzymes, renews tired skin and clays gently draw out impurities and toxins. It is also a powerful antioxidant that has the ability to make your skin glow. Vitamin A also makes its appearance in pumpkin with the ability to exfoliate and reveal brighter skin and minimize the appearance of sun damage.",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/massages/facials-volcanic-detox.jpg",
        title: "Volcanic Detox",
        price: "45 Minutes: $147.00",
        desc:
          "Its fights free radicals, rejuvenates your face while recharging your cells. It keeps you moisturized all day helping you pull out hard to get white heads. Charcoal, volcanic ash, Acai and goji berry, green tea and fig antioxidants.",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const Facials = () => (
  <ServicePage background={background} title={title} rows={facials} />
);
