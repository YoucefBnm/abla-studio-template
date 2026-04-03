import { HERO_IMAGES } from "@/constants";
import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselWrap,
} from "../systaliko-ui/scroll-x-carousel";
import Image from "next/image";

export function Showcase() {
  return (
    <section className="py-16">
      <ScrollXCarousel>
        <ScrollXCarouselContainer className=" place-content-center flex flex-col gap-4">
          <div className=" pointer-events-none w-[8vw] h-[103%] absolute inset-[0_auto_0_0] z-10 from-background bg-gradient-to-r" />
          <div className="pointer-events-none w-[8vw] h-[103%] absolute inset-[0_0_0_auto] z-10 from-background bg-gradient-to-l" />

          <ScrollXCarouselWrap
            xRagnge={["-30%", "0%"]}
            className="relative flex gap-4 [&>*:first-child]:ml-8"
          >
            {HERO_IMAGES.map((imageUrl, index) => (
              <div
                className="relative min-w-[50vw] md:min-w-[25vw] aspect-[1175/884] rounded overflow-hidden"
                key={index}
              >
                <Image
                  src={imageUrl}
                  fill
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="size-full object-cover inline-block align-middle"
                  alt="showcase"
                  loading="eager"
                />
              </div>
            ))}
          </ScrollXCarouselWrap>
          <ScrollXCarouselWrap
            xRagnge={["-5%", "-30%"]}
            className="relative flex gap-4 [&>*:first-child]:ml-8"
          >
            {HERO_IMAGES.map((imageUrl, index) => (
              <div
                className="relative min-w-[50vw] md:min-w-[25vw] aspect-[1175/884] rounded overflow-hidden"
                key={index}
              >
                <Image
                  src={imageUrl}
                  fill
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="size-full object-cover inline-block align-middle"
                  alt="showcase"
                  loading="eager"
                />
              </div>
            ))}
          </ScrollXCarouselWrap>
        </ScrollXCarouselContainer>
      </ScrollXCarousel>
    </section>
  );
}
