import React from 'react';

function Menu(props) {
    return (
        <li className="py-2 px-0 relative">
            <a className="text-black cursor-pointer relative text-2xl font-bold">
                <i className="mr-5 inline-flex">{props.icon}</i>
                {props.value}
            </a>
        </li>
    );
}

export default Menu;