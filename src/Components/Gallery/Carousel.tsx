import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

//Data
import GalleryData from "@/Data/Gallery.data";

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({
        align: "center",
        containScroll: "trimSnaps",
        skipSnaps: true,
        loop: true
    })
    return (
        <div className="embla overflow-hidden mt-8">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex">
                    {GalleryData.map((item, i) => (
                        <div
                            className="embla__slide flex-[0_0_25%] msm:flex-[0_0_25%] xxs:flex-[0_0_50%]  mx-1.5"
                            key={i}
                        >
                            <div className={`${i % 2 !== 0 ? "mt-4" : ""}`}>
                                <Image src={item.image1} alt={item.alt1} width={418} height={322} className="mb-3" />
                                <Image src={item.image2} alt={item.alt2} width={418} height={322} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;