import { Link as ScrollLink } from "react-scroll/modules";
import Link from "next/link";

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

const Navigation = () => {
    return (
        <div className="flex-1 text-right md:block xxs:hidden">
            <ul className="flex gap-4 justify-end">
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
                <li className="ml-32">
                    <Link href="https://portal.ecampus.com" target="_blank" className="bg-main text-white text-sm py-1.5 px-4 rounded-md">
                        Portal
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;