'use client'
import { ClipText, ScrollClipBgText, ScrollClipBgTextWrap } from "@/components/scroll-clip-bg-text";
import { useIsMobile } from "@/hooks/use-mobile";

const INTRO_TEXT = 'multidisciplinary creative studio specializing in brand strategy, product design, and digital experiences.'

export function Intro() {
    const isMobile = useIsMobile()
    return (
        <section className="relative min-h-screen px-6 md:px-12 py-12">
            {
                isMobile 
                ? (
                    <h2 className="text-3xl md:text-4xl font-bold leading-normal uppercase">
                        {INTRO_TEXT}
                    </h2>
                )
                : (<ScrollClipBgText>
                    <ScrollClipBgTextWrap className="h-screen place-content-center md:w-4/5 mx-auto">
                        <ClipText className="text-3xl md:text-4xl font-bold leading-normal uppercase bg-[linear-gradient(-90deg,rgba(0,0,0,0.05)_50%,rgb(0,0,0)_50%)]">
                            {INTRO_TEXT}
                        </ClipText>
                    </ScrollClipBgTextWrap>
                </ScrollClipBgText>)
            }
            
        </section>
    )
}