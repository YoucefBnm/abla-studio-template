"use client";
import {
  ClipText,
  ScrollClipBgText,
  ScrollClipBgTextWrap,
} from "@/components/scroll-clip-bg-text";
import { useIsMobile } from "@/hooks/use-mobile";
import { TextStaggerInview } from "../systaliko-ui/text-stagger-inview";

const INTRO_TEXT =
  "Multidisciplinary creative studio specializing in brand strategy, product design, and digital experiences, combines strategy, human centered design, and technical know how to create websites, and brands that connect with real people.";

function TextMobile() {
  return (
    <div>
      <TextStaggerInview
        animation="blur"
        className="mr-1 inline-block align-middle text-muted-foreground uppercase tracking-wider text-sm"
      >
        who are we
      </TextStaggerInview>
      <h2 className="text-3xl md:text-4xl font-medium leading-normal ">
        {INTRO_TEXT}
      </h2>
    </div>
  );
}

function TextDesktop() {
  return (
    <ScrollClipBgText>
      <ScrollClipBgTextWrap className="h-screen place-content-center md:w-4/5 mx-auto space-y-2">
        <TextStaggerInview
          animation="blur"
          className="mr-1 inline-block align-middle text-muted-foreground uppercase tracking-wider text-sm"
        >
          who are we
        </TextStaggerInview>

        <ClipText className="text-3xl md:text-4xl text-balance font-medium leading-normal  bg-[linear-gradient(-90deg,rgba(0,0,0,0.05)_50%,rgb(0,0,0)_50%)] dark:bg-[linear-gradient(-90deg,rgba(255,255,255,0.05)_50%,rgb(255,255,255)_50%)]">
          {INTRO_TEXT}
        </ClipText>
      </ScrollClipBgTextWrap>
    </ScrollClipBgText>
  );
}

export function Intro() {
  const isMobile = useIsMobile();
  return (
    <section
      style={
        {
          "--pos-x": "-10%",
          "--pos-y": "50%",
          "--color-1": "var(--accent)",
        } as React.CSSProperties
      }
      className="darkgradient relative min-h-screen px-6 md:px-12 py-12"
    >
      {isMobile ? <TextMobile /> : <TextDesktop />}
    </section>
  );
}
