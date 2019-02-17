import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import ServiceRows from "../common/ServiceRows";

const MainContainer = styled(Container)`
  padding-top: 5rem;
  background: #f3eff5;
`;

const ServiceTitle = styled.h1`
  text-align: center;
  padding: 5rem 0;
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

const ParagraphsCol = styled(Col)`
  padding: 0 3rem;

  @media (min-width: 1440px) {
    padding: 0 10rem !important;
  }
`;

const addons = [
  {
    row: [
      {
        icon: "/resources/icons/addons/aromatherapy.png",
        title: "Aroma Therapy Oils",
        price: "Add to any session $25.00",
        desc:
          "Natural oils extracted from flowers, bark, stems, leaves, roots or other parts of a plant to enhance psychological and physical well-being. The inhaled aroma from these essential oils is widely believed to stimulate brain function. Essential oils can also be absorbed through the skin, where they travel through the bloodstream and can promote whole-body healing. A form of alternative medicine, aromatherapy is gaining momentum. It is used for a variety of applications, including pain relief, mood enhancement and increased cognitive function. There are a wide number of essential oils available, each with its own healing properties. Oils are the heart of aromatherapy."
      },
      {
        icon: "/resources/icons/addons/coffee.png",
        title: "Coffee & Cocoa Treatment",
        price: "Add to any session for $30.00",
        desc:
          "These natural oils are a purifying dose of detoxification; they also provide illuminating moisture reintroducing the glow to overly dry skin."
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/addons/cupping.png",
        title: "Therapeutic Cupping Massage",
        price: "Add onto any massage $40.00",
        desc:
          "Pain Management, Injury and Surgical Recovery, Athletic Performance Enhancement, Clears Stagnation, Drains & Moves Fluids, Relieves Inflammation, Nervous System Sedation, Expels Congestion, Stretches Muscles & Connective Tissue, Loosens Adhesions, Nourishing Blood Supply To The Skin, Helps With Weight Loss, Helps Reduce Cellulite."
      },
      {
        icon: "/resources/icons/addons/drybrush.png",
        title: "Dry Brushing",
        price: "Add to any session $20.00",
        desc:
          "Adding a dry brush to your massage helps by exfoliating & stimulating the lymphatic system and circulation starts at the feet and works it way up including under arms. Proven to help with cellulite, removes dead skin cells, and aids in decreasing bloating. Great with aroma therapy to accelerate blood flow."
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/addons/flame.png",
        title: "Massage Flame",
        price: "Add to any service for $30.00",
        desc:
          "Experience the Flame an irresistible Hot Oil Massage. 100% Natural Multi-Sensory Experience. Lavish blend of exotic palm kernel oil, soy oil, Shea butter, jojoba oil, Vitamin E, organic coconut oil, and essential oils. It leaves the skin silky smooth and irresistibly scented."
      },
      {
        icon: "/resources/icons/addons/herbal.png",
        title: "Herbal Infused Heat Packs",
        price: "Add to any session $35.00",
        desc:
          "This treatment covers the entire torso for total body warmth sending you in to a new world of Bliss and Deep Relaxation. Lavender, valerian root, white willow, chamomile, rosemary, peppermint, spearmint, hops, yellow dock, lemongrass, cinnamon, yarrow, premium flax seeds. Ideal for clients that suffer from arthritis, back pain, stress relief and many other common ailments."
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/addons/ice.png",
        title: "Ice Massage",
        price: "Add to any session for $20.00",
        desc:
          "A great way to apply ice therapy to a sports injury. It has many benefits over ice bags, and is especially useful for injuries like shin splints, plantar fasciitis, and hip flexor strains. Benefits for a better penetration of the cooling effects of ice therapy when compared to traditional ice bags. It also uses the effects of massage to mobilize the soft tissue. When applied to superficial muscles, it can help to decrease inflammation and to reduce pain"
      },
      {
        icon: "/resources/icons/addons/lashes.png",
        title: "Lash Extensions",
        price: "",
        desc: "Coming Soon"
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/addons/manicure.png",
        title: "Manicure",
        price: "45 Minutes: $30.00",
        desc:
          "Wrapping hands in herbal & Aromatherapy infused towels to insure full relaxation and deep moisturization. Cleaning up cuticles, cut and crystal file leaving nails silky smooth. Mesmerizing hand massages with organic lotions that help skin rebuild itself, for brilliant younger looking hands. Finishing off with our signature all organic nontoxic, Free of DBP, Toluene, Formaldehyde, Formaldehyde Resin, Non GMO, Nail Lacquer."
      },
      {
        icon: "/resources/icons/addons/microdermabrasion.png",
        title: "Microdermabrasion Facial",
        price: "",
        desc: "Coming Soon"
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/addons/pedi.png",
        title: "Manicure",
        price: "45 Minutes - 1 Hour: $80.00",
        desc:
          "Unlike most nail salons where you dip your feet in the same contaminated foot bath bowl, we use fresh clean hot towels that are infused with Herbs & Aromatherapy oils, ensuring you to never get a foot fungus. Using hot stones to massage tired aching feet, an all-natural organic foot and leg scrub and a revitalizing foot massage. Cuticle clean up, cut and crystal file leaving nails silky smooth. Using an all organic nontoxic, Free of DBP, Toluene, Formaldehyde, Formaldehyde Resin, Non GMO, Nail Lacquer."
      },
      {
        icon: "/resources/icons/addons/raindrop.png",
        title: "Rain Drop Therapy",
        price: "Add onto Swedish or Deep Tissue Massage: $80.00",
        desc:
          "Kills Bacteria Pathogens, Reduces Inflammation, Supports the Immune System, Eases Respiratory Discomfort, Lifts the Spirit, Relaxes Muscles, Curbs Digestive Upset, Relieves Body & Joint Pain, Balances Energy, Restores Calmness, Increases Concentration"
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/addons/wax.png",
        title: "Paraffin Wax Treatment",
        price: "Add to any session Hands: $10.00 | Feet: $10.00",
        desc:
          "The benefits of paraffin wax are endless, used in ancient times Romans would pour hot waxes on the body in preparation for a massage. The French embraced paraffin wax therapy by spreading it on their wounds to accelerate healing. Paraffin wax is helpful with Arthritis, Bursitis, Eczema, Fibromyalgia, Fibrosis, Inflammation, Muscle Spasm, Psoriasis, Scar Tissue, Stiff Joints, and Tendonitis."
      }
    ]
  }
];

export default class AddOns extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Delightful Services to Addon</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={addons} />
        <Row>
          <ParagraphsCol xs={12}>
            <Disclaimer>
              NOTICE: Prices Are Subject To Change Without Prior Notice
            </Disclaimer>
          </ParagraphsCol>
        </Row>
      </MainContainer>
    );
  }
}
