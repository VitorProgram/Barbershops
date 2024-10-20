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
        color: var(--white);
		box-sizing: border-box;
	}
	
	body {
		background: var(--background-black);
		min-height: 100vh;
        overflow-x: hidden;
	}

    // Configuração global para deixar scrollX invisível
    .overflowX {
        overflow-x: scroll;
        scrollbar-width: none; /* Para Firefox */
        -ms-overflow-style: none;  /* Para Internet Explorer e Edge (antigo) */

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .textEllipsis {
        // Deixa ... caso os caracteres excedam o tamanho
        font-weight: 400;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const GlobalStyle = () => {
	return <Global />
}