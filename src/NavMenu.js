import React from "react";
import Geo from "./image/Geo.png";
import USA from  "./image/USA.png";

function NavMenu () {
    return (
        <div className="navitem">
           <nav className="navmenu">
            <ul>
                <li>Home</li>
                <li>Friend List</li>
                <li>Profile</li>
            </ul>
            <img className="flag-geo" src={Geo} />
            <img  className ="flag-usa" src={USA} />
           </nav>
        </div>
    )
}

export default NavMenu