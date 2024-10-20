import PhoneItem from "@/app/_components/PhoneItem";
import ContactsItem from "@/app/_components/PhoneItem";
import { TextAddress } from "@/components/BarbershopCard/styles";
import Footer from "@/components/Footer/index,";
import ServiceItem from "@/components/ServiceItem";
import { db } from "@/lib/prismaClient";
import { Anchor, AspectRatio, Box, Button, Divider, Flex, Image, Text, Title } from "@mantine/core";
import { FaStar } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

interface BarbershopPageProps {
    params: {
        id: string
    }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
    // Chamar banco de dados
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            services: true // Recebendo dados da chave estrangeira
        }
    })

    return (  
        <Flex direction="column">
            {/* Imagem */}
            <Box pos="relative" w="100%">
                <AspectRatio ratio={1080 / 720} >
                    <Image
                        alt={`Imagem da barbearia ${barbershop?.name}`}
                        src={barbershop?.imageUrl}
                        mah={250}
                    />
                </AspectRatio>

                <Anchor              
                    href="/"
                    pos="absolute"
                    top={20}
                    left={15}
                    td="none" 
                >
                    <Button
                        bg="var(--secondary-black)" 
                        color="var(--white)"
                        radius={8}
                        p={10} 
                        ta="center"
                    >
                        <IoIosArrowBack size={20}/>
                    </Button>
                </Anchor>

                <Button
                    bg="var(--secondary-black)" 
                    color="var(--white)"
                    pos="absolute"
                    top={20}
                    right={15}
                    p={10}
                    radius={8}
                >
                    <RxHamburgerMenu size={20}/>
                </Button>
            </Box>

            <Flex direction="column" pr={15} pl={15}>
                {/* Informs */}
                <Flex 
                    gap={8} 
                    pt={15}
                    direction="column" 
                    justify="center" 
                >
                    <Title size={20} fw={500}>{ barbershop?.name }</Title>

                    <Flex align="center" gap={8}>
                        <HiMapPin size={20} fill="var(--primary-purple)"/>
                        {/* Adicionar a classe ao estilo global */}
                        <TextAddress size={16}>{ barbershop?.address }</TextAddress> 
                    </Flex>

                    <Flex align="center" gap={8}>
                        <FaStar size={20} fill="var(--primary-purple)"/>
                        <Text>5,0 (550 avaliações)</Text>
                    </Flex>
                </Flex>

                <Divider mt={24} mb={24} color="var(--gray-one)"/>

                {/* Descrição */}
                <Box>
                    <Title tt="uppercase" c="var(--gray-three)" order={2} size="12" mb={12}>
                        Sobre Nós
                    </Title>
                    <Text>{ barbershop?.description }</Text>
                </Box>

                <Divider mt={24} mb={24} color="var(--gray-one)"/>

                {/* Serviços */}
                <Flex gap={12} direction="column">
                    {barbershop?.services.map(service => (
                        <ServiceItem key={service.id} service={service}/>
                    ))}
                </Flex>
                
                <Divider mt={24} mb={24} color="var(--gray-one)"/>

                {/* Contatos */}
                <Flex mb={24} direction="column" gap={12}>
                    <Title tt="uppercase" c="var(--gray-three)" order={2} size="12" mb={12}>
                        Contato
                    </Title>

                    {barbershop?.phones.map(phone => (
                        <PhoneItem key={phone} phone={phone}/>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
}
 
export default BarbershopPage;