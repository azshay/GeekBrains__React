import { useState, useEffect, createRef } from "react";

import Messages from "./components/Messages/Messages";
import MessageList from "./components/MessageList/MessageList";

import "./app.scss";

function App() {
     const [messages, setMessages] = useState([]);
     const [textareaValue, setTextareaValue] = useState();

     const areaRef = createRef();

     useEffect(() => {
          focusArea();

          if (
               messages.length === 0 ||
               messages[messages.length - 1].author === "User"
          ) {
               setTimeout(() => {
                    setMessages([
                         ...messages,
                         {
                              author: "Bot",
                              text: "Hello, I`m BOT. Operator is coming soon.",
                         },
                    ]);
               }, 1500);
          }
     }, [messages]);

     const textareaHandler = (e) => {
          setTextareaValue(e.target.value);
     };

     const sendMessage = () => {
          if (textareaValue.length !== 0) {
               setMessages([
                    ...messages,
                    { author: "User", text: textareaValue },
               ]);

               setTextareaValue("");
          }

          areaRef.current.focus();
     };

     const focusArea = () => {
          areaRef.current.focus();
     };

     return (
          <div className="App">
               <div className="chatList">
                    <MessageList></MessageList>
               </div>
               <div className="chat">
                    <div className="chat__user">
                         <p className="chat__userName">Bot</p>
                    </div>
                    <Messages messages={messages}></Messages>
                    <div className="chat__send">
                         <textarea
                              name="chat__textArea"
                              id="chat__textArea"
                              cols="30"
                              rows="10"
                              value={textareaValue}
                              onChange={textareaHandler}
                              ref={areaRef}
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
