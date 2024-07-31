import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
// import twilio from "twilio"
import axios from "axios"

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

// const accountSid = "AC5ba6eff4067532eaf25e163b2e1e0914"
// const authToken = "004e102aa6c0c0c85be1eb95e9a8b787"
// const client = new twilio(accountSid, authToken)

// app.post("/api/send-whatsapp", (req, res) => {
//   const { mobile, message } = req.body

//   client.messages
//     .create({
//       body: message,
//       from: "whatsapp:+919872459519", // This is the Twilio sandbox number
//       to: `whatsapp:+91${mobile}`,
//     })
//     .then((body) => console.log(body.body))
//     .catch((error) => {
//       console.error("Error sending message:", error)
//       res.status(500).json({ success: false, error: error.message })
//     })
// })

// Whatsapp business API...need to create acc to get the API Key
app.post("/api/send-message", async (req, res) => {
  const { number, message } = req.body

  try {
    // Replace with your WhatsApp API endpoint and credentials
    const res = await axios.post(
      "https://your-bsp-endpoint.com/v1/messages", // endpoint
      {
        to: `whatsapp:+${number}`,
        type: "text",
        text: {
          body: message,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_ACCESS_TOKEN`, // api_key
        },
      }
    )

    res.status(200).send("Message sent successfully")
  } catch (error) {
    console.error("Error sending message:", error)
    res.status(500).send("Failed to send message")
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
