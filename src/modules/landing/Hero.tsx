import HeroSection from "../../components/HeroSection";

import HeroPicture1 from "../../assets/hero-pic-1.jfif";
import HeroPicture2 from "../../assets/hero-pic-2.jfif";
import HeroPicture3 from "../../assets/hero-pic-3.jfif";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const images = [HeroPicture1, HeroPicture2, HeroPicture3];
  return (
    <HeroSection title="Jihro Abendano" className=" gap-20" id="hero">
      <Carousel className="sm:w-[24rem] w-[18rem]" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((img, index) => {
            return (
              <CarouselItem key={index}>
                <img
                  src={img}
                  alt={`${img}`}
                  className="w-96 h-96 rounded-3xl object-cover"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-transparent text-white border-0" />
        <CarouselNext className="right-4 bg-transparent text-white border-0" />
      </Carousel>
    </HeroSection>
  );
};

export default Hero;
