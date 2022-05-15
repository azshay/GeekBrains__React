import { useState, useEffect, createRef } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Messages from "./components/Messages/Messages";
import MessageList from "./components/MessageList/MessageList";
import NotFound from "./components/NotFound/NotFound";

import "./app.scss";

function App() {
     const [messages, setMessages] = useState([[], [], []]);
     const [textareaValue, setTextareaValue] = useState();

     const areaRef = createRef();
     let messagePathname = useLocation().pathname.replace("/", "");

     useEffect(() => {
          focusArea();

          if (
               messages[messagePathname - 1].length === 0 ||
               messages[messagePathname - 1][
                    messages[messagePathname - 1].length - 1
               ].author === "User"
          ) {
               console.log("Я тут");
               setTimeout(() => {
                    setMessages([
                         ...messages,
                         messages[messagePathname - 1].push({
                              author: "Bot",
                              text: "Hello, I`m BOT. Operator is coming soon.",
                         }),
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
                    messages[messagePathname - 1].push({
                         author: "User",
                         text: textareaValue,
                    }),
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
                         <p className="chat__userName">
                              <NavLink to={"/profile"}>Bot</NavLink>
                         </p>
                    </div>
                    <Routes>
                         <Route
                              path="/"
                              element={<NotFound></NotFound>}
                         ></Route>

                         <Route path="/profile"></Route>
                         <Route
                              path="*"
                              element={<NotFound></NotFound>}
                         ></Route>
                         <Route
                              path="/:id"
                              element={
                                   <Messages
                                        messages={messages[messagePathname - 1]}
                                   ></Messages>
                              }
                         ></Route>
                    </Routes>
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
