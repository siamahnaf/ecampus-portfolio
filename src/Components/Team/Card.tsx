import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Interface
interface Socials {
    icon: string;
    url: string;
}
interface Team {
    name: string;
    image: string;
    job: string;
    description: string;
    socials: Socials[];
}

interface Props {
    team: Team
}

const Card = ({ team }: Props) => {
    return (
        <div className="text-center my-4 bg-white rounded-lg px-10 py-16 shadow-[0px_20px_24px_-4px_rgba(85,_105,_135,_0.04)]">
            <Image src={team.image} alt={team.name} width={65} height={65} className="rounded-full mx-auto" />
            <h2 className="text-xl font-bold mt-4">{team.name}</h2>
            <p className="text-main font-medium text-sm mt-1">{team.job}</p>
            <p className="mt-5">{team.description}</p>
            <ul className="flex justify-center gap-4 mt-3">
                {team?.socials.map((item, i) => (
                    <li key={i}>
                        <Link href={item.url}>
                            <Icon icon={item.icon} className="opacity-30" />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Card;