# chat_room_app

A simple real-time chat application built with Node.js, Express and Socket.IO.  
Supports multiple users connecting to the same chat room — with notifications for user connect / disconnect, and instant message broadcasting.

---

## ⚙️ Technologies Used

- Node.js  
- Express.js  
- Socket.IO :contentReference[oaicite:2]{index=2}  
- HTML / CSS / Vanilla JavaScript (client)  
- Optional: any front-end styling (you can plug in any CSS framework or custom styles)

---

## 🚀 Features

- Real-time bidirectional communication between clients and server using WebSockets (via Socket.IO) :contentReference[oaicite:3]{index=3}  
- Broadcast messages to all connected users  
- Broadcast “user connected” / “user disconnected” notices when a user joins or leaves  
- Works out-of-the-box with minimal configuration  

---

## 📁 Project Structure

chat_room_app/
│
├── client/ → Front-end (HTML, CSS, JS)
├── server/ → Back-end (Express + Socket.IO)
├── package.json
└── README.md ← this file