'use client'
import { cn } from '@/lib/utils'
import { HTMLMotionProps, motion, MotionValue, useScroll, useTransform } from 'motion/react'
import * as React from 'react'

interface ScrollClipBgTextProps extends React.HTMLAttributes<HTMLDivElement> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset?: any,
    yRange?: number[],
    wrapperClassName?: string,
    spaceClass?: string,
}
interface ScrollClipBgTextContextValue {
    scrollYProgress: MotionValue<number>
}
const ScrollClipBgTextContext = React.createContext<ScrollClipBgTextContextValue | undefined>(undefined)
export function useScrollClipBgTextContext() {
    const context = React.useContext(ScrollClipBgTextContext)
    if (!context) {
        throw new Error('useScrollClipBgTextContext must be used within a ScrollClipBgTextContextProvider')
    }
    return context
}
export function ScrollClipBgText({spaceClass='h-80', children, className, ...props}: ScrollClipBgTextProps) {
    const ref = React.useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
    })
    return (
        <ScrollClipBgTextContext.Provider value={{scrollYProgress}}>
            <div ref={ref} className={cn('relative', className)} {...props}>
                {children}
                <div className={spaceClass} />
            </div>
        </ScrollClipBgTextContext.Provider>
    )
}

export function ScrollClipBgTextWrap ({ yInput=[0, 1], yRange=[0, 320], style, ...props}: HTMLMotionProps<'div'> & {yInput?: number[], yRange?: number[], style?: React.CSSProperties}) {
    const {scrollYProgress} = useScrollClipBgTextContext()
    const y = useTransform(scrollYProgress, yInput, yRange)

    return (
        <motion.div 
            style={{ 
                y, 
                willChange: 'transform', 
                ...style
            }}
            {...props}
        />
    )
}

export function ClipText({className,style, ...props}: HTMLMotionProps<'span'>) {
    
    const {scrollYProgress} = useScrollClipBgTextContext()
    const backgroundPositionX = useTransform(
        scrollYProgress,
        [0, 1],
        ["100%", "0%"],
      );
        return (
        <motion.span 
            className={cn('bg-[length:200%_100%] text-transparent bg-clip-text bg-no-repeat bg-scroll', className)}
            style={{
                backgroundPositionX,
                ...style
            }}
            {...props}
        />
    )
}