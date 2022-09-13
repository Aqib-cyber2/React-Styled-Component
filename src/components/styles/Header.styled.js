import styled from "styled-components";

// destructing props and access dyamic bg
// let img = ({bgWidth}) => bgWidth > 599 ? 'desktop-image-hero-1':  'mobile-image-hero-1'
let img = (props) => props.bgImg;


// header component
export const StyledHeader = styled.header`
    /* img section in header */
    .img-section{
        position: relative;
        background:  url(./images/${img}) no-repeat;
        background-size: cover;
        /* height: 38.125vw; 1440 */
        /* height: 360px; */
        padding-bottom: 75%;
        /* padding-bottom: ${({bgWidth}) => bgWidth>599 ? '37.083vw' : '70%'}; */

        .button-box{
            position: absolute;
            bottom: 0;
            right: -16.67%;
            width: 16.67%;

            .btn{
                background-color: ${(props)=> props.bg || 'hsl(0, 0%, 0%)'};
                padding: 10% 0;
                width: 50%;
                transition: background-color 200ms ease-out;

                img{ width: 12px;}

                &:hover{
                    background-color: hsl(0, 0%, 27%);
                }
            }
        }
    }

    /* content section in header */
    .content-section{
        .title{
            font-size: 2.5rem;
            font-weight: 900;
            line-height: 1;
            margin-bottom: 1rem;
        }

        p{
            color: hsl(0, 0%, 63%);
            margin-bottom: 1.5rem;
        }
    }

    @media (min-width: 900px) {
        display: flex;

        .img-section{ 
            width: 60%; 
            padding-bottom: 31%;

            .button-box{
                right: -16.67%;
            }   
        }
        .content-section{ 
            flex: 1; padding: 0; margin: auto;
        }
    }
`

// navbar styled component
export const Nav = styled.nav`
    --padding-30: 30px;

    display: flex;
    align-items: center;
    padding-block: var(--padding-30);
    transition: transform 200ms ease-in;

    /* humberger icon */
    .toggle-btn{
        border: 0;
        background: transparent;
        cursor: pointer;

        @media (min-width: 600px) {
            display: none;
        }
    }

    /* desktop nav bar  */
    .DesktopNavigation{
        display: none;

        @media (min-width: 600px) {
            display: flex;
            margin-left: 60px;
            
            a{
                color: hsl(0, 0%, 100%);
            }
        }
    }

    /* mobile navigation style */
    .mobile-nav{
        width: 100%;
        padding-block: var(--padding-30);
        background-color: hsl(0, 0%, 100%);
        color: hsl(0, 0%, 0%);
        transition: transform 200ms ease;

        &>div{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &.hide{ transform: translateY(-100%) }
        &.show{ transform: translateY(0) }
    }

    /* navbar menus */
    ul{
        list-style: none;
        display: flex;
        align-items: center;

        li{
            margin-right: 20px;

            @media (min-width: 600px) {
                margin-right: 30px;
            }

            &:last-child{ margin-right: 0 }

            a{
                position: relative;
                color: hsl(0, 0%, 0%);
                padding: 8px 0;
                font-weight: 600;
                text-decoration: none;

                &::before{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    transform: scaleX(0);
                    border: 1px solid white;
                    transition: transform 200ms ease-out;
                }

                &:hover::before, &.active::before{
                    transform: scaleX(0.5);
                }
            }
        }
    }
`

// logo
export const Logo = styled.img`

    @media (max-width: 599px) {
        margin: 0 auto;
    }

`