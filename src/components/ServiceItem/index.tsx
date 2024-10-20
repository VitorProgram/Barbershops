"use client"
import { useState, useEffect } from "react";
import { AspectRatio, Box, Button, Flex, Image, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { BarbershopService } from "@prisma/client";
import { MainContainerFlex } from "./style";

// Conectando ao banco
interface ServiceItemProps {
    service: BarbershopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {
    const [mounted, setMounted] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width: 320px)', true, {
        getInitialValueInEffect: false,
    });

    const formattedPrice = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(Number(service.price))

    // Definir o componente como montado
    useEffect(() => {
        setMounted(true);
    }, []);

    // Se não estiver montado ainda, retornar null para evitar erros de re-renderização
    if (!mounted) {
        return null
    }

    return (  
        <MainContainerFlex>
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
                        {formattedPrice}
                    </Text>
                    
                    <Button bg="var(--secondary-black)" bd="1px solid var(--gray-one)">
                        Reservar
                    </Button>
                </Flex>
            </Box>
        </MainContainerFlex>
    );
}
 
export default ServiceItem;
