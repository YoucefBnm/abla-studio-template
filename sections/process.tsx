'use client'
import { TextStaggerInview } from '@/components/systaliko-ui/text/text-stagger-inview'
import { motion, useScroll, useSpring } from 'motion/react'
import * as React from 'react'
const PROCESS_PHASES = [
    {
        id: 'process-phase-discovery',
        label: 'Discover & Define',
        description: 'Our journey begins with a deep dive into your vision. In the Discovery phase, we engage in meaningful conversations to grasp your brand identity, goals, and the essence you want to convey. This phase sets the stage for all that follows.'
    },
    {
        id: 'process-Design-Creation',
        label: 'Design & Development',
        description: "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity."
    },
    {
        id: 'process-phase-build',
        label: 'Build & Iterate',
        description: 'Before your website goes live, it undergoes rigorous Testing and Quality Assurance. We meticulously examine functionality, performance, and compatibility to ensure a seamless user experience.'
    },
    {
        id: 'process-Launch-Phase',
        label: 'Launch Phase',
        description: 'The Launch phase is the culmination of hard work. We optimize, configure, and prepare for the grand reveal. Your website is now ready to shine in the digital world.'    
    }
]

export function Process () {
    const scrollRef = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start center', 'end end'],
    })
    const scaleY = useSpring(scrollYProgress,{
        damping: 50,
        stiffness: 300,
        restDelta: 0.001,
    })

    return (
        <section className="text-background bg-foreground py-12 px-6 flex flex-wrap items-start gap-10">
            <div className="mb-8 space-y-2 md:flex-1 md:sticky top-8 left-0 h-max">
                <TextStaggerInview as='h2' animation='bottom' className='text-3xl md:text-4xl lg:text-5xl uppercase font-bold tracking-tighter'>
                     multidisciplinary creative studio focusing on user design experience.
                </TextStaggerInview>
            </div>

            <div ref={scrollRef} className='flex-1 relative grid grid-cols-[32px_repeat(4,1fr)]'>
                <div className="col-span-1 row-start-1 col-start-1 flex justify-center">
                    <div 
                        className="h-full w-0.5 bg-muted-foreground" 
                    >
                        <motion.div className='origin-top size-full bg-background' style={{ scaleY }} />
                    </div>
                </div>
                <div className="col-start-1 col-span-5 row-start-1 flex flex-col gap-12">
                    {
                        PROCESS_PHASES.map((processPhase,index) => (
                            <div 
                                key={processPhase.id} 
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="p-px w-8 bg-foreground flex justify-center items-center relative z-[2]">
                                        <h4 className="tracking-tighter font-bold text-muted-foreground tabular-nums">{String(index + 1).padStart(2, '0')}</h4>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold uppercase">{processPhase.label}</h3>
                                    </div>
                                </div>
                                
                                <div className="ml-10">
                                    <p className="text-muted-foreground">{processPhase.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}