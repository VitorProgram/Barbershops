"use client"
import { useState, useEffect } from "react";
import { AspectRatio, Box, Button, Flex, Image, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { BarbershopService } from "@prisma/client";

// Conectando ao banco
interface ServiceItemProps {
    service: BarbershopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {
    const [mounted, setMounted] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width: 320px)', true, {
        getInitialValueInEffect: false,
    });

    // Definir o componente como montado
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null
    }

    return (  
        <Flex 
            gap={12}
            align="center" 
            justify="space-between" 
            w="100%" maw={369}
            p={12} 
            bg="var(--secondary-black)" 
            bd="1px solid var(--gray-one)"
            style={{ borderRadius: "10px" }}
        >
            {!isSmallScreen && (
                <AspectRatio ratio={1080 / 1080}>
                    <Image 
                        alt={`Serviço ${service.name}`} 
                        src={service.imageUrl} 
                        w="100%"
                        miw={60}
                        maw={110}
                        radius={10}/>
                </AspectRatio>
            )}

            <Box w="100%" flex={2}>
                <Box>
                    <Title fs="14px" order={5} fw={500}>{service.name}</Title>
                    <Text c="var(--gray-three)">
                        {service.description}
                    </Text>
                </Box>

                <Flex mt={6.5} gap={12} justify="space-between" align="center">
                    <Text fs="10px" fw={500} c="var(--primary-purple)">
                        { Intl.NumberFormat("pt-br", {
                            style: "currency",
                            currency: "BRL"
                        }).format(Number(service.price)) }
                    </Text>
                    
                    <Button bg="var(--secondary-black)" bd="1px solid var(--gray-one)">
                        Reservar
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
}
 
export default ServiceItem;
