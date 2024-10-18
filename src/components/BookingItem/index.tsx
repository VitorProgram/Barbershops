import { Avatar, Badge, Card, Flex, Text, Title } from "@mantine/core";

// Lembrete: Adicionar agendamento como prop e refatorar

const BookingItem = () => {
    return (  
        <>
            <Title tt="uppercase" c="var(--gray-three)" order={2} size="12" mt={24} mb={12}>
                Agendamentos
            </Title>

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
        </>
    );
}
 
export default BookingItem;