import HeroSection from "../../components/HeroSection";

import HeroPicture1 from "../../assets/hero-pic-1.webp";
import HeroPicture2 from "../../assets/hero-pic-2.webp";
import HeroPicture3 from "../../assets/hero-pic-3.webp";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  // const images = [HeroPicture1, HeroPicture2, HeroPicture3];
  const images = [
    {
      img: HeroPicture1,
      altText: "Jihro Abendano at Fushimi Inari",
    },
    {
      img: HeroPicture2,
      altText: "Jihro Abendano at Capilano Bridge",
    },
    {
      img: HeroPicture3,
      altText: "Jihro Abendano at a Shrine in Kyoto",
    },
  ];
  return (
    <HeroSection title="Jihro Abendano" className=" gap-20" id="hero">
      <Carousel className="sm:w-[24rem] w-[18rem]" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <img
                  src={image.img}
                  alt={image.altText}
                  className="w-96 h-96 rounded-3xl object-cover"
                  width={384}
                  height={384}
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
