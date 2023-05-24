import { Icon } from "@iconify/react"

//Interface
interface FeaturesData {
    icon: string;
    title: string;
    description: string;
}
interface Props {
    features: FeaturesData
}

const Card = ({ features }: Props) => {
    return (
        <div className="text-center px-10 py-8 lg:px-10 lg:py-8 md:px-3 md:py-5">
            <div className="w-12 h-12 flex justify-center items-center mx-auto text-white bg-main rounded-md">
                <Icon icon={features.icon} className="text-xl" />
            </div>
            <h3 className="mt-4 text-2xl font-bold">{features.title}</h3>
            <p className="text-base mt-4">{features.description}</p>
        </div>
    );
};

export default Card;