import React from "react";
import { Route, Switch } from 'react-router-dom';
import Navbar from "./appContent/Navbar";
import MainSection from "./appContent/MainSection";
import Footer from "./appContent/Footer";
import ProductData from '../containers/ProductData'
import UserData from '../containers/UserData'

function ContentWrapper() {
  return (
    <React.Fragment>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">

          <Navbar />
          <Switch>
            <Route path='/' exact={true} component={MainSection}/>
            <Route path='/products' exact={true} component={ProductData}/>
            <Route path='/users' exact={true} component={UserData}/>
          </Switch>
          <Footer />
          
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContentWrapper;
