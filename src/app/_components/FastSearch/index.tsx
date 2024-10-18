"use client";
import { fastSearchOptions } from "@/app/_constants/fastSearch";
import { Carousel } from "@mantine/carousel";
import { Button, Image, Text } from "@mantine/core";

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
            {fastSearchOptions.map(option => (
                <Carousel.Slide h={44} key={option.id}>
                    <Button 
                        bg="var(--secondary-black)" 
                        bd="1px solid var(--gray-one)"
                        h={44}
                    >
                        <Image 
                            alt={`Ícone de ${option.title}`} 
                            src={option.imageUrl} 
                            width={16} 
                            height={16} 
                            mr={10}
                        />
                        <Text>{option.title}</Text>
                    </Button>
                </Carousel.Slide>
            ))}
        </Carousel>
    );
};
 
export default FastSearch;
