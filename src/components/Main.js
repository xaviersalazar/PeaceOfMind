import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./About";
import AboutBesame from "./besame/AboutBesame";
import BesameEyes from "./besame/BesameEyes";
import BesameFace from "./besame/BesameFace";
import AddOns from "./services/AddOns";
import DeluxeCouplesMassages from "./services/DeluxeCouplesMassages";
import Facials from "./services/Facials";
import InfraredSauna from "./services/InfraredSauna";
import Massages from "./services/Massages";
import OxygenBar from "./services/OxygenBar";
import OxygenFootSoak from "./services/OxygenFootSoak";
import ScrubsWeightloss from "./services/ScrubsWeightloss";
import Waxes from "./services/Waxes";

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/besame/about" component={AboutBesame} />
        <Route path="/besame/eyes" component={BesameEyes} />
        <Route path="/besame/face" component={BesameFace} />
        <Route path="/services/addons" component={AddOns} />
        <Route
          path="/services/deluxe-couples"
          component={DeluxeCouplesMassages}
        />
        <Route path="/services/facials" component={Facials} />
        <Route path="/services/infrared-sauna" component={InfraredSauna} />
        <Route path="/services/massages" component={Massages} />
        <Route path="/services/oxygen-bar" component={OxygenBar} />
        <Route path="/services/oxygen-foot-soak" component={OxygenFootSoak} />
        <Route
          path="/services/scrubs-weightloss"
          component={ScrubsWeightloss}
        />
        <Route path="/services/waxes" component={Waxes} />
      </Switch>
    );
  }
}
