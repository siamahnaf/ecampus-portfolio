//Container
import Container from "@/Components/Common/Container";
import Card from "@/Components/Features/Card";

//Data
import FeaturesData from "@/Data/Features.data";


const Features = () => {
    return (
        <section id="features">
            <Container className="py-8">
                <div className="bg-white pt-10 rounded-lg">
                    <div className="text-center mb-5">
                        <h1 className="text-2xl font-bold mb-2">Cultivating students is More Important</h1>
                        <p className="w-[60%] mx-auto">Cultivating students involves creating an environment where students feel valued, supported, and challenged to reach their full potential. Here are some ways your institute can cultivate its students</p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-3 xxs:grid-cols-1 gap-8">
                        {FeaturesData.map((item, i) => (
                            <Card key={i} features={item} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Features;