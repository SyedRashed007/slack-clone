import styled from 'styled-components'
import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import {SidebarItems} from '../data/SidebarData'
// import { ChannelData } from '../data/ChannelData';
import db from '../firebase'

function Sidebar(props) {

    const addChannel = () => {
        const promptName = prompt("Enter a channel name");
        if(promptName){
            db.collection('rooms').add({
                name:promptName
            })
        }
    } 

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    <h3>
                        Slack
                        <span>
                            <img src="https://img.icons8.com/color/35/000000/slack-new.png" alt=""/>    
                        </span>
                    </h3>
                </Name>
            </WorkspaceContainer>
            <MainChannels>
                    {
                        SidebarItems.map(item => (
                            <MainChannelItem>
                               {item.icon}
                               {item.text} 
                            </MainChannelItem>
                        ))
                    }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        <h3>Channels</h3>
                    </div>
                    <ChannelAdd>
                        <AddIcon onClick={addChannel}/>
                    </ChannelAdd>
                </NewChannelContainer>
                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel>
                                # {item.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: #121212;
`
const WorkspaceContainer = styled.div`
    color: #dfd2d2;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 70px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
    h3{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span{
        margin-left: 10px;
    }
`
const Name = styled.div`
`
const ChannelAdd = styled.div`
    width: 30px;
    height: 30px;
    color: #3F0E40;
    fill: #3F0E04;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
`
const MainChannels = styled.div`
    padding-top: 20px; 
    color: #dfd2d2;
`
const MainChannelItem = styled.div`
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    display: grid;
    grid-template-columns: 20% auto;
    :hover {
    background: #000000;
}
`
const ChannelsContainer = styled.div`
    margin-top: 10px;
    color: rgb(188 177 188) 
`
const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
    cursor: pointer;
`
const Channel = styled.div`
padding-top: 5px;
height: 28px;
display: flex;
color: #dfd2d2;
align-items: center;
padding-left: 19px;
cursor: pointer;
:hover {
    background: #000000;
}
`
const ChannelsList = styled.div`
`