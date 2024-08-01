import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

// Whatsapp business API...need to create acc to get the API Key
// app.post("/api/send-message", async (req, res) => {
//   const { number, message } = req.body

//   try {
//     // Replace with your WhatsApp API endpoint and credentials
//     const res = await axios.post(
//       "https://your-bsp-endpoint.com/v1/messages", // endpoint
//       {
//         to: `whatsapp:+${number}`,
//         type: "text",
//         text: {
//           body: message,
//         },
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer YOUR_ACCESS_TOKEN`, // api_key
//         },
//       }
//     )

//     res.status(200).send("Message sent successfully")
//   } catch (error) {
//     console.error("Error sending message:", error)
//     res.status(500).send("Failed to send message")
//   }
// })

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`)
// })
