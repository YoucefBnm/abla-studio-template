import { CardsStackContainer, CardSticky } from "@/components/systaliko-ui/cards/cards-stack";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const IMAGES = [
    'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1525972292986-69295aebf4cc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

export function Cta() {
    return (
        <section className="oveflow-hidden mb-8 px-6">
            <div className="grid grid-cols-12 place-content-center">
                <div className="pt-12 space-y-6 col-span-10 sticky top-0 left-0 h-max">
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase">
                        turn ideas into experiences
                    </h2> 
                    <Button variant={'secondary'} size='sm' className="uppercase font-semibold rounded-none">
                        Start your Project
                    </Button>
                </div>

                <CardsStackContainer className="py-12 pr-8 min-h-[200vh] space-y-16 col-start-9 col-span-4 md:col-start-10 md:col-span-3">
                    {IMAGES.map((imageURl, index) => (
                        <CardSticky
                            key={Math.random()}
                            incrementY={20}
                            index={index + 2}
                            style={{ rotate: index + 2 }}
                            className=" md:max-w-4/5 aspect-square overflow-hidden rounded shadow"
                        >
                            <Image 
                                fill 
                                sizes="(max-width: 468px) 30vw, 200px"
                                alt='showcase'
                                src={imageURl}
                                className="w-full aspect-square h-auto max-h-full object-cover"
                            />
                        </CardSticky>
                    ))}
                </CardsStackContainer>
            </div>
        </section>
    )
}