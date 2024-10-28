import BarbershopCard from "@/components/BarbershopCard";
import InputSearch from "@/components/InputSearch";
import { db } from "@/lib/prismaClient";
import { Flex, Stack, Title } from "@mantine/core";

interface BarbershopsPageProps {
    searchParams: {
        search?: string
    }
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
    const barbershops = await db.barbershop.findMany({
        where: {
            name: {
                contains: searchParams?.search,
                mode: 'insensitive',
            }
        }
    })
    return (  
        <Stack align="flex-start" p={20} gap={12}>
            <InputSearch />

            <Title tt="uppercase" order={6} c="var(--gray-three)">
                Resultados para: "{searchParams.search}"
            </Title>

            <Flex gap={15} wrap="wrap">
                {barbershops.map(barbershop => (
                    <BarbershopCard barbershop={barbershop} key={barbershop.id} />
                ))}
            </Flex>
        </Stack>
    );
}
 
export default BarbershopsPage;