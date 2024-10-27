import React from 'react'
import NavLink from './NavLink';
const MenuOverlay = ({ links }) => {
    return(
        <ul class="flex flex-col py-4 items-center">
            {links.map((link, index) => (<NavLink href={link.path} title={link.title} key={index}/>
            ))}
            </ul>
    );
}
export default MenuOverlay;