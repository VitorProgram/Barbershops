"use client"

import { fastSearchOptions } from "@/app/_constants/fastSearch";
import { ActionIcon, Anchor, Avatar, Box, Button, Divider, Drawer, Flex, Image, Modal, ScrollArea, Stack, Text, Title } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { signIn, signOut, useSession } from "next-auth/react";
import { BiCalendar, BiHome } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLogin2 } from "react-icons/tb";

interface SideBarButtonProps {
    bg?: string,
    padding?: number,
    pos?: "absolute" | "relative",
    top?: number,
    right?: number,
}

const SideBarButton = ({ bg, padding, pos, top, right}: SideBarButtonProps) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [openedModal, { open: openModal, close: closeModal }] = useDisclosure(false);
    const mobile = useMediaQuery('(max-width: 450px)');

    // Lógica de login com o google
    const {data} = useSession()
    const handleLoginWithGoogle = () => {
        close()
        signIn("google")
    }
    const handleLogout = () => {
        close()
        signOut()
    }

    return (  
        <>
            {/* Menu */}
            <Drawer
                size={mobile ? "85%" : 350}
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
                <Modal 
                    bg="var(--secondary-black)" 
                    opened={openedModal} 
                    onClose={closeModal} 
                    withCloseButton={false}
                    ta="center"
                    radius={10}
                    centered   
                    styles={{
                        content: {
                          background: 'var(--secondary-black)', // Cor de fundo do modal
                        },
                    }} 
                >
                    <Title fw={500} mb={8} order={4}>Faça login na plataforma</Title>
                    <Text mb={20} size="sm" c="var(--gray-three)">Conecte-se usando sua conta do Google</Text>
                    <Button 
                        variant="outline" 
                        bd="1px solid var(--gray-one)" 
                        fullWidth
                        radius={10}
                        aria-label="Fazer login com Google"
                        leftSection={<FaGoogle size={16} />}
                        onClick={handleLoginWithGoogle}
                    >
                        Google
                    </Button>
                </Modal>

                <Stack gap={12} align="flex-start">
                    {data?.user ? (
                        <>
                            <Flex gap={12} align="center">
                                <Avatar 
                                    bd="2px solid var(--primary-purple)" 
                                    alt="Foto de perfil" 
                                    size="48"
                                    src={data.user.image}
                                />
                                <Text w={mobile ? 180 : "100%"} className={mobile ? "textEllipsis" : ""} size="lg" fw="bold">
                                    {data.user.name}
                                </Text>
                            </Flex>

                            <Box w={mobile ? 160 : "100%"}>
                                <Text
                                    size="sm"
                                    fs="14px"
                                    className="textEllipsis"
                                >
                                        {data.user.email}
                                </Text>
                            </Box>
                        </>
                    ) : (
                        <Flex gap={12} align="center" justify="space-between" w="100%">
                            <Title order={5}>Olá, faça seu login!</Title>

                            <ActionIcon 
                                size="lg" 
                                bg="var(--primary-purple)" 
                                color="var(--white)" 
                                radius={10}
                                onClick={openModal}
                            >
                                <TbLogin2 size={20} />
                            </ActionIcon>   
                        </Flex>
                    )}
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
                    onClick={handleLogout}
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