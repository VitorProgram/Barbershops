"use client";
import { Carousel } from "@mantine/carousel";
import { Button, Image, Text } from "@mantine/core";

const informs = [
    {
        content: "Cabelo",
        src: "/hair-icon.svg"
    },
    {
        content: "Barba",
        src: "/beard-icon.svg"
    },
    {
        content: "Acabamento",
        src: "/razor-icon.svg"
    },
    {
        content: "Sobrancelha",
        src: "/eyebrow-icon.svg",
    },
];

const FastSearch = () => {
    return (  
        <Carousel 
            slideSize="auto"
            slideGap="md"
            align="start"
            loop
            dragFree // slide flúido
            withControls={false}
            style={{
                justifyContent: "space-between" // separa os elementos de forma igual
            }}
        >
            {informs.map(slide => (
                <Carousel.Slide h={44}>
                    <Button 
                        bg="var(--secondary-black)" 
                        bd="1px solid var(--gray-one)"
                        h={44}
                    >
                        <Image 
                            alt={slide.content} 
                            src={slide.src} 
                            width={16} 
                            height={16} 
                            mr={10}
                        />
                        <Text>{slide.content}</Text>
                    </Button>
                </Carousel.Slide>
            ))}
        </Carousel>
    );
};
 
export default FastSearch;
