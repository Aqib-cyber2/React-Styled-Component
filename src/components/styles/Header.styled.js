import styled from "styled-components";

// destructing props and access dyamic bg
let img = ({bgWidth}) => bgWidth > 599 ? 'desktop-image-hero-1':  'mobile-image-hero-1'


// header component
export const StyledHeader = styled.header`
    /* img section in header */

    /* font-weight: ${(props) => props.color}; */
    .img-section{
        position: relative;
        background: #6a6e71 url(./images/${img}.jpg) no-repeat;
        background-size: cover;
        padding-bottom: ${({bgWidth}) => bgWidth>599 ? '51%' : '70%'};

        .button-box{
            position: absolute;
            bottom: 0;
            right: 0;

            .btn{
                background-color: ${(props)=> props.bg || 'hsl(0, 0%, 0%)'};
                padding: 15px 20px;

                img{ width : 12px }
            }
        }
    }

    /* content section in header */
    .content-section{
        h1{
            font-size: 26px;
            line-height: 2rem;
            margin-bottom: 0.85rem;
        }

        p{
            color: hsl(0, 0%, 63%);
            margin-bottom: 1.5rem;
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