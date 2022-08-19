import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    color: hsl(0, 0%, 0%);
    font-weight: 600;
    letter-spacing: 7px;
    text-transform: uppercase;
    transition: opacity 150ms ease;

    img{ margin-left: 10px }

    &:hover{
        opacity: 0.5;
    }
`