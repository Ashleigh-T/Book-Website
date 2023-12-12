
/**
* @author Ashleigh Taylor <ash0606@me.com>
* Last Updated: 11.14.23
*  
* Discription 
*
* @param {string} title - Title of the website 
* 
*
* @returns {React.ReactElement} the side menu for the website 

*/

import React from "react";
import '../styling/Menu.css';

interface prop{
    title: string;
    menuItems: string[];
}

function Menu(props:prop){

    return(
        <div className = 'siteMenu'>
            <div className = 'bookMark'>
                <div className = 'triangle_'></div>
            </div>

            <h1 className = 'menuItem'>{props.title}</h1>
            
            <ul>
                {props.menuItems.map((menuItem) => (
                    <li className = 'menuItem'>{menuItem}</li>
                ))}
            </ul>
            
            <div>
                <p >Login/Sign Up</p>
                <h2 className = 'barcode'>{props.title}</h2> 
            </div> 
        </div>
    );
}

export default Menu;