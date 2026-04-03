"use client";
import { CLIENTS } from "@/constants";
import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from "../systaliko-ui/text-stagger-hover";
import { Button } from "../ui/button";
import { Client } from "@/constants";
import React from "react";
import {
  CustomCursor,
  CustomCursorProvider,
  useCustomCursor,
} from "../systaliko-ui/custom-cursor";
import Image from "next/image";
import { motion } from "motion/react";
import { TextStaggerInview } from "../systaliko-ui/text-stagger-inview";

function WorkItem({
  client,
  ...props
}: React.ComponentProps<"div"> & { client: Client }) {
  return (
    <div {...props}>
      <TextStaggerHover className="text-2xl font-bold uppercase">
        <TextStaggerHoverActive
          animation={"top"}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="opacity-70"
        >
          {client.client}
        </TextStaggerHoverActive>
        <TextStaggerHoverHidden
          animation={"bottom"}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="text-background mix-blend-difference"
        >
          {client.client}
        </TextStaggerHoverHidden>
      </TextStaggerHover>
    </div>
  );
}

export function WorkContent() {
  const { setCursorChildren, containerRef } = useCustomCursor();
  const handleClearCursor = () => {
    setCursorChildren(null);
  };

  return (
    <section className=" py-12 place-content-center space-y-6">
      <div
        ref={containerRef}
        onMouseLeave={handleClearCursor}
        className="relative mx-auto list-style-none text-center"
      >
        <TextStaggerInview
          animation="blur"
          className="mb-6 uppercase tracking-wider text-sm"
        >
          our clients
        </TextStaggerInview>
        <CustomCursor className="-z-1" />
        {CLIENTS.map((client) => (
          <WorkItem
            className="p-4 border-b "
            key={client.client}
            client={client}
            onMouseEnter={() =>
              setCursorChildren(
                <motion.div
                  key={client.client}
                  initial={{ opacity: 0, filter: "blur(10px)", scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                  }}
                  exit={{ opacity: 0, filter: "blur(10px)", scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative col-start-1 row-start-1 size-30 shadow-2xl rounded overflow-hidden"
                >
                  <Image
                    alt={client.client}
                    src={client.imageUrl}
                    fill
                    className="object-cover size-full"
                    sizes="192px"
                  />
                </motion.div>,
              )
            }
          />
        ))}
      </div>
      <div className="text-center">
        <Button variant="secondary">View all work</Button>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <CustomCursorProvider>
      <WorkContent />
    </CustomCursorProvider>
  );
}
