import React from "react";
import { Route, Link } from 'react-router-dom';
import NavItems from './NavItem';


function SideBar() {
  return (
    <React.Fragment>
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

          { <Route path='/' exact={true} > 
            < Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SPARE-PARTS
                </div>
              </ Link > 
          </ Route > }
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">

          { 
          <Route path='/' exact={true} >
            <Link to="/" className="nav-link"> 
                <i className="fas fa-charging-station"></i>
                <span>SPA Dashboard</span> 
              </Link>
          </ Route >
          }
        </li>

        <hr className="sidebar-divider" />
        <div className="sidebar-heading">IR A</div>

        <NavItems/>

        <hr className="sidebar-divider d-none d-md-block" />

      </ul>
    </React.Fragment>
  );
}
export default SideBar;
