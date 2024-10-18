import Header from "@/components/Header";
import { Button, Flex, Image, Text, TextInput, Title } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import BarbershopCard from "@/components/BarbershopCard";
import { Barbershop } from "@prisma/client";
import { db } from "../lib/prismaClient";
import FastSearch from "./_components/FastSearch";
import BookingItem from "../components/BookingItem";
import Footer from "@/components/Footer/index,";

const Home = async () => {
  const barbershops: Barbershop[] = await db.barbershop.findMany({});

  return (
    <>
      <Header />
      <Flex direction="column" pr={20} pl={20} pt={24} pb={24}>
        {/* Informs */}
        <Title order={2} size={20}>Olá, Vitor!</Title>
        <Text>Domingo, 05 de outubro</Text>

        {/* Search Input */}
        <Flex gap={8} mt={24} mb={24} justify="space-between">
          <TextInput placeholder="Buscar" flex={1} radius={8}/>
          <Button bg="var(--primary-purple)" pr={10} pl={10} radius={8}>
            <CiSearch size={20}/>
          </Button>
        </Flex>

        {/* Busca rápida */}
        <FastSearch />

        {/* Banner */}
        <Image 
          src="/banner-1.svg" 
          mt={24}
          width="100%" 
          maw={350} 
          height={150}
          alt="Banner agende nos melhores com FSW Barber"
        />

        {/* Agendamentos */}
        <BookingItem />

        {/* Barbearias */}
        <Title tt="uppercase" c="var(--gray-three)" order={2} size="12" mt={24} mb={12}>
          Recomendados
        </Title>

        {/* 'barbershop={barbershop}' passa as informações do banco pra o componente */}
        <Flex gap={15} justify="space-between" className="overflowX">
          {barbershops.map(barbershop => <BarbershopCard key={barbershop.id} barbershop={barbershop}/>)}
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}

export default Home