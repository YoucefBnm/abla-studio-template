"use client";
import {
  CardsStackContainer,
  CardSticky,
} from "@/components/systaliko-ui/cards-stack";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextStaggerInview } from "../systaliko-ui/text-stagger-inview";
import { ImagePlayer } from "../image-player";

const IMAGES = [
  "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1525972292986-69295aebf4cc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function Cta() {
  return (
    <section
      style={
        {
          "--width": "40%",
          "--height": "50%",
          "--pos-y": "50%",
          "--pos-x": "100%",
        } as React.CSSProperties
      }
      className="gradient min-h-screen place-content-center"
    >
      <div className="py-12 px-8 mx-auto flex flex-col items-start space-y-4">
        <div className="md:w-10/12 inline-flex items-center flex-wrap gap-4">
          <TextStaggerInview
            animation="blur"
            className="flex-1 text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight"
            transition={{
              ease: "easeOut",
              duration: 0.3,
            }}
          >
            Turn ideas into experiences
          </TextStaggerInview>

          <div className="shrink-0 relative w-50 h-36 rounded overflow-hidden">
            <ImagePlayer
              images={IMAGES}
              interval={200}
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
        </div>

        <Button size="lg">Book a call</Button>
      </div>
    </section>
  );
}
