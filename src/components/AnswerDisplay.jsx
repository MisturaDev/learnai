import React from "react";

function AnswerDisplay({ answer }) {
  if (!answer) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-2 text-indigo-600">AI Answer:</h3>
      <p className="text-gray-800">{answer}</p>
    </div>
  );
}

export default AnswerDisplay;
