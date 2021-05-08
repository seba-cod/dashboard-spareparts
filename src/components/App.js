import React from "react";
import SideBar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import ProductData from '../containers/productData'
function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        {/* <ProductData/> */}
        <SideBar />
        <ContentWrapper />
      </div>
    </React.Fragment>
  );
}

export default App;
