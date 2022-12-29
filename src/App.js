import Header from "./components/Header";
import "./App.css";
import BecomeACCA from "./components/BecomeACCA";
import WhyChoose from "./components/WhyChoose";
import Placement from "./components/Placement";
import Kickoff from "./components/KIckoff";
import WhatLearn from "./components/WhatLearn";

const App = () => (
  <div className="all-app">
    <Header />
    <BecomeACCA />
    <WhyChoose />
    <WhatLearn />
    <Placement />
    <Kickoff />
  </div>
);

export default App;
