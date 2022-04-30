import { useState } from "react";

import { List, Avatar } from "@mui/material";

import "./messageList.scss";

const MessageList = () => {
     const [messageList, setMessageList] = useState([
          {
               name: "firstChat",
               id: 1,
               icon: (
                    <Avatar
                         key="1"
                         className="chat__messageListAvatar"
                         sx={{
                              width: 50,
                              height: 50,
                              border: "1px solid white",
                              backgroundColor: "#2a2738",
                              cursor: "pointer",
                         }}
                    >
                         1
                    </Avatar>
               ),
          },
          {
               name: "secondChat",
               id: 2,
               icon: (
                    <Avatar
                         key="2"
                         className="chat__messageListAvatar"
                         sx={{
                              width: 50,
                              height: 50,
                              border: "1px solid white",
                              backgroundColor: "#2a2738",
                              cursor: "pointer",
                         }}
                    >
                         2
                    </Avatar>
               ),
          },
          {
               name: "firstChat",
               id: 3,
               icon: (
                    <Avatar
                         key="3"
                         className="chat__messageListAvatar"
                         sx={{
                              width: 50,
                              height: 50,
                              border: "1px solid white",
                              backgroundColor: "#2a2738",
                              cursor: "pointer",
                         }}
                    >
                         3
                    </Avatar>
               ),
          },
     ]);

     return (
          <div className="chat__messageList">
               <List>
                    {messageList.map((chat) => {
                         return chat.icon;
                    })}
               </List>
          </div>
     );
};

export default MessageList;
