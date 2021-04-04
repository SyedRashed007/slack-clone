import React from 'react'
import styled from 'styled-components' 
import SendIcon from '@material-ui/icons/Send';
import { emojis }from '../data/Icons'

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                        type="text"
                        placeholder="Message here..." />
                    <SendButton 
                        type="submit">
                        <Send />
                    </SendButton>
                </form>
                <IconsContainer>
                    {
                        emojis.map(item => (
                            <MainIcons>
                                {item.icon}
                            </MainIcons>
                        ))
                    }
                </IconsContainer>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
}
`
const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        align-items: center;  
        height: 42px;
        padding-left: 10px;

        input{
            flex: 1;
            border: none;
            font-size: 13px;
            padding: 5px;
        }

        input:focus{
            outline: none;
        }
    }
`
const SendButton = styled.button`
    background: #000000;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 5px;
    justify-content: center;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: #c5bbbb
    }
`
const Send = styled(SendIcon)`
    color: #e4d7d7;
`
const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-bottom: 10px;
`
const MainIcons = styled.div`
    color: #936161;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 2px;
    margin-left: 5px;
    margin-right: 8px;
    margin-top: 5px;

    :hover {
        border-radius: 2px;
        background: #c5bbbb;
    }
`
