import React from 'react';

function AnswerDisplay({ answer }) {
  if (!answer) return null;

  return (
    <div className="border p-4 rounded shadow bg-gray-50">
      <h3 className="font-semibold mb-2">AI Answer:</h3>
      <p>{answer}</p>
    </div>
  );
}

export default AnswerDisplay;
