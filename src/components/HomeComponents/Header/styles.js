import styled from "styled-components";


export const Container = styled.div`

`
export const Title = styled.h1`
    margin-top: 2em;
    background-image: linear-gradient(to right, #012026, #012026, #1c1c1c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4em;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    letter-spacing: 1px;

    @media (max-width: 600px)
    {   
        margin-top: 3em;
        font-size: 2em;
    }
`
export const SubTitle = styled.h2`  
   
    text-align: center;
    color: #1c1c1c;
    font-size: 1.5em;
    margin: 2em;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 600px)
    {   
        font-size: 20px;
    }
`
export const Image = styled.img`  
    width: 235vh;
    height: 99.7vh;
`
export const Button = styled.a`  
    background-color: #012026;
    color: #f5f5f5;
    padding: 1.25rem 4rem;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.500rem;
    font-weight: bold;
    transition: 0.5s;
    text-align: center;
    width: 50%;
    margin: auto;
    &:hover {
        background-color: #f5f5f5;
        color: #012026;
        border: 1px solid #012026;
    };
    @media (max-width: 600px)
    {
        width: 100px;
        font-size: 20px;
        padding: 1rem 3rem;
    }
`
export const Special = styled.span`
   

`