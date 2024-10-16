import { AspectRatio, Badge, Button, Card, CardSection, Flex, Group, Image, Text, Title } from "@mantine/core";
import { Barbershop } from "@prisma/client";
import { FaStar } from "react-icons/fa";
import { TextAddress, TitleName } from "./styles";

// Pra acessar as informações do das tabelas do banco
interface BarbershopProps {
    barbershop: Barbershop
}

const BarbershopCard = ({ barbershop }: BarbershopProps) => {
    return ( 
        <Card miw={210} bg="var(--secondary-black)" m="0 auto" radius={16} withBorder bd="1px solid var(--gray-one)">
            <CardSection mb={5}>
                <AspectRatio p={4} pt={6} pb={0} m="0 auto" ratio={1080 / 1080} maw={200}>
                    <Image 
                        src={barbershop.imageUrl} 
                        alt={`Imagem de apresentação da barbearia ${barbershop.name}`}
                        radius={16}
                    />
                </AspectRatio>
                <Badge color="var(--dark-purple)" p={10} pos="absolute" top={12} left={14} >
                    <Flex align="center" justify="center" gap={5}>
                        <FaStar size={12} fill="var(--primary-purple)"/>
                        <Text size="sm" fw={600}>5,0</Text>
                    </Flex>
                </Badge>
            </CardSection>

            <Group gap={0}>
                <TitleName order={4}>{ barbershop.name }</TitleName>
                <TextAddress size="md" c="var(--gray-two)">
                    { barbershop.address }
                </TextAddress>
            </Group>

            <Button bg="var(--gray-one)" radius={10} mt={12}>Reservar</Button>
        </Card>
    );
}
 
export default BarbershopCard;