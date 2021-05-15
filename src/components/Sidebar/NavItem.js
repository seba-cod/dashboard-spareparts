import React from 'react'
import navData from './NavData';
import { Link } from 'react-router-dom';


export default function NavItems() {
    const data = navData

    return (
        <React.Fragment>
                {data.map( (navPage, i) => {
                return (
                    <li key={i} className="nav-item col-auto">
                      <Link to={navPage.link} className="text-decoration-none text-white"> 
                        <i className={navPage.class}></i>
                        <span className="align-middle font-weight-light text-wrap text-wrap" > {navPage.name} </span>
                    </ Link >
                    </li>
                )
                })}
        </React.Fragment>
        )
}
