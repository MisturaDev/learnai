import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionInput from '../components/QuestionInput';
import AnswerDisplay from '../components/AnswerDisplay';

const topics = [
  { id: 1, name: 'Math' },
  { id: 2, name: 'Physics' },
  { id: 3, name: 'History' },
];

function TopicPage() {
  const { id } = useParams();
  const topic = topics.find((t) => t.id === parseInt(id));
  const [answer, setAnswer] = useState('');

  if (!topic) return <div>Topic not found</div>;

  const handleAsk = (question) => {
    setAnswer(`This is a sample answer for "${question}" in ${topic.name}.`);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{topic.name}</h2>
      <p className="mb-4">Here the student can ask AI questions about {topic.name}.</p>

      <QuestionInput onAsk={handleAsk} />
      <AnswerDisplay answer={answer} />
    </div>
  );
}

export default TopicPage;
