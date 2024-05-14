const express = require("express")
const cors = require("cors"); 

const app = express()

app.use(cors(
    {    origin : ["http://localhost:5173", "https://mymailler.vercel.app/"]
}
));

app.get("/api", (req, res) => {
    // console.log("Request received at /api endpoint");
    const messages = [
        {
            "subject": "Hi Again",
            "content": "Just wanted to check on you Just wanted to let you know I’m good vJust wanted to let you know I’m good Just wanted to let you know I’m good ",
            "isRead": true
        },
        {
            "subject": "Hi Friend",
            "content": "Just wanted to let you know I’m good",
            "isRead": false
        },
        {
            "subject": "Hi Pat",
            "content": "Just wanted to let you know I’m good Just wanted to let you know I’m good Just wanted to let you know I’m good ",
            "isRead": true
        },
        {
            "subject": "Hi Sommy",
            "content": "Just wanted to let you know I’m good Just wanted to let you know I’m good Just wanted to let you know I’m good ",
            "isRead": true
        },
        {
            "subject": "Hi Friend",
            "content": "Just wanted to let you know I’m good",
            "isRead": false
        },
        {
            "subject": "Hi Pat",
            "content": "Just wanted to let you know I’m good Just wanted to let you know I’m good Just wanted to let you know I’m good ",
            "isRead": true
        },
        {
            "subject": "Hi Sommy",
            "content": "Just wanted to let you know I’m good Just wanted to let you know I’m good Just wanted to let you know I’m good ",
            "isRead": true
        },
        {
            "subject": "Hi Again",
            "content": "Just wanted to check on you Just wanted to let you know I’m good vJust wanted to let you know I’m good Just wanted to let you know I’m good ",
            "isRead": true
        },
        {
            "subject": "Hi Friend",
            "content": "Just wanted to let you know I’m good",
            "isRead": false
        },
        {
            "subject": "Hi Pat",
            "content": "Just wanted to let you know I’m good Just wanted to let you know I’m good Just wanted to let you know I’m good ",
            "isRead": true
        },
        {
            "subject": "Hi Sommy",
            "content": "Just wanted to let you know I’m good Just wanted to let you know I’m good Just wanted to let you know I’m good ",
            "isRead": true
        },
        {
            "subject": "Hi Friend",
            "content": "Just wanted to let you know I’m good",
            "isRead": false
        },
        {
            "subject": "Hi Pat",
            "content": "Just wanted to let you know I’m good Just wanted to let you know I’m good Just wanted to let you know I’m good ",
            "isRead": true
        },
        {
            "subject": "Hi Sommy",
            "content": "Just wanted to let you know I’m good Just wanted to let you know I’m good Just wanted to let you know I’m good ",
            "isRead": true
        }
    ];

    res.json({ "messages": messages });
});

app.listen(5000, () => { console.log("Server is running on Port 5000") });
