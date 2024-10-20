import styled from "styled-components";
import { Flex } from "@mantine/core"

// Container principal
export const MainContainerFlex = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    max-width: 369px;
    padding: 12px;
    background: var(--secondary-black);
    border: 1px solid var(--gray-one);
    border-radius: 10px;
`