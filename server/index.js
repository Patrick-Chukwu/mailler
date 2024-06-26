const express = require("express")
const cors = require("cors"); 

const app = express()

app.use(cors(
    {    origin : ["http://localhost:5173", "https://mymailler.vercel.app"]
}
));

const messages = [
    { subject: "Hi Again", content: "Just wanted to check on you", isRead: true },
    { subject: "Hi Friend", content: "Just wanted to let you know I’m good", isRead: false },
    { subject: "Hi Pat", content: "Just wanted to know how you are", isRead: true },
    { subject: "Hi man", content: "Just hoping you're okay", isRead: false },
    { subject: "Hi my guy", content: "Just wanted to know id you're fine", isRead: true },
    { subject: "Hi Friend", content: "Just wanted to let you know I’m good", isRead: false },
    { subject: "Yo Pat", content: "Just wanted to know how you are", isRead: false },
    { subject: "Hey man", content: "Just hoping you're well", isRead: false }
  ];

app.get("/messages", (req, res) => {
    res.json({ "messages": messages });
});

app.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    const message = messages[id];
    if (message) {
      res.json(message);
    } else {
      res.status(404).json({ message: "Message not found" });
    }  
  });
// Listen to the put method for updating status
app.put('/messages/mark-as-read/:index', (req, res) => {
  const { index } = req.params;
  messages[index].isRead = true;
  res.sendStatus(200);
});

// generate swagger UI
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json")

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(5000, () => { console.log("Server is running on Port 5000") });
