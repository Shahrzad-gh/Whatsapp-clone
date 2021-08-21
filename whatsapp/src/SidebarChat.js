import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

function SidebarChat({addNewChat}) {
   const createChat = ()=>{
    const roomName = prompt("please enter name for chat");

    if(roomName){
      
    }
   }

  return !addNewChat ?(
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message</p>
      </div>
    </div>
  )
  :(
    <div onClick={createChat}
    className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  )
}

export default SidebarChat
