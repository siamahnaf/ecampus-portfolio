import { Link } from "react-scroll/modules";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="basis-[6%]">
            <Link to="header" smooth={true} duration={400} spy={true}>
                <Image src="/images/logo.png" alt="Logo" width={300} height={200} className="w-full" />
            </Link>
        </div>
    );
};

export default Logo;