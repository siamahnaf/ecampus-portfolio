import { Link } from "react-scroll";

//Container
import Container from "@/Components/Common/Container";
import Card from "@/Components/Team/Card";

//Data
import TeamData from "@/Data/Team.data";

const Team = () => {
    return (
        <section id="team">
            <Container className="py-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-2">Our team is the best in the Education.</h1>
                    <p className="opacity-70">A school team is a group of individuals who work together to achieve common goals.</p>
                </div>
                <div className="flex gap-3 mt-6 text-center mx-auto justify-center">
                    <Link
                        to="features"
                        smooth={true}
                        offset={-65}
                        duration={400}
                        spy={true}
                        className="bg-main py-2 px-4 text-white block cursor-pointer rounded">See Features</Link>
                    <Link to="about"
                        smooth={true}
                        offset={-65}
                        duration={400}
                        spy={true}
                        className="border border-solid border-textColor border-opacity-20 py-2 px-4 block cursor-pointer rounded">About Us</Link>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-3 xxs:grid-cols-1 gap-8 mt-8">
                    {TeamData.map((item, i) => (
                        <Card key={i} team={item} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Team;