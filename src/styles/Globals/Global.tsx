"use client";  // Destaque nesse ´codigo, sempre deve ter em arquivos que fazem
// comunicação com usuário

import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
    :root {
        --primary-purple: #8162ff;
        --dark-purple: #221c3d;
        --background-black: #141518;
        --secondary-black: #1a1b1f;
        --gray-one: #26272b;
        --gray-two: #4e525b;
        --gray-three: #839996; 
        --white: #fff;
        --red: #ef4444;
        --dark-red: #2f1f1f;
    }

	* {
		margin: 0;
		padding: 0;	
		box-sizing: border-box;
	}
	
	body {
		background: var(--background-black);
        color: var(--white);
		min-height: 100vh;
	}
`

export const GlobalStyle = () => {
	return <Global />
}