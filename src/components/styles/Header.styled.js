import styled from "styled-components";

export const StyledHeader = styled.header`
    /* background-color: ${(props)=> props.color || '#ebfbff'}; */
    position: relative;
    background: #6a6e71 url('./images/mobile-image-hero-1.jpg') no-repeat;
    background-size: cover;
    height: 360px;

    /* .btn-box{
        position: ;
    } */

`

export const Nav = styled.nav` 
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 0%);
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media (min-width: 768px){
        position: relative;

        &.mobile-nav{
            display: none;
        }
    }


    button{
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    ul{
        list-style: none;
        display: flex;
        align-items: center;

        li{
            margin-right: 20px;

            &:last-child{ margin-right: 0 }
            a{
                text-decoration: none;
                color: hsl(0, 0%, 0%);
                font-weight: 600;
            }
        }
    }
`