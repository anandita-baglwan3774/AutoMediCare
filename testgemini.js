import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`;

const body = {
  contents: [
    {
      role: "user",
      parts: [
        {
          text: "I have chest pain and shortness of breath"
        }
      ]
    }
  ]
};

fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body)
})
  .then(res => res.json())
  .then(data => console.log("✅ Gemini response:", data))
  .catch(err => console.error("❌ Error:", err));
