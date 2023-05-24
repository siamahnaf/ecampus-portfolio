import { Fragment, useState } from "react";
import { Icon } from "@iconify/react";

import { Link as ScrollLink } from "react-scroll/modules";
import Link from "next/link";

import Logo from "./Logo";

//Nav Data
const Naves = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Notice Board", id: "notice" },
    { name: "Courses", id: "service" },
    { name: "Team", id: "team" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" }
]

const MobileNavigation = () => {
    //State
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <div className="md:hidden xxs:block flex-1 text-right">
                <button onClick={() => setOpen(true)}>
                    <Icon className="text-xl inline-block" icon="heroicons:bars-3-20-solid" />
                </button>
            </div>
            <div className={`bg-black bg-opacity-60 fixed top-0 right-0 bottom-0 left-0 z-40 transition-all duration-200 ease-in-out ${open ? "opacity-100 visible" : "opacity-0 invisible"} backdrop-blur-sm`} onClick={() => setOpen(false)}></div>
            <div className={`bg-white dark:bg-dark fixed top-0 h-screen z-50 transition-all duration-[225ms] left-0 ease-[cubic-bezier(0, , 0.2, 1)] w-64 ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                <div className="relative h-screen w-full">
                    <div className="w-[80px] mx-auto mt-7 mb-10"><Logo /></div>
                    <hr />
                    <ul className="flex flex-col gap-2 px-6 mt-4">
                        {Naves.map((item, i) => (
                            <li key={i}>
                                <ScrollLink
                                    to={item.id}
                                    className="naves opacity-60 text-base select-none cursor-pointer"
                                    activeClass="selected"
                                    smooth={true}
                                    offset={-65}
                                    duration={400}
                                    spy={true}
                                >
                                    {item.name}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                    <div className="px-6 absolute bottom-[10%] w-full">
                        <Link href="https://portal.ecampus.com" target="_blank" className="bg-main w-full block text-white text-sm py-1.5 px-4 rounded-md text-center">
                            Portal
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MobileNavigation;