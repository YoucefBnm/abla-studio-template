import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
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
