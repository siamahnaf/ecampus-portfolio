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
    { name: "Courses", id: "service" },
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
            <Container className="bg-[radial-gradient(farthest-corner,_transparent,_white),url('/images/net.png')] py-10">
                <div className="grid grid-cols-12 gap-2 items-center mb-5">
                    <div className="col-span-9 msm:col-span-9 xxs:col-span-12">
                        <Image src="/images/logo.png" alt="Logo" width={312} height={232} className="w-24" />
                        <p className="opacity-60 font-medium msm:w-[50%] xxs:w-full mt-6">We are dedicated to providing a high-quality education to our students.</p>
                    </div>
                    <div className="col-span-3 msm:text-center msm:col-span-3 xxs:col-span-12 xxs:text-left xxs:max-msm:my-5">
                        <Link href="/" className="mb-3 block">
                            <Image src="/images/app-store.svg" alt="App Store" width={166} height={50} className="rounded-md msm:mx-auto " />
                        </Link>
                        <Link href="/" className="block">
                            <Image src="/images/google-store.svg" alt="App Store" width={166} height={50} className="rounded-md msm:mx-auto" />
                        </Link>
                    </div>
                </div>
                <ul className="flex gap-8 smd:gap-8 lsm:gap-5 msm:gap-4 sm:gap-3 xxs:gap-3 flex-wrap mb-14">
                    {Naves.map((item, i) => (
                        <li key={i}>
                            <ScrollLink
                                to={item.id}
                                smooth={true}
                                offset={-65}
                                duration={400}
                                spy={true}
                                className="opacity-90 cursor-pointer"
                            >
                                {item.name}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-2 flex-wrap items-center">
                    <div className="xxs:max-msm:basis-[100%] xxs:max-msm:text-center xxs:max-msm:mb-3">
                        <p className="text-base opacity-60">© {new Date().getFullYear()} <Link href="https://codestation21.com/" target="_blank">Code Station21</Link>. All rights reserved.</p>
                    </div>
                    <div className="sm:flex-1 xxs:max-msm:basis-[100%]">
                        <ul className="flex msm:justify-end gap-6 xxs:justify-center">
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