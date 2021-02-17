import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./home/Home";
import { About } from "./about/About";
import { AboutBesame } from "./besame/AboutBesame";
import { BesameLipstick } from "./besame/BesameLipstick";
import { BesameEyes } from "./besame/BesameEyes";
import { BesameFace } from "./besame/BesameFace";
import { AddOns } from "./services/AddOns";
import { DeluxeCouplesMassages } from "./services/DeluxeCouplesMassages";
import { Facials } from "./services/Facials";
import { InfraredSauna } from "./services/InfraredSauna";
import { Massages } from "./services/Massages";
import { OxygenBar } from "./services/OxygenBar";
import { OxygenFootSoak } from "./services/OxygenFootSoak";
import { ScrubsWeightloss } from "./services/ScrubsWeightloss";
import { Waxes } from "./services/Waxes";
import { Salon } from "./salon/Salon";
import { Haircuts } from "./salon/Haircuts";
import { HairColoring } from "./salon/HairColoring";
import { HairExtensions } from "./salon/HairExtensions";
import { HairHighlights } from "./salon/HairHighlights";
import { HairTreatments } from "./salon/HairTreatments";
import { MensServices } from "./salon/MensServices";
import { Perms } from "./salon/Perms";
import { SetsAndTwists } from "./salon/SetsAndTwists";
import { Locs } from "./salon/Locs";
import { NaturalStyling } from "./salon/NaturalStyling";
import { SpecialtyExtensions } from "./salon/SpecialtyExtensions";
import { FinishingTouches } from "./salon/FinishingTouches";
import { StraighteningServices } from "./salon/StraighteningServices";
import { AboutMassage } from "./services/AboutMassage";
import { Eyes } from "./salon/Eyes";
import { Makeup } from "./salon/Makeup";
import { KidsYoga } from "./services/KidsYoga";
import { HealthCoaching } from "./services/HealthCoaching";
import { BreastButtLiftFatEliminator } from "./services/BreastButtLiftFatEliminator";
import { FacialEnhancements } from "./services/FacialEnhancements";
import { Pedicures } from "./salon/Pedicures";
import { Manicures } from "./salon/Manicures";

export const Routing = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/besame/about" component={AboutBesame} />
    <Route path="/besame/eyes" component={BesameEyes} />
    <Route path="/besame/face" component={BesameFace} />
    <Route path="/besame/lipstick" component={BesameLipstick} />
    <Route path="/salon/about" component={Salon} />
    <Route path="/salon/eyes" component={Eyes} />
    <Route path="/salon/finishing-touches" component={FinishingTouches} />
    <Route path="/salon/haircuts" component={Haircuts} />
    <Route path="/salon/hair-coloring" component={HairColoring} />
    <Route path="/salon/hair-extensions" component={HairExtensions} />
    <Route path="/salon/hair-highlights" component={HairHighlights} />
    <Route path="/salon/hair-treatments" component={HairTreatments} />
    <Route path="/salon/locs" component={Locs} />
    <Route path="/salon/manicures" component={Manicures} />
    <Route path="/salon/makeup" component={Makeup} />
    <Route path="/salon/mens-services" component={MensServices} />
    <Route path="/salon/natural-styling" component={NaturalStyling} />
    <Route path="/salon/perms" component={Perms} />
    <Route path="/salon/pedicures" component={Pedicures} />
    <Route path="/salon/sets-twists" component={SetsAndTwists} />
    <Route path="/salon/specialty-extensions" component={SpecialtyExtensions} />
    <Route
      path="/salon/straightening-services"
      component={StraighteningServices}
    />
    <Route path="/services/about" component={AboutMassage} />
    <Route path="/services/addons" component={AddOns} />
    <Route
      path="/services/breast-buttlift-fat-eliminator"
      component={BreastButtLiftFatEliminator}
    />
    <Route path="/services/deluxe-couples" component={DeluxeCouplesMassages} />
    <Route path="/services/facials" component={Facials} />
    <Route
      path="/services/facial-enhancements"
      component={FacialEnhancements}
    />
    <Route path="/services/health-coaching" component={HealthCoaching} />
    <Route path="/services/infrared-sauna" component={InfraredSauna} />
    <Route path="/services/kids-yoga" component={KidsYoga} />
    <Route path="/services/massages" component={Massages} />
    <Route path="/services/oxygen-bar" component={OxygenBar} />
    <Route path="/services/oxygen-foot-soak" component={OxygenFootSoak} />
    <Route path="/services/scrubs-weightloss" component={ScrubsWeightloss} />
    <Route path="/services/waxes" component={Waxes} />
  </Switch>
);
