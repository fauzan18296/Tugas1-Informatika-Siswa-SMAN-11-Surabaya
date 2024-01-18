import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Storage from "./Pages/Storage";
import Cloudes from "./Pages/Cloudes";
import NewVideo from "./Pages/NewVideo";
import CreativeUi from "./Pages/CreativeUi";
import UiUxDesign from "./Pages/UiUxDesign";
import CaseStudyPdf from "./Pages/CaseStudyPdf";
import ImageEditingPro from "./Pages/ImageEditingPro";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="storage" element={<Storage />} />
        <Route path="cloudes" element={<Cloudes />} />
        <Route path="newvideoshot" element={<NewVideo />} />
        <Route path="creativeuidesign" element={<CreativeUi />} />
        <Route path="uiuxdesign" element={<UiUxDesign />} />
        <Route path="casestudypdf" element={<CaseStudyPdf />} />
        <Route path="imageeditingpro" element={<ImageEditingPro />} />
      </Routes>
    </Router>
  );
};
export default App;
