import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
border: 1px solid lightblue;
border-radius: 20px;
height: 100%;

button{
 border-radius: 0 0 20px 20px;
    background-color: #4d4dff;
    color: white;

    &:hover { /* Added :hover selector */
      color: black; /* Change the font color to black on hover */
    }
}
img{
    max-height: 250px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
}
div{
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
}
`;