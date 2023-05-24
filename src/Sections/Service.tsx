//Components
import Container from "@/Components/Common/Container";

//Data
import AboutData from "@/Data/About.data";

//Components
import Card from "@/Components/Service/Card";

const Service = () => {
    return (
        <section id="service">
            <Container className="grid grid-cols-3 md:grid-cols-3 xxs:grid-cols-1 gap-8 py-8">
                {AboutData.map((item, i) => (
                    <Card key={i} about={item} />
                ))}
            </Container>
        </section>
    );
};

export default Service;