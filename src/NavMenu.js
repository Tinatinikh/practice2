import React from "react";
import Geo from "./image/Geo.png";
import USA from  "./image/USA.png";
import {useContext} from "react";
import ChangeLanguage from "./Changelanguage";

function NavMenu () {
    const selectedLanguage = useContext(ChangeLanguage);

    return (
        <div className="navitem">
           <nav className="navmenu">
            <ul>
                <li><a href="#"  className={selectedLanguage.language}></a></li>     
                <li><a href="#"  className={selectedLanguage.language + 1}></a></li>
                <li><a href="#"  className={selectedLanguage.language + 2}></a></li>
            </ul>
            <img onClick={() => selectedLanguage.setLanguage ('geo')} className="flag-geo" src={Geo} />
            <img onClick={() => selectedLanguage.setLanguage('eng')} className ="flag-usa" src={USA} />
           </nav>
        </div>
    )
}

export default NavMenu