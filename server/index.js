const express = require("express")
const cors = require("cors"); 

const app = express()

app.use(cors(
    {    origin : ["http://localhost:5173", "https://mymailler.vercel.app/"]
}
));

const messages = [
    { subject: "Hi Again", content: "Just wanted to check on you", isRead: true },
    { subject: "Hi Friend", content: "Just wanted to let you know I’m good", isRead: false }
  ];

app.get("/api", (req, res) => {
    res.json({ "messages": messages });
});

app.get('/api/:id', (req, res) => {
    const id = req.params.id;
    const message = messages[id];
    if (message) {
      res.json(message);
    } else {
      res.status(404).json({ message: "Message not found" });
    }  });
app.listen(5000, () => { console.log("Server is running on Port 5000") });
