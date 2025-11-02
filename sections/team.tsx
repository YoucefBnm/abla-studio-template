'use client'
import { cn } from "@/lib/utils";
import { CameraIcon,  GlobeIcon, LinkedinIcon, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import { ScrollXCarousel, ScrollXCarouselContainer, ScrollXCarouselWrap } from "@/components/systaliko-ui/blocks/scroll-x-carousel";
import { Button } from "@/components/ui/button";

const TEAM = [
    {
        id: 'team-member-2',
        name: 'Alexander Hipp',
        position: 'Lead Designer',
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        bio: 'Alexander is a Lead Designer at Abla Studio. He is a creative problem solver who is always looking for new ways to innovate and improve user experiences. He has a strong background in UX/UI design and is always looking for new ways to improve user experiences.',
        socialLinks: [
            {
                label: 'linkedin',
                url: 'https://www.linkedin.com/in/alexsanders/',
                icon: LinkedinIcon
            },
            {
                label: 'website',
                url: 'https://www.alexsanders.com/',
                icon: GlobeIcon
            },
            {
                label: 'instagram',
                url: 'https://www.instagram.com/alexsanders/',
                icon: CameraIcon
            }
        ]
    },
    {
        id: 'team-member-3',
        name: 'Jacklin Nackos',
        position: 'Staff Engineer',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        bio: 'Jacklin is a Staff Engineer at Abla Studio. He is passionate about design, technology, and innovation. He has a strong background in UX/UI design and is always looking for new ways to improve user experiences.',
        socialLinks: [
            {
                label: 'linkedin',
                url: 'https://www.linkedin.com/in/alexsanders/',
                icon: LinkedinIcon
            },
            {
                label: 'website',
                url: 'https://www.alexsanders.com/',
                icon: GlobeIcon
            },
            {
                label: 'instagram',
                url: 'https://www.instagram.com/alexsanders/',
                icon: CameraIcon
            }
        ]
    },
    {
        id: 'team-member-1',
        name: 'Alex Suprun',
        position: 'Staff Engineer',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        bio: 'Alex is a Staff Engineer at Abla Studio. He is passionate about design, technology, and innovation. He has a strong background in UX/UI design and is always looking for new ways to improve user experiences.',
        socialLinks: [
            {
                label: 'linkedin',
                url: 'https://www.linkedin.com/in/alexsanders/',
                icon: LinkedinIcon
            },
            {
                label: 'website',
                url: 'https://www.alexsanders.com/',
                icon: GlobeIcon
            },
            {
                label: 'instagram',
                url: 'https://www.instagram.com/alexsanders/',
                icon: CameraIcon
            }
        ]
    },
]
interface MemberProps {
    name: string;
    position: string
    avatar: string;
    socialLinks: {label: string; url: string; icon?: React.ElementType}[],    
    bio?: string;
}
function TeamCard ({member, className, ...props }: React.ComponentProps<'div'> & {member: MemberProps}) {
    return (
        <div className={cn('flex bg-card', className)} {...props}>
            <div className="relative flex-1">
                <Image 
                    fill 
                    objectFit="cover"
                    sizes="(max-width: 468px) 30vw, 200px"
                    alt='member'
                    src={member.avatar}
                />
            </div>

            <div className="flex-1 flex flex-col justify-between py-8 px-6">
                <div className="space-y-2">
                    <h3 className="text-xl font-bold uppercase">{member.name}</h3>
                    <p className="text-muted-foreground font-medium">{member.position}</p>
                </div>

                <div className="space-y-2">
                    <p className="text-sm my-6 opacity-90">{member.bio}</p>
                </div>

                <div className="flex gap-1 justify-end">
                    {member.socialLinks.map((socialLink) =>
                        <div key={socialLink.label}>
                            <a href={socialLink.url}>
                                {socialLink.icon && <socialLink.icon className="size-5 stroke-[1.5]" />}
                                {!socialLink.icon && <span>{socialLink.label}</span>}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export function Team () {
    return (
        <section className="py-12">
            <ScrollXCarousel className="h-[150vh]" >
                
                <ScrollXCarouselContainer className="h-dvh place-content-center flex flex-col gap-8 py-12">
                    <div className="px-6">
                        <h2 className="text-4xl tracking-tight font-bold uppercase max-w-[25ch]">
                            our team members are the backbone of our studio
                        </h2>
                    </div>
                    <ScrollXCarouselWrap className="flex space-x-8 [&>*:first-child]:ml-8">
                        {
                            TEAM.map(((member) => 
                                <TeamCard key={member.id} className="min-w-full md:min-w-md w-1/2 bg-foreground text-background" member={member} />
                            ))
                        }
                        <Button className="rounded-none font-semibold uppercase self-center">
                            start your project <MoveRightIcon className="size-4" />
                        </Button>
                    </ScrollXCarouselWrap>
                </ScrollXCarouselContainer>
            </ScrollXCarousel>
            
            
        </section>
    )
}