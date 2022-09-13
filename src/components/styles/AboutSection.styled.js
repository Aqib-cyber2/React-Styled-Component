import styled from "styled-components";

export const AboutSection = styled.section`
    display: flex;
    flex-direction: column;

    

    @media (min-width: 768px) {
        flex-direction: row;

        .img-box{
            /* width: 30%; */
            width: 30%;
        }

        .content-section{
            flex: 1;
        }
    }

    h3{
        font-size: 12px;
        color: hsl(0, 0%, 0%);
        text-transform: uppercase;
        letter-spacing: 7px;
        margin-bottom: 1rem;
    }

    p{
        color: hsl(0, 0%, 63%);
        margin-bottom: 0;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`   