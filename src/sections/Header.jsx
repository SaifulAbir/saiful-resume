import React from "react";
import { FaHome, FaUserCheck, FaUserGraduate, FaLayerGroup, FaComments } from 'react-icons/fa';
import Menu from "../components/Menu";

function Header() {
    return (
        <header className="text-black bg-orange-600 w-72 top-0 left-0 h-screen border-r border-solid pt-12 pb-10 pl-10 pr-10 fixed z-10 overflow-x-hidden overflow-y-auto flex items-start flex-col justify-between">
            <div>
                <a href="#">
                    <span className="text-4xl font-bold">Saiful Islam</span>
                </a>
            </div>
            <nav className="block">
                <ul className="list-none mt-32 mb-32 p-0">
                    <Menu value="Home" icon={<FaHome />} />
                    <Menu value="About" icon={<FaUserCheck />} />
                    <Menu value="Experience" icon={<FaUserGraduate />} />
                    <Menu value="Work" icon={<FaLayerGroup />} />
                    <Menu value="Contact" icon={<FaComments />} />
                </ul>
            </nav>
            <div className="mb-0">
                <span>
                © 2022 Saiful Islam.
                </span>
            </div>
        </header>
    );
}

export default Header;
