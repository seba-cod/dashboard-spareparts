import React from "react";
import Navbar from "./appContent/Navbar";
import MainSection from "./appContent/MainSection";
import Table from "./table/Table";
import Footer from "./appContent/Footer";

function ContentWrapper() {
  return (
    <React.Fragment>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <MainSection />
          <Table />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContentWrapper;
