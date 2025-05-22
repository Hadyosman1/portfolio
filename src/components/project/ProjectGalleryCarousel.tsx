"use client";

import { Project } from "@/data/projects";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface ProjectGalleryCarouselProps {
  images: Project["gallery"];
}

const ProjectGalleryCarousel = ({ images }: ProjectGalleryCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((img, idx) => (
            <CarouselItem
              className="basis-full md:basis-1/2"
              key={`${img}-${idx}`}
            >
              <Zoom>
                <div className="bg-noise relative h-[60svh] sm:h-[80svh]">
                  <Image
                    quality={95}
                    src={img}
                    alt={`Project gallery image ${idx + 1}`}
                    fill
                    className="rounded-md object-cover border object-center selection:bg-transparent"
                  />
                </div>
              </Zoom>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-background/60 left-2" />
        <CarouselNext className="bg-background/60 right-2" />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </>
  );
};

export default ProjectGalleryCarousel;
