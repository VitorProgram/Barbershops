import { Flex, Text } from "@mantine/core";

const Footer = () => {
    return (
        <footer>
            <Flex gap={3} pl={20} h={65}  align="center" c="var(--gray-two)" bg="var(--secondary-black)" style={{borderTop: "1px solid var(--gray-one)"}}>
                <Text size="sm">© 2023 Copyright</Text>
                <Text size="sm" fw="bold">FSW Barber</Text>
            </Flex>
        </footer>

    );
}
 
export default Footer;