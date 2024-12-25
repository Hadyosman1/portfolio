'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { toggleFullScreen } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

interface ProjectCarouselProps {
  images: StaticImageData[];
}

const ProjectCarousel = ({ images }: ProjectCarouselProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((img, idx) => (
          <CarouselItem className='basis-full' key={img.src}>
            <Image
              onPointerDown={e => toggleFullScreen(e.currentTarget)}
              className='cursor-pointer'
              src={img}
              alt={`gallery ${idx}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCarousel;
