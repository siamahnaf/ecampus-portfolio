import { Link } from "react-scroll/modules";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="basis-[6%] lg:basis-[6%] smd:basis-[9%] lsm:basis-[10%] msm:basis-[12%] sm:basis-[13%] xxs:basis-[15%]">
            <Link to="header" smooth={true} duration={400} spy={true} className="cursor-pointer block" offset={-65}>
                <Image src="/images/logo.png" alt="Logo" width={300} height={200} className="w-full block" />
            </Link>
        </div>
    );
};

export default Logo;