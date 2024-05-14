const express = require("express")
const cors = require("cors"); 

const app = express()

app.use(cors());

app.get("/api", (req, res) => {
    console.log("Request received at /api endpoint");
    const messages = [
        {
            "subject": "Hi Again",
            "content": "Just wanted to check on you",
            "isRead": true
        },
        {
            "subject": "Hi Friend",
            "content": "Just wanted to let you know I’m good",
            "isRead": false
        }
    ];
    console.log("Sending messages:", messages);
    res.json({ "messages": messages });
});

app.listen(5000, () => { console.log("Server is running on Port 5000") });
