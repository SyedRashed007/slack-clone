import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        #Family
                    </ChannelName>
                    <ChannelInfo>
                        Company-wide announcements and work based matters.
                    </ChannelInfo>
                </Channel>
                    <ChannelDetails>
                        <div>
                            Details
                        </div>
                        <Info/>
                    </ChannelDetails>
            </Header>
            <MessageContainer>
                <ChatMessage />
            </MessageContainer>
                <ChatInput />
       </Container>
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
   
`
const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(83, 39, 83,.13)
`
const Channel = styled.div`
`
const ChannelName = styled.div`
    font-weight: 700;
`
const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`
const Info = styled(InfoOutlinedIcon)`
    margin-left: 5px;
`
const ChannelDetails = styled.div`
    display: flex;
    cursor: pointer;    
    color: #606060;
    align-items: center;

    :hover {
        background: #c5bbbb;
        border-radius: 8px;
        padding: 3px;
    }
`
const MessageContainer = styled.div`
`
