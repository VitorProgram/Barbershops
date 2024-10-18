import { Button, Flex, Image } from "@mantine/core";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (  
        <Flex justify="space-between" align="center" h={88} p={20} bg="var(--secondary-black)">
            <Image alt="Logo FSW Barber" src="/logo.svg" width={130} height={22}/>
            <Button variant="transparent" color="var(--white)">
                <RxHamburgerMenu size={20}/>
            </Button>
        </Flex>
    );
}
 
export default Header;