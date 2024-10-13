import { Button, Flex, Image } from "@mantine/core";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (  
        <Flex justify="space-between" align="center" p={20} bg="var(--secondary-black)" style={{borderBottom: '1px solid var(--gray-one)'}}>
            <Image alt="Logo FSW Barber" src="/logo.svg" width={130} height={22}/>
            <Button variant="transparent" color="var(--white)">
                <RxHamburgerMenu size={20}/>
            </Button>
        </Flex>
    );
}
 
export default Header;