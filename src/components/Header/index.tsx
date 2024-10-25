"use client"
import { Flex, Image } from "@mantine/core";
import SideBarButton from "../SideBarButton";

const Header = () => {

    return (  
        <Flex 
            justify="space-between" 
            align="center" 
            h={88} 
            p={20} 
            bg="var(--secondary-black)"
        >
            <Image 
                alt="Logo FSW Barber"
                src="/logo.svg" 
                width={130} height={22}
            />

            <SideBarButton padding={0}/>
        </Flex>
    );
}
 
export default Header;