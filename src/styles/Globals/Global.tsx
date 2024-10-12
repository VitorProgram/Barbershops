"use client";  // Destaque nesse ´codigo, sempre deve ter em arquivos que fazem
// comunicação com usuário

import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;	
		box-sizing: border-box;
	}
	
	body {
		background: #333;
		height: 100vh;
	}
`

export const GlobalStyle = () => {
	return <Global />
}