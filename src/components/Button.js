import styled from "styled-components";


export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.5rem solid var(--lightBlue);
border-color:${props =>props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color:${props =>props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: var(--lightBlue);
border-radius: 0.5em;
padding: 0.2em 0.5em;
transition: all 0.5s ease-in-out;
cursor:pointer;
&:hover{
    background:${props =>props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color:var(--mainBlue);
}
&:focus{
outline: none;
}

`
