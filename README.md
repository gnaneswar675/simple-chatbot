# 🤖 Simple Chatbot – Next.js + MongoDB + Vercel

A very simple chatbot web application built using **Next.js** and **MongoDB**, deployed on **Vercel**.  
This chatbot is **not intelligent** and does **not use AI or NLP**.  
It responds only to predefined static messages based on keyword matching.

---

## 🚀 Live Demo

🔗 **Live Project:** [Project Live Here](https://simple-chatbot-opal.vercel.app/)


---

## 📌 Features

- Static chatbot responses (no AI, no ML)
- Keyword-based message detection
- Stores chat messages in MongoDB
- Simple and clean UI
- Deployed on Vercel

---

## 💬 How the Chatbot Works

The chatbot checks whether the user message **contains certain keywords**.

| User Message Contains | Bot Response |
|----------------------|--------------|
| `hi` / `hello`       | Greeting message |
| `name`               | Bot introduction |
| `bye`                | Goodbye message |
| Anything else        | No response (bot stays silent) |

⚠️ This chatbot is **rule-based only** and does not understand natural language.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (React)
- **Database:** MongoDB Atlas
- **Deployment:** Vercel
