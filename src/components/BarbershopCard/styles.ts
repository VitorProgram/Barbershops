"use client"
import styled from "styled-components";
import { Title } from "@mantine/core"

export const TitleName = styled(Title)`
    /* Deixa ... caso os caracteres excedam o tamanho  */
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
` 

export const TextAddress = styled(TitleName)``