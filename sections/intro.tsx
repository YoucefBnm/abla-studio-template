import { ClipText, ScrollClipBgText, ScrollClipBgTextWrap } from "@/components/scroll-clip-bg-text";

export function Intro() {
    return (
        <section className="relative min-h-screen p-12">
            <ScrollClipBgText>
                <ScrollClipBgTextWrap className="h-screen place-content-center md:w-4/5 mx-auto">
                    <ClipText className="text-4xl font-bold leading-normal uppercase bg-[linear-gradient(-90deg,rgba(0,0,0,0.05)_50%,rgb(0,0,0)_50%)]">
                    multidisciplinary creative studio specializing in brand strategy, product design, and digital experiences.
                    </ClipText>
                </ScrollClipBgTextWrap>
            </ScrollClipBgText>
            
        </section>
    )
}