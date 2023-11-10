import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { demoLiveChat } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const [chatBox, setChatBox] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if(!chatBox) return;
    dispatch(
      addMessage({
        name: "Aditya",
        message: chatBox,
      })
    );
    setChatBox('')
  };

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      // console.log("API Polling");
      const randInt = Math.floor(Math.random() * 501);
      dispatch(
        addMessage({
          name: demoLiveChat[randInt].email,
          message: demoLiveChat[randInt].body.slice(0, 20) + "🎃🎃",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className="flex flex-col-reverse mx-2 p-2 overflow-y-scroll scroll-auto no-scrollbar border border-gray w-[360px] h-[473px] rounded-xl">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form className="w-[360px] mx-2 mt-1 ">
        <input
          value={chatBox}
          placeholder="Chat Now"
          onChange={(e) => setChatBox(e.target.value)}
          type="text"
          className="bg-gray-200 w-9/12 outline-none p-2 px-4 rounded-l-full"
        />
        <button
          onClick={handleSend}
          className="w-3/12 text-center bg-green-600 p-2 rounded-r-full font-bold text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
