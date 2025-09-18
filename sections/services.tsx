'use client'
import Image from 'next/image'
import * as React from 'react'

const SERVICES = [
    {
        id: 'service-brand-identity',
        label: 'Brand Starategy & Identity',
        link: '/',
        description: 'Build differentiated brand systems: naming, voice, identity, visual guidelines and brand toolkits.',
        imageUrl: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 'service-uiux-design',
        label: 'UI/UX Design & Product Design',
        link: '/',
        description: 'User research, wireframing, prototypes, and pixel-perfect UI for web and mobile.',
        imageUrl: 'https://images.unsplash.com/photo-1519408469771-2586093c3f14?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
        id: 'service-web-design-dev',
        label: 'Web Design & Development',
        link: '/',
        description: 'Fast, accessible, SEO-friendly websites built with modern frontend stacks.',
        imageUrl: 'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
        id: 'service-marketing',
        label: 'Digital Marketing & SEO',
        link: '/',
        description: 'Content strategy, on-page SEO, and conversion optimization to amplify reach.',
        imageUrl: 'https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
        id: 'service-motion-visual-content',
        label: 'Motion & Visual Content',
        link: '/',
        description: 'Animated storytelling, explainer videos, and micro-interactions that increase engagement.',
        imageUrl: 'https://images.unsplash.com/photo-1720969834591-1c6703b488e0?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }
]
export function Services () {
    const [activeService, setActiveService] = React.useState<number | null>(null)
    const handleMouseEnter = (index: number) => setActiveService(index)
    const handleMouseLeave = () => setActiveService(null)

    return (
        <section className="py-12 px-8 min-h-screen place-content-center">
            <div className="grid grid-cols-12 grid-rows-1">
                <div className="row-start-1 col-start-1 col-span-12 flex flex-col justify-center items-center">
                    {
                        SERVICES.map((service,index) => (
                            <div 
                                onMouseEnter={() => handleMouseEnter(index)} 
                                onMouseLeave={handleMouseLeave}
                                key={service.id} 
                                className="flex flex-col space-y-2 text-center p-2"
                            >
                                <a 
                                    href={service.link} 
                                    className={`text-5xl font-bold uppercase tracking-tight ${activeService === index ? 'blur-xs' : 'blur-none'}`}
                                >
                                    {service.label}
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className="relative row-start-1 col-start-9 col-span-4">
                    {
                        SERVICES.map((service, index) => 
                            <Image 
                                fill 
                                objectFit='contain'
                                sizes="(max-width: 768px) 70vw, 200px"
                                src={service.imageUrl}
                                className='w-auto max-w-full h-auto max-h-full ' 
                                style={{ visibility: activeService === index ? 'visible' : 'hidden' }}
                                alt={service.label}
                                key={service.id}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}