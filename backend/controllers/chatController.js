import Chat from "../models/Chat.js";

export const sendMessage = async (req,res)=>{
  const { message } = req.body;

  let reply = "I didn’t understand that.";
  if(message.toLowerCase().includes("hello")) reply="Hello! How can I help you?";
  else if(message.toLowerCase().includes("bye")) reply="Goodbye! Have a nice day!";
  else if(message.toLowerCase().includes("name")) reply="I am your friendly chatbot 🤖";
    else if(message.toLowerCase().includes("hi")) reply="Hey Hi :)";


  const chat = await Chat.create({ userMessage: message, botReply: reply });

  res.json({ reply });
};