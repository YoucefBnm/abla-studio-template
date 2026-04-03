"use client";
import { TextStaggerInview } from "@/components/systaliko-ui/text-stagger-inview";
import { motion, useScroll, useSpring } from "motion/react";
import * as React from "react";
import {
  ScrollAutoplay,
  ScrollAutoplayContainer,
  ScrollAutoplayItem,
} from "../systaliko-ui/scroll-autoplay";
import Image from "next/image";
const PROCESS_PHASES: { phase: string; title: string; description: string }[] =
  [
    {
      phase: "Discover & Define",
      title: "Grasp your brand identity",
      description:
        "Our journey begins with a deep dive into your vision. In the Discovery phase, we engage in meaningful conversations to grasp your brand identity, goals, and the essence you want to convey. This phase sets the stage for all that follows.",
    },
    {
      phase: "Design & Development",
      title: "Bringing your vision into life",
      description:
        "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
    },
    {
      phase: "Build & Iterate",
      title: "Refining the details",
      description:
        "Before your website goes live, it undergoes rigorous Testing and Quality Assurance. We meticulously examine functionality, performance, and compatibility to ensure a seamless user experience.",
    },
    {
      phase: "Launch Phase",
      title: "Ready for the spotlight",
      description:
        "The Launch phase is the culmination of hard work. We optimize, configure, and prepare for the grand reveal. Your website is now ready to shine in the digital world.",
    },
    {
      phase: "Post Launch",
      title: "Post launch support",
      description:
        "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website.",
    },
  ];

const IMAGES = [
  "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
function TimelineCard({
  index,
  phase,
  title,
  description,
}: {
  index: number;
  phase: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="relative flex  gap-10"
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "all" }}
    >
      <div className="space-y-3">
        <div className="flex gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-medium">{phase}</h2>
            <h3 className="text-muted-foreground">{title}</h3>
          </div>
          <div className="p-1">
            <h4 className="text-sm font-bold tabular-nums">
              {String(index).padStart(2, "0")}
            </h4>
          </div>
        </div>
        <p className="text-balance">{description}</p>
      </div>
    </motion.div>
  );
}
function Timeline() {
  return (
    <div className="space-y-20">
      {PROCESS_PHASES.map((processPhase, index) => (
        <TimelineCard
          key={processPhase.title}
          index={index + 1}
          phase={processPhase.phase}
          title={processPhase.title}
          description={processPhase.description}
        />
      ))}
    </div>
  );
}

function AutoplayImages() {
  return (
    <ScrollAutoplay className="min-w-3xs self-stretch">
      <ScrollAutoplayContainer className="sticky top-0 left-0 h-screen w-full place-content-center text-cente">
        <div className="shadow-dark relative aspect-square bg-card rounded w-full border">
          {IMAGES.map((imageUrl, index) => (
            <ScrollAutoplayItem
              totalImages={IMAGES.length + 1}
              index={index}
              key={index}
            >
              <Image
                fill
                alt="process phase"
                src={imageUrl}
                sizes="(max-width: 768px) 50vw, 400px"
                className="size-full object-cover "
              />
            </ScrollAutoplayItem>
          ))}
        </div>
      </ScrollAutoplayContainer>
    </ScrollAutoplay>
  );
}
export function Process() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start center", "end end"],
  });
  const scaleY = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 300,
    restDelta: 0.001,
  });

  return (
    <section
      ref={scrollRef}
      className="relative py-12 px-8 md:px-12 lg:px-20 flex flex-wrap md:flex-nowrap items-start gap-10"
    >
      <div className="flex gap-8">
        <div className="self-stretch  w-1 bg-muted">
          <motion.div
            className="origin-top size-full bg-primary"
            style={{ scaleY }}
          />
        </div>
        <Timeline />
      </div>

      <AutoplayImages />
    </section>
  );
}
