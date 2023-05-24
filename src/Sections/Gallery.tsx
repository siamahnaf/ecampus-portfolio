//Components
import Carousel from "@/Components/Gallery/Carousel";

const Gallery = () => {
    return (
        <section id="gallery" className="py-8">
            <div className="xxl:container xxl:mx-auto px-0">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">A Photo Gallery of School Activities</h1>
                    <p className="w-[45%] mx-auto font-medium opacity-60 mt-4">Showcase photos of students participating in academic activities such as science fairs, debates, spelling bees, or other academic competitions.</p>
                </div>
                <Carousel />
            </div>
        </section>
    );
};

export default Gallery;