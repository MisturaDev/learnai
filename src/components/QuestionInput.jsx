import React, { useState } from "react";

function QuestionInput({ onAsk }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    onAsk(question);
    setQuestion("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
        className="flex-1 p-3 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-3 rounded-r-xl hover:bg-indigo-700 transition-colors font-semibold"
      >
        Ask AI
      </button>
    </form>
  );
}

export default QuestionInput;
