import styled from "styled-components";
import { Flex as FlexMantine } from "@mantine/core"

export const Flex = styled(FlexMantine)`
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid var(--gray-one);
`