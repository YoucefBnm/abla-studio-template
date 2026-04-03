"use client";

import { SERVICES } from "@/constants";
import { TextStaggerInview } from "../systaliko-ui/text-stagger-inview";
import { Button } from "../ui/button";
import Link from "next/link";
import { SportlightList } from "../spotlight-list";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section className="pb-12 px-8">
      <div className="space-y-8">
        <div className="flex gap-8 flex-wrap justify-between items-start">
          <div className="space-y-2">
            <TextStaggerInview
              animation="blur"
              className="text-muted-foreground uppercase tracking-wider text-sm"
            >
              our expertise
            </TextStaggerInview>
            <h2 className="text-3xl font-medium">
              Multidisciplinary creative studio
            </h2>
            <Button variant={"outline"}>Get started</Button>
          </div>

          <p className="flex-1 text-balance">
            We combine strategy, human centered design, and technical know how
            to create websites, and brands that connect with real people, and
            drive measurable impact for our clients, and we do it with passion,
            creativity, and attention to detail.
          </p>
        </div>

        <SportlightList className="flex gap-4 justify-center flex-wrap">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="flex-1 min-w-3xs group bg-secondary text-secondary-foreground text-center space-y-4 p-6"
            >
              <div className="group inline-grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 justify-center overflow-hidden *:transition-transform *:duration-300 *:ease-out">
                <service.icon className="size-6 text-muted-foreground group-hover:translate-y-full" />
                <ArrowUpRight className="size-6  -translate-y-full group-hover:translate-y-0" />
              </div>
              <h3 className="text-xl font-medium text-nowrap">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm text-balance">
                {service.description}
              </p>
            </Link>
          ))}
        </SportlightList>
      </div>
    </section>
  );
}
