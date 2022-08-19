import styled from "styled-components";

// header component
export const StyledHeader = styled.header`
    /* img section in header */
    .img-section{
        position: relative;
        background: #6a6e71 url('./images/mobile-image-hero-1.jpg') no-repeat;
        background-size: cover;
        padding-bottom: 75%;

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
            line-height: 1.7rem;
            margin-bottom: 0.85rem;
        }

        p{
            color: hsl(0, 0%, 63%);
            margin-bottom: 1rem;
        }
    }
`

// navbar styled component
export const Nav = styled.nav`
    --padding-30: 30px;

    display: flex;
    align-items: center;
    padding: var(--padding-30);
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

    /* mobile navigation style */
    .mobile-nav{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--padding-30);
        background-color: hsl(0, 0%, 100%);
        color: hsl(0, 0%, 0%);
        transition: transform 200ms ease;

        &.hide{ transform: translateY(-100%) }
        &.show{ transform: translateY(0) }
    }
    
    /* fixed header mobile navigation */
    .fixed{
        position: fixed;
        left: 0;
        top: 0;
    }

    /* navbar menus */
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

// logo
export const Logo = styled.img`

    @media (max-width: 599px) {
        margin: 0 auto;
    }

`
