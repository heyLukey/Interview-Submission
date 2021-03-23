import React from "react";
import BlockCarousel from "./Blocks/BlockCarousel/BlockCarousel";
import BlockContact from "./Blocks/BlockContact/BlockContact";
import BlockLearn from "./Blocks/BlockLearn/BlockLearn";
import BlockLogin from "./Blocks/BlockLogin/BlockLogin";
import "./PageHome.css";

// Home page
// Each section is rendered from its corresponding block component
const PageHome = () => {
  return (
    <React.Fragment>
      <div id="page-home">
        <BlockCarousel />
        <BlockLearn />
        <BlockLogin />
        <BlockContact />
      </div>
    </React.Fragment>
  );
};

export default PageHome;
