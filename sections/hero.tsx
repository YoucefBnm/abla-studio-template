'use client'
import { TextStaggerInview } from "@/components/systaliko-ui/text/text-stagger-inview";
import { ImagePlayer } from "../components/image-player";
import Image from "next/image";
import { ScrollAnimation, ScrollScale, ScrollTranslateY } from "@/components/systaliko-ui/blocks/scroll-animation";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ANIMATION_VARIANTS } from "@/components/systaliko-ui/utils/animation-variants";

const IMAGES = [
  'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1525972292986-69295aebf4cc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];
  
export function Hero() {
    return (
        <section className="relative p-8">
          <TextStaggerInview animation="bottom" className="text-[14vw] leading-none uppercase font-bold tracking-tighter">Creative Studio</TextStaggerInview>
          
          <div className="grid md:grid-cols-2 md:grid-rows-[max-content] mt-8">
            <div className="relative z-[2] col-start-1 row-start-1">
              <motion.p 
                className="text-muted-foreground inline md:max-w-[50ch] md:text-xl font-medium"
                variants={ANIMATION_VARIANTS['default']}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3,
                }}
              >
                Combine strategy, human centered design, and technical know how to create websites, and brand that connect with real people.
              </motion.p>
              <motion.div 
                className="inline-block"
                variants={ANIMATION_VARIANTS['default']}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.2,
                  duration: 0.3,
              }}
              >
                <Button size={'sm'} className="rounded-none text-xs font-semibold uppercase ml-2">get started</Button>
              </motion.div>
            </div>

            <ScrollAnimation offset={["start start", "end end"]} className="hidden md:block pointer-events-none md:col-start-1 md:col-span-2 md:row-start-1">
              <ScrollTranslateY>
                <ScrollScale scaleRange={[0.25, 0.9]} className="w-full h-full min-w-lg aspect-video origin-top-right" >
                  <ImagePlayer 
                    images={IMAGES}
                    interval={200}
                    renderImage={(src) =><Image src={src} fill sizes="(max-width: 768px) 100vw, 400px"
                    className="size-full object-cover inline-block align-middle" 
                    alt="showcalse" />}

                  />
                </ScrollScale>
              </ScrollTranslateY>
            </ScrollAnimation>
          </div>
        </section>
    )
}