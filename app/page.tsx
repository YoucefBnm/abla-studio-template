import { Cta } from "@/sections/cta";
import { Hero } from "@/sections/hero";
import { Intro } from "@/sections/intro";
import { Process } from "@/sections/process";
import { Services } from "@/sections/services";
import { Team } from "@/sections/team";
import { ReactLenis } from 'lenis/react'

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 1}}>
      <Hero />
      <Intro />
      <Services />
      <Process />
      <Cta />
      <Team />
   </ReactLenis>
  );
}
