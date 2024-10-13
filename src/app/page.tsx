"use client"

import Header from "@/components/Header";
import { Button, Flex, Image, Text, TextInput, Title } from "@mantine/core";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <>
      <Header />
      <Flex direction="column" pr={20} pl={20} pt={24} pb={24}>
        {/* Informs */}
        <Title order={2} size={20}>Olá, Vitor!</Title>
        <Text>Domingo, 05 de outubro</Text>

        {/* Search Input */}
        <Flex gap={8} mt={24} justify="space-between">
          <TextInput placeholder="Buscar" flex={1} radius={8}/>
          <Button bg="var(--primary-purple)" pr={10} pl={10} radius={8}>
            <CiSearch size={20}/>
          </Button>
        </Flex>

        {/* Banner */}
        <Image 
          src="/banner-1.svg" 
          mt={24}
          width="100%" 
          maw={350} 
          height={150}
          alt="Banner agende nos melhores com FSW Barber"
        />
      </Flex>
    </>
  );
}
