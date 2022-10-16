import React from "react";
import { ServicePage } from "../common/ServicePage";

const background = "/resources/services/massages/massage-main.jpg";
const title = "Massages";
const massages = [
  {
    row: [
      {
        icon: "/resources/services/massages/massage-chair.jpg",
        title: "Chair Massage",
        price: "30 Minutes: $67.00 | 1 Hour: $122.00 | 1 Hour ½: $167.00",
        desc: "Receive a 15 minute traditional Swedish massage that will help alleviate your stress, tension, pain or stiffness while increasing your energy level, alertness and creativity. Our professional Massage Therapists perform the massage in a specially designed ergonomic massage chair while you’re fully clothed, using traditional Swedish massage techniques.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-champagne.jpg",
        title: "Champagne & Rose Massage",
        price: "30 Minutes: $77.00 | 1 Hour: $127.00",
        desc: " Absorb the rich, romantic, renewing bouquet of the Champagne and Rose Collection. The massage oil delivers smooth, long-lasting glide and is rich in nutrients. Perfect for couples, Valentine's Day or Mother's Day services. Paraben-Free.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-cold-stone.jpg",
        title: "Cold Stone Massage",
        price: "30 Minutes: $77.00 | 1 Hour: $147.00",
        desc: "Cold stone attributes that minimizes soreness, pulls excess heat from the body, stregthen the body on a cellular level, easily remove heat from the body. It also provides a deep state of relaxation, reduction of swelling or inflammation due to scar tissue, trauma or injuries to muscles. Cold stone helps alleviate anxiety, depression, PMS, sinusitis, high  blood pressure, and fatigue.",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/massages/massage-deep-tissue.jpg",
        title: "Deep Tissue",
        price: "30 Minutes: $67.00 | 1 Hour: $132.00 | 1 Hour ½: $167.00",
        desc: "A style of massage that is designed to get into the connective tissue of the body, rather than just the surface muscles. Many clients have a more intense experience with a deep tissue massage, but also feel that it is more beneficial, because it addresses deep-seated muscle pains. Like other types of massage,deep tissue is most beneficial when undertaken on a regular basis, so that therapist and client can work together to correct long term problems, relax the body, and prevent injury.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-himalayan.jpg",
        title: "Himalayan Salt Stone",
        price: "30 Minutes: $87.00 | 1 Hour: $167.00 | 1 Hour ½: $227.00",
        desc: "An innovative, detoxifying, healing technique using warm salt stones to ground and balance the body’s electromagnetic field, entral nervous system and meridians.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-hot-stone.jpg",
        title: "Hot Stone",
        price: "30 Minutes: $87.00 | 1 Hour: $157.00 | 1 Hour ½: $227.00",
        desc: "Hot stone helps by improve overall mental, spiritual,and physical wellness. Native Americans used hot stones to detoxify and to find harmony and balance. Basalt stones, polished, hardened lava rocks, are heated by hot water. The heated stones are then placed strategically along pressure points to help melt away tension creating a calming atmosphere. Stress, deadlines, anxiety, and other life annoyances disappear long enough for your mind to relax at the deepest level. Over all it creates a sense of well being.",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/massages/massage-medical.jpg",
        title: "Medical Massage",
        price: "30 Minutes: $97.00 | 1 Hour: $187.00 | 1 hour ½: $267.00",
        desc: "Medical massage involves therapeutic assessment, manipulation, and movement of the locomotor soft tissues to reduce or eliminate pain or dysfunction. A unique multidisciplinary approach is utilized to restore structural balance throughout the body, which allows focus on prevention and rehabilitation of musculoskeletal dysfunctions, chronic pain and sports injuries. Primary modalities include functional assessment, myofascial release, neuromuscular therapy,scar tissue mobilization techniques, neuromuscular re-education, PNF stretching, strengthening, and  specific client home-care protocols.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-myofascial.jpg",
        title: "Myofascial Release Blade Massage",
        price: "30 Minutes: $77.00 | 1 Hour: $147.00",
        desc: "The focus of myofascial release is on the myofascial, the web of interconnected connective tissue that wraps around and surrounds every muscle, bone, nerve, blood vessel and organ in the body. Trauma, inflammatory responses, and/or surgical procedures create Myofascial restrictions that can produce tensile pressures of approximately 2,000 pounds per square inch on pain sensitive structures that do not show up in many of the standard tests x-rays, myelograms, CAT scans, electromyography, etc.)",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-indian-scalp.jpg",
        title: "Indian Scalp Massage",
        price: "25 Minutes: $75.00",
        desc: "The Indian scalp massage improves blood flow to the head and neck, which increases the distribution of nutrients and encourages healing throughout the body, beneficial for relieving stress and tension, improving concentration, increasing joint mobility and flexibility in the neck and shoulders, improving blood circulation and lymphatic flow, reducing fatigue, relieving insomnia, headaches, migraines and sinusitis. Enjoy a deeply calming and relaxing treatment that will also leave you feeling energized and revitalized!",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/massages/massage-lymph.jpg",
        title: "Lymphatic Drainage Massage",
        price: "30 Minutes: $97.00 | 1 Hour: $187.00 | 1 Hour ½: $277.00",
        desc: "Manual Lymphatic Drainage is a form of massage that stimulates the lymphatic system with gentle massaging strokes. The light rhythmical massage encourages the lymphatic system to eliminate metabolic waste products, excess fluid and bacteria, promotes detoxification, facilitates healing and supports the immune system. Studies have shown that it helps stop and reduce the production of cellulite after a series of treatments along with a healthy diet and exercise.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-pregnancy.jpg",
        title: "Pregnancy Massage",
        price: "30 Minutes: $87.00 | 1 Hour: $157.00 | 1 Hour ½: $227.00",
        desc: "(Please consult with your doctor during your first trimester to get approval for massage.) Enhance your special time with massage therapy. Massage can help alleviate tension, fluid retention, fatigue and stress and improve circulation in the feet, legs, lower back, hips and neck. You will be lying comfortably on your side for a relaxing Swedish massage. Before making an appointment, please check with your physician to make sure that massage is right for you.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-reflexology.jpg",
        title: "Reflexology",
        price: "30 Minutes: $87.00 | 1 Hour: $137.00 | 1 Hour ½: $157.00",
        desc: "A holistic therapy that aims to restore and maintain the body’s natural balance and encourage healing. According to Chinese medicine, the sensory nerves of the internal organs throughout the body are mainly gathered around the soles of the feet. Through application of pressure on these reflexes without the use of tools, reflexology is proven to produce potent therapeutic benefits for a wide range of health conditions. It can also produce one of the most sublime relaxation experiences while it rejuvenates and revitalizes all aspects of our body and being.",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/massages/massage-sports.jpg",
        title: "Sports Massage",
        price: "30 Minutes: $67.00 | 1 Hour: $137.00 | 1 Hour ½: $167.00",
        desc: "Originally designed for athletes, to help prepare their bodies for optimal performance, recover after a big event, or function well during training. However it is useful for anyone with chronic pain, injury or range-of-motion issues. Sports Massage Emphasizes Prevention and Healing of injuries to the Muscles and Tendons.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-swedish.jpg",
        title: "Swedish Massage",
        price: "30 Minutes: $62.00 | 1 Hour: $107.00 | 1 Hour ½: $147.00",
        desc: "This classic massage treatment is also known as a Relaxation Massage and the goal is to relax the entire body through various techniques such as long, flowing strokes using light to medium pressure. Your session will address such issues as stress, tension and mild to moderate muscle discomfort. Swedish massage is often recommended for first time massage clients and is excellent for improving circulation and flexibility while easing tension.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-trigger-point.jpg",
        title: "Trigger Point",
        price: "30 Minutes: $67.00 | 1 Hour: $122.00 | 1 Hour ½: $167.00",
        desc: "A bodywork technique that involves the applying of pressure to tender muscle tissue in order to relieve pain and dysfunction in other parts of the body. The purpose of trigger point therapy is to eliminate pain and to re-educate the muscles into pain-free habits. After several treatments, the swelling and stiffness of neuromuscular pain is reduced; range of motion is increased; tension is relieved; and circulation,  flexibility and coordination are improved.",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/massages/massage-wine.jpg",
        title: "Wine Therapy",
        price: "30 Minutes: $77.00 | 1 Hour: $157.00 | 1 Hour ½: $237.00",
        desc: "Generally red wine when used in skin care products fights free radicals, stimulates blood circulation, rejuvenates, increases skin elasticity, eases the nerves, firms, whitens, and leaves your skin bright and glowing These stimulating properties also softens wrinkles and fine lines and is altogether very useful in battling the effects of aging skin. It is thought that the ingredients in the wine massage numbs nerve endings and so allows muscles to reach a greater state of relaxation. This relaxation then allows a vasodilation of the blood vessels that surround muscle tissue and means more healing nutrients can get to the damaged tissue.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-barefoot.jpg",
        title: "Barefoot Massage: Deepest Deep Tissue Massage Possible",
        price: "30 Minutes: $87.00 | 1 Hour: $167.00 | 1 Hour ½: $237.00",
        desc: "Reduces Chronic Pain. This Deep Tissue massage works further into the fascia. It also will release trigger points and connective tissues. It is a slow and more forceful in the application. Not only adds more pressure but it also adds compression. And it throws myofascial stretching into the mix. Compression massage squeezes the entire body from above and below. It also affects internal organs. It is a soft structural integration that realigns the body. Skeletal adjustments often occur during a session. It also has myofascial benefits that relax and stretch contracted muscles. This unique modality combines three therapies into one. It also Improves Flexibility, No Residual Soreness, Reduces Stress, Effects Last Longer.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/massage-deluxe-4-handed.jpg",
        title: "4 Handed Massage",
        price: "30 Minutes: $142.00 | 1 Hour: $232.00 | 1 Hour ½: $352.00",
        desc: "A therapeutic, duet massage is performed by two therapists whose coordinated movements induce relaxation and ease tension. To promote self balance and clarity. A soothing scalp massage and reflexology will leave you with a sense of calm and well-being. The organic,balancing massage oil used during treatment soothes the senses and nourishes the skin. Emerge renewed, refreshed and relaxed.",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const Massages = () => (
  <ServicePage background={background} title={title} rows={massages} />
);
