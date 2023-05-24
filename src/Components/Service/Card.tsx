import { Link } from "react-scroll";

//Graphql
import { ServiceInfo } from "@/Urql/Types/Service/service.types";

//Interface
interface Props {
    about: ServiceInfo
}

const Card = ({ about }: Props) => {
    return (
        <div className="text-center bg-white shadow-[0px_20px_24px_-4px_rgba(85,_105,_135,_0.04)] rounded-lg px-8 pt-12 pb-10 lg:px-8 md:px-3 lg:pt-12 md:pt-6 lg:pb-10 md:pb-6">
            <h1 className="text-2xl font-bold mb-5">{about.name}</h1>
            <p className="text-base opacity-60">{about.description}</p>
            <div className="mt-6">
                <Link
                    to="about"
                    smooth={true}
                    offset={-65}
                    duration={400}
                    spy={true}
                    className="bg-main py-2 px-5 rounded-md text-white cursor-pointer"
                >Get Started</Link>
            </div>
        </div>
    );
};

export default Card;