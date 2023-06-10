import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    :root{
        --primary: #FF577F;
        --primary-focus: #FF427F;
        --primary-negative: #59323F;

        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;

        --success: #3FE864;
        --error: #E83F5B;

    }

   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
        font-family: "Inter", sans-serif;
        background-color: #121214;
        position: relative;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }
    ul, ol, li{
        list-style: none;
    }
    input{
        outline: none;
        border: none;
    }
`;
