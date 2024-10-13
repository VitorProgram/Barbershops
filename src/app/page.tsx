"use client"

import Header from "@/components/Header";
import { Avatar, Badge, Button, Card, Flex, Image, Text, TextInput, Title } from "@mantine/core";
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

        {/* Agendamentos */}
        <Title tt="uppercase" c="var(--gray-three)" order={2} size="12" mt={24} mb={12}>Agendamentos</Title>
        <Card bg="var(--secondary-black)" p={0} bd="1px solid var(--gray-one)">
          <Flex justify="space-between" align="center" gap={8} pt={20} pb={20} pr={10} pl={10}>
            <Flex direction="column" justify="center" gap={8} flex={2}>
              <Badge color="var(--dark-purple)">Confirmado</Badge>
              <Title order={6} fw={500}>Corte de cabelo</Title>

              <Flex align="center" gap={8}>
                <Avatar src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" alt="Corte de cabelo" size={24} />
                <Text>Vintage Barber</Text>
              </Flex>
            </Flex>
             
            <Flex direction="column" align="center" justify="center" flex={1} style={{borderLeft: '1px solid var(--gray-one)'}}>
              <Text size="sm">Fevereiro</Text>
              <Text size="xl" fw={700}>06</Text>
              <Text size="sm">09:45</Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </>
  );
}
