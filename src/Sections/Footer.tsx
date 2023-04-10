import { Link as ScrollLink } from "react-scroll/modules";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Container
import Container from "@/Components/Common/Container";

//Nav Data
const Naves = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Notice Board", id: "notice" },
    { name: "Courses", id: "courses" },
    { name: "Team", id: "team" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" }
]

const Socials = [
    { icon: "ri:facebook-fill", url: "/" },
    { icon: "ph:twitter-logo-fill", url: "/" },
    { icon: "uim:instagram", url: "/" },
    { icon: "uil:linkedin", url: "/" }
]

const Footer = () => {
    return (
        <footer id="footer">
            <Container className="py-8 bg-white">
                <div className="grid grid-cols-12 gap-2 items-center mb-10">
                    <div className="col-span-9">
                        <Image src="/images/logo.png" alt="Logo" width={312} height={232} className="w-24" />
                        <p className="opacity-60 font-medium w-[50%] mt-6">We are dedicated to providing a high-quality education to our students.</p>
                        <ul className="flex gap-8 mt-6">
                            {Naves.map((item, i) => (
                                <li key={i}>
                                    <ScrollLink
                                        to={item.id}
                                        smooth={true}
                                        offset={-65}
                                        duration={400}
                                        spy={true}
                                        className="opacity-90"
                                    >
                                        {item.name}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-3 text-center">
                        <Link href="/" className="mb-3 block">
                            <Image src="/images/app-store.svg" alt="App Store" width={166} height={50} className="rounded-md mx-auto" />
                        </Link>
                        <Link href="/" className="block">
                            <Image src="/images/google-store.svg" alt="App Store" width={166} height={50} className="rounded-md mx-auto" />
                        </Link>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div >
                        <p className="text-base opacity-60">© {new Date().getFullYear()} CodeStation21. All rights reserved.</p>
                    </div>
                    <div className="flex-1">
                        <ul className="flex justify-end gap-6">
                            {Socials.map((item, i) => (
                                <li key={i}>
                                    <Link href={item.url}>
                                        <Icon icon={item.icon} className="opacity-50 text-base" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;