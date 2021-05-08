import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
function SideBar() {
  return (
    <React.Fragment>
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
      {
        < Switch >
          < Route >
            < Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SPARE-PARTS
                </div>
              </ Link > 
          </ Route >
      

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">

          { <Route >
            <Link to="/" className="nav-link"> 
              <i className="fas fa-charging-station"></i>
              <span>SPA Dashboard</span> 
            </Link>
            </Route>}
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">IR A</div>

        {/* Nav Item - Pages */}
                <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Productos</span>
          </a>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Usuarios</span>
          </a>
        </li>
        </Switch>
}
        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}
    </React.Fragment>
  );
}
export default SideBar;
