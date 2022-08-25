import React from 'react';
import Avatar from '@mui/material/Avatar';
import details from '../data/details.json';
import Typed from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

function Home(props) {
    return (
        <div>
            <section style={{ background: "#373e98" }} className='h-screen p-0 flex items-center'>
                <div className='container mx-auto px-4'>
                    <div className='m-auto max-w-lg text-center relative z-10'>
                        <Avatar
                            className='m-auto mb-4'
                            alt="Saiful Islam"
                            src={details.avatar}
                            sx={{ width: 280, height: 280 }}
                        />
                        <h1 className='text-white font-bold text-4xl mb-2 mt-0'>Saiful Islam</h1>
                        <p className='text-white text-lg'> I'm a{" "}
                            <Typed
                                strings={details.titles}
                                typeSpeed={80}
                                backSpeed={50}
                                loop >
                            </Typed>
                        </p>
                        <ul className="list-none mb-0 mt-4">
                            {details.socialNetworks.map(network => (
                                <li className="inline-block mr-6" key={network.iconName}>
                                    <a href={network.link} className="text-white text-xl" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={fab[network.iconName]} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 mt-4">
                            <svg className="mr-2 -ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
                            Download CV
                        </button>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;