import { useState } from "react";
import { NavLink } from "react-router-dom";

import { List, Avatar } from "@mui/material";

import "./messageList.scss";

const MessageList = () => {
     const [messageList, setMessageList] = useState([
          {
               name: "firstChat",
               id: 1,
               icon: (
                    <NavLink key="1" to="/1">
                         <Avatar
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
                    </NavLink>
               ),
          },
          {
               name: "secondChat",
               id: 2,
               icon: (
                    <NavLink key="2" to="/2">
                         <Avatar
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
                    </NavLink>
               ),
          },
          {
               name: "firstChat",
               id: 3,
               icon: (
                    <NavLink key="3" to="/3">
                         <Avatar
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
                    </NavLink>
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
