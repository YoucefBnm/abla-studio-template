"use client";
import { TextStaggerInview } from "@/components/systaliko-ui/text-stagger-inview";
import { ImagePlayer } from "../image-player";
import Image from "next/image";
import {
  ScrollAnimation,
  ScrollScale,
  ScrollTranslateY,
} from "@/components/systaliko-ui/scroll-animation";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ANIMATION_VARIANTS } from "@/components/systaliko-ui/utils/animation-variants";
import { HERO_IMAGES } from "@/constants";

const animation_variants = ANIMATION_VARIANTS["blur"];
const transition = {
  duration: 0.3,
  ease: "easeOut",
} as const;

function HeroText() {
  return (
    <div className="space-y-4 relative z-2">
      <div className="max-w-lg lg:max-w-2xl">
        <TextStaggerInview
          animation="blur"
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight"
          transition={{
            ease: "easeOut",
            duration: 0.3,
          }}
        >
          Creating brands that connect with real people
        </TextStaggerInview>
      </div>
      <motion.p
        className="text-muted-foreground text-balance max-w-[58ch] text-sm"
        variants={animation_variants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        transition={transition}
      >
        Creative design studio, that combines strategy, human centered design,
        and technical know how to create websites, and brand that connect with
        real people.
      </motion.p>
      <motion.div
        variants={animation_variants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        transition={transition}
      >
        <Button>Get started</Button>
      </motion.div>
    </div>
  );
}
function HeroVideo() {
  return (
    <ScrollAnimation
      offset={["start start", "end end"]}
      className="hidden md:block col-span-3"
    >
      <ScrollTranslateY>
        <ScrollScale
          scaleRange={[0.25, 0.9]}
          className="dark:shadow-dark shadow rounded-4xl border bg-muted overflow-hidden p-4 min-w-lg aspect-[1175/884] origin-top-right"
        >
          <div className="relative size-full border rounded-2xl overflow-hidden">
            <ImagePlayer
              images={HERO_IMAGES}
              interval={200}
              className="relative"
              renderImage={(src) => (
                <Image
                  src={src}
                  width={1175}
                  height={884}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="size-full object-cover inline-block align-middle"
                  alt="showcalse"
                  loading="eager"
                />
              )}
            />
          </div>
        </ScrollScale>
      </ScrollTranslateY>
    </ScrollAnimation>
  );
}
export function Hero() {
  return (
    <section className="dark:gradient relative pt-40 pb-16 md:pb-0 px-8 grid grid-cols-1 grid-rows-1 *:row-start-1 *:col-start-1">
      <HeroText />
      <HeroVideo />
    </section>
  );
}
