"use client"

import { fastSearchOptions } from "@/app/_constants/fastSearch";
import { Anchor, Avatar, Box, Button, Divider, Drawer, Flex, Image, ScrollArea, Stack, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { BiCalendar, BiHome } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

interface SideBarButtonProps {
    bg?: string,
    padding?: number,
    pos?: "absolute" | "relative",
    top?: number,
    right?: number,
}

const SideBarButton = ({ bg, padding, pos, top, right}: SideBarButtonProps) => {
    const [opened, { open, close }] = useDisclosure(false);
    const mobile = useMediaQuery('(max-width: 450px)');

    return (  
        <>
            {/* Menu */}
            <Drawer
                size="85%"
                position="right"
                title="Menu"
                scrollAreaComponent={ScrollArea.Autosize}
                opened={opened}
                onClose={close}
                styles={{
                    content: {
                        backgroundColor: 'var(--secondary-black)', 
                    },
                    header: {
                        backgroundColor: 'var(--secondary-black)', 
                    },
                }}
                closeButtonProps={{
                    style: {
                        backgroundColor: 'transparent',
                    },
                }}
                overlayProps={{ backgroundOpacity: 0.5, blur: 2 }} 
            >
                <Stack gap={12} align="flex-start">
                    <Flex gap={12} align="center">
                        <Avatar 
                            bd="2px solid var(--primary-purple)" 
                            alt="Foto de perfil" 
                            size="48" 
                        />
                        <Text size="xl" fw="bold">Vitor</Text>
                    </Flex>

                   <Box w={mobile ? 180 : "100%"}>
                    <Text
                        size="sm"
                        fs="14px"
                        className="textEllipsis"
                    >
                            joaovitornascimentoif@gmail.com
                    </Text>
                   </Box>
                </Stack>
                
                <Divider mt={15} mb={15} color="var(--gray-one)"/>

                <Stack gap={4}>
                    <Anchor href="/" td="none" onClick={close}>
                        <Button
                            fullWidth 
                            radius={8}
                            justify="start" 
                            leftSection={<BiHome size={18}/>} 
                            bg="var(--primary-purple)"
                        >
                            <Text size="sm">Início</Text>
                        </Button>
                    </Anchor>

                    <Button 
                        radius={8}
                        justify="start"
                        variant="transparent" 
                        leftSection={<BiCalendar size={18}/>} 
                    >
                        <Text size="sm">Agendamentos</Text>
                    </Button>
                </Stack>

                <Divider mt={15} mb={15} color="var(--gray-one)"/>
                            
                <Stack gap={4}>
                    {fastSearchOptions.map((option) => (
                        <Button
                            key={option.id}
                            radius={8}
                            justify="start"
                            variant="transparent"
                            leftSection={
                                <Image 
                                    src={option.imageUrl} 
                                    alt={option.title}
                                    width={18} 
                                    height={18}
                                />
                            }
                            >
                                <Text size="sm">{option.title}</Text>
                        </Button>
                    ))}
                </Stack>

                <Divider mt={15} mb={15} color="var(--gray-one)"/>

                <Button 
                    variant="transparent" 
                    radius={8} 
                    justify="start" 
                    leftSection={<HiOutlineLogout size={18}/>}
                >
                    <Text size="sm">Sair da conta</Text>
                </Button>
            </Drawer>

            <Button 
                onClick={open} 
                variant="transparent" 
                color="var(--white)"
                bg={bg}
                pos={pos}
                top={top}
                right={right} 
                p={padding}
            >
                <RxHamburgerMenu size={20}/>
            </Button>
        </>
    );
}
 
export default SideBarButton 