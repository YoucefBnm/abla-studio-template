import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Showcase } from "@/components/sections/showcase";
import { Team } from "@/components/sections/team";
import { Work } from "@/components/sections/work";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <Services />
      <Showcase />
      <Intro />
      <Process />
      <Work />
      <Cta />
      <Team />
    </ReactLenis>
  );
}
