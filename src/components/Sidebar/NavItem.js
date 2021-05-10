import React from 'react'

import { Route } from 'react-router-dom';


export default function NavItem({children}) {
    const data = children;
    console.log(data)
    return (
        <React.Fragment>
              <li className="nav-item">
                {data.map( (dat, i) => {
                return (
                <>
                    <Route path='/' exact={true} > 
                        <i className={dat.class}></i>
                        <span> {dat.name} </span>
                    </ Route >
                </>
                )
                })}
              </li>
        </React.Fragment>
        )
}

        
