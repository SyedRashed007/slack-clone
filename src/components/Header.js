import React from 'react'
import styled from 'styled-components'
import { AccessTime, HelpOutline }from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
    return (
        <Container>
            <Main>
                <AccessTime/>
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..."/>
                    </Search>
                </SearchContainer>
                <HelpOutline/>
            </Main>
            <UserContainer>
                <Name>
                    Syed Rashed
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" alt="https://i.imgur.com/6VBx3io.png" />
                </UserImage>
            </UserContainer>
            <LogButton>
                <ExitToAppIcon/>
            </LogButton>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background: #090909;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 1px 0 0 rgb(255 255 / 10%)
`
// const Image = styled.span`
//     display: flex;
//     align-items: center;
//     padding-right: 16px;
//     position: absolute;
//     left: 0;
// `

const Main = styled.div`
    display: flex;
    margin-right:16px
    margin-left: 16px
    border-bottom: 1px solid #532753;
`
const UserContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    cursor: pointer;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
    border: none;
`
const Search = styled.div`
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    width: 100%;
    border-radius: 6px;

    input {
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        color: white;
        padding-top: 4px;
        padding-bottom: 4px;
        border-radius: 10px;
    }

    input:focus {
        outline: none;
    }
`
const Name = styled.div`
    color: #dfd2d2;
    padding: 10px;
`
const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 1px solid white;
    border-radius: 3px;

    img {
        width: 100%
    }
`
const LogButton = styled.button`
    display: flex;
    align-items: center;
    position: absolute;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    outline: transparent;
    right: 0;
    height: 22px;
    :hover {
    background: #c5bbbb;
}
`