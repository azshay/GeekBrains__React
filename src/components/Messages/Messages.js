import { Avatar } from "@mui/material";

const Messages = ({ messages }) => {
     return (
          <div className="chat__messages">
               {messages.map((message, index) => {
                    return (
                         <div
                              className={
                                   message.author === "User"
                                        ? "chat__message chat__messageRight"
                                        : "chat__message"
                              }
                              key={index}
                         >
                              <div className="chat__messageImage">
                                   {message.author === "User" ? (
                                        <Avatar>U</Avatar>
                                   ) : (
                                        <Avatar>B</Avatar>
                                   )}
                              </div>

                              <div className="chat__messageText">
                                   <div className="chat__messageAuthor">
                                        {message.author}
                                   </div>
                                   <div className="chat__messageText">
                                        {message.text}
                                   </div>
                              </div>
                         </div>
                    );
               })}
          </div>
     );
};

export default Messages;
