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

  if (!topic)
    return (
      <div className="p-6 text-center text-red-600 font-bold">
        Topic not found
      </div>
    );

  const handleAsk = async (question) => {
    if (!question) return;
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
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-3xl font-bold mb-4 text-indigo-600">{topic.name}</h2>
        <p className="mb-6 text-gray-700">
          Here the student can ask AI questions about {topic.name}.
        </p>

        <QuestionInput onAsk={handleAsk} />

        {loading ? (
          <p className="mt-4 text-gray-500 font-semibold animate-pulse">
            Thinking...
          </p>
        ) : (
          <AnswerDisplay answer={answer} />
        )}
      </div>
    </div>
  );
}

export default TopicPage;
