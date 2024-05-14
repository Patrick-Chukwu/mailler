const express = require("express")
const app = express()

app.get("/api", (req, res) => {
    res.json({"messages": [
        {
        "subject": "Hi Again",
        "content": "Just wanted to check on you",
        "isRead": true
        },
        {
        "subject": "Hi Friend",
        "content": "Just wanted to let you know I’ m good",
        "isRead": false
         }
         ]
        })
}
)

app.listen(5000, () => {console.log("Server is running on Port 5000")})