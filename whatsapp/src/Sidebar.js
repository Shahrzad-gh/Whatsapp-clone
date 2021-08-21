import React from 'react'
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from "@material-ui/icons/Chat"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_8WzQVPn4BxjE5-1JKf-0ne863cJanND177gXp-A=s32-c-mo" />
         <div className="sidebar__headerRight">
           <IconButton>
             <DonutLargeIcon />
           </IconButton>
           <IconButton>
             <ChatIcon  />
           </IconButton>
           <IconButton>
             <MoreVertIcon  />
           </IconButton>
         </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined/>
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default sidebar
