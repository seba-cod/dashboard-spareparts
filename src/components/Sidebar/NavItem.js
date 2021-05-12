import React from 'react'
import navData from './NavData';
import { Route } from 'react-router-dom';


export default function NavItems() {
    const data = navData

    return (
        <React.Fragment>
                {data.map( (navPage, i) => {
                return (
                    <li key={i} className="nav-item">
                      <Route path={navPage.link} exact={true} > 
                        <i className={navPage.class}></i>
                        <span style={{color:'#FFF', fontSize:'0.8rem', cursor:'pointer'}}  className="align-middle" > {navPage.name} </span>
                    </ Route >
                    </li>
                )
                })}
        </React.Fragment>
        )
}