import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Mock answers per topic (optional, can expand)
const topicAnswers = {
  Math: "Math is the study of numbers, shapes, and patterns.",
  Physics: "Physics is the study of matter, energy, and how they interact.",
  History: "History is the study of past events and civilizations.",
};

// Mock /ask endpoint
app.post("/ask", (req, res) => {
  const { question } = req.body;

  // Determine topic keyword in question
  let answer = "This is a mock answer for: " + question;

  for (const topic in topicAnswers) {
    if (question.toLowerCase().includes(topic.toLowerCase())) {
      answer = topicAnswers[topic];
      break;
    }
  }

  // Simulate AI thinking delay
  setTimeout(() => {
    res.json({ answer });
  }, 1000);
});

app.listen(5000, () => {
  console.log("Mock backend running on http://localhost:5000");
});
