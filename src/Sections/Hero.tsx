import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const CarouselData = [
    { src: "/images/banner-1.png", alt: "Banner" },
    { src: "/images/banner-1.png", alt: "Banner" },
    { src: "/images/banner-1.png", alt: "Banner" },
    { src: "/images/banner-1.png", alt: "Banner" }
]

const Hero = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi],
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, setScrollSnaps, onSelect])
    return (
        <section className="mt-[65px] xxl:mt-[90px] xl:mt-[80px] md:mt-[65px] smd:mt-[58px] lsm:mt-[55px] msm:mt-[54px] sm:mt-[53px] xxs:mt-[52px]" id="home">
            <div className="xxl:container xxl:mx-auto px-0">
                <div className="embla overflow-hidden">
                    <div ref={emblaRef}>
                        <div className="embla_container flex">
                            {CarouselData.map((item, i) => (
                                <div className="embla__slide flex-[0_0_100%] relative w-full aspect-[2.87]" key={i}>
                                    <Image src={item.src} alt={item.alt} fill className="aspect-video" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center mt-1">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            selected={index === selectedIndex}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;



//Button Props
interface DotButtonProps {
    selected: boolean
    onClick: () => void
}
const DotButton = ({ selected, onClick }: DotButtonProps) => {
    return (
        <button
            className={`w-14 h-1 bg-main mx-1 transition-all ${selected ? "opacity-100" : "opacity-50"}`}
            type="button"
            onClick={onClick}
        />
    )
}