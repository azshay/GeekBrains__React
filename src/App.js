import { useState, useEffect } from "react";

import Message from "./components/Message/Message";

import "./app.scss";

function App() {
     const [messageList, setMessageList] = useState([]);
     const [textareaValue, setTextareaValue] = useState();

     useEffect(() => {
          if (
               messageList.length === 0 ||
               messageList[messageList.length - 1].author === "User"
          ) {
               setTimeout(() => {
                    setMessageList([
                         ...messageList,
                         {
                              author: "Bot",
                              text: "Hello, I`m BOT. Operator is coming soon.",
                         },
                    ]);
               }, 1500);
          }
     }, [messageList]);

     const sendMessage = () => {
          if (textareaValue.length !== 0) {
               setMessageList([
                    ...messageList,
                    { author: "User", text: textareaValue },
               ]);

               setTextareaValue("");
          }
     };

     const textareaHandler = (e) => {
          setTextareaValue(e.target.value);
     };

     return (
          <div className="App">
               <div className="chatList"></div>
               <div className="chat">
                    <div className="chat__user">
                         <p className="chat__userName">Bot</p>
                    </div>
                    <div className="chat__messages">
                         {messageList.map((message, index) => {
                              return (
                                   <div
                                        className={
                                             message.author === "User"
                                                  ? "chat__messageRight"
                                                  : "chat__message"
                                        }
                                        key={index}
                                   >
                                        <div className="chat__messageAuthor">
                                             {message.author}
                                        </div>
                                        <div className="chat__messageText">
                                             {message.text}
                                        </div>
                                   </div>
                              );
                         })}
                    </div>
                    <div className="chat__send">
                         <textarea
                              name="chat__textArea"
                              id="chat__textArea"
                              cols="30"
                              rows="10"
                              value={textareaValue}
                              onChange={textareaHandler}
                         ></textarea>
                         <button
                              className="chat__sendButton"
                              onClick={sendMessage}
                         >
                              SEND
                         </button>
                    </div>
               </div>
          </div>
     );
}

export default App;
