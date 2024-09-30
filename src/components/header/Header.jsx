import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
    color: var(--red);
    margin: 0px;
    font-size: 28px;
`
const HeaderStyled = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 20px;
`

const Header = () => {
    return (
        <HeaderStyled>
            <Titulo>To-Do-Web</Titulo>
        </HeaderStyled>

    )
}

export default Header
