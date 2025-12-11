import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QuestionInput from "../components/QuestionInput";
import AnswerDisplay from "../components/AnswerDisplay";

const topics = [
  { id: 1, name: "Math" },
  { id: 2, name: "Physics" },
  { id: 3, name: "History" },
];

function TopicPage() {
  const { id } = useParams();
  const topic = topics.find((t) => t.id === parseInt(id));
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  if (!topic) return <div>Topic not found</div>;

  const handleAsk = async (question) => {
    if (!question) return; // Prevent empty questions
    setLoading(true);
    setAnswer(""); // Clear previous answer
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/ask`,
        { question }
      );

      setAnswer(response.data.answer);
    } catch (error) {
      console.error(error.response || error);
      setAnswer("Error getting AI answer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{topic.name}</h2>
      <p className="mb-4">
        Here the student can ask AI questions about {topic.name}.
      </p>

      <QuestionInput onAsk={handleAsk} />

      {loading ? (
        <p className="mt-4 text-gray-500 font-semibold">Thinking...</p>
      ) : (
        <AnswerDisplay answer={answer} />
      )}
    </div>
  );
}

export default TopicPage;
