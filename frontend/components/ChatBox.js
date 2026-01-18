"use client";
import { useState } from "react";
import axios from "axios";

export default function ChatBox(){
  const [messages,setMessages]=useState([]);

  const [input,setInput]=useState("");

  const sendMessage=async()=>{
    if(!input) return;

    const res = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "/api/chat",
      { message: input }
    );

    setMessages([...messages,{user:input,bot:res.data.reply}]);
    setInput("");
  };

  return(
    <div className="p-5 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Chatbot</h1>

      <div className="border p-3 h-80 overflow-y-auto mb-3">
        {messages.map((m,i)=>(
          <div key={i}>
            <p><b>You:</b> {m.user}</p>
            <p><b>Bot:</b> {m.bot}</p>
            <hr/>
          </div>
        ))}
      </div>

      <input
        className="border p-2 w-full"
        value={input}
        onChange={e=>setInput(e.target.value)}
        placeholder="Type message..."
      />
      <button onClick={sendMessage} className="bg-blue-500 text-white p-2 w-full mt-2">
        Send
      </button>
    </div>
  );
}