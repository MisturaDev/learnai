import React, { useState } from 'react';

function QuestionInput({ onAsk }) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    onAsk(question);
    setQuestion('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ask AI
      </button>
    </form>
  );
}

export default QuestionInput;
