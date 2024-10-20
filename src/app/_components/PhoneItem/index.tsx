"use client"

import { Button, Flex, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { FaCheckCircle } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";

interface PhoneItemProps {
    phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
    const handleCopyPhone = (phone: string) => {
        navigator.clipboard.writeText(phone)

        // Configurações de um toast mostrando que a mensagem foi copiada
        notifications.show({
            message: 'Número copiado',
            color: 'green',
            bg:'var(--secondary-black)',
            icon: <FaCheckCircle size={20} fill="green"/>            ,
            autoClose: 900,
            withCloseButton: false,
            styles: () => ({
                description: {
                    color: 'var(--white)', // Muda a cor da mensagem
                    fontWeight: 500,
                },
                icon: {
                    backgroundColor: 'transparent', // Remove o background do ícone
                },
            }),
        })
    }

    return ( 
        <>
            <Flex gap={12} justify="space-between" align="center">
                <Flex gap={12} align="center">
                    <FiSmartphone size={24}/>
                    <Text>{ phone }</Text>
                </Flex>

                <Button 
                    bd="1px solid var(--gray-one)"
                    variant="outline"
                    radius={10} 
                    style={{ padding: "8px 16px" }}
                    onClick={() => handleCopyPhone(phone)}
                >
                    Copiar
                </Button>
            </Flex>
        </>
     );
}
 
export default PhoneItem;