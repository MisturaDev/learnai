import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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

  const handleAsk = async (question) => {
    try {
      setAnswer('Thinking...');
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: question }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );

      const aiAnswer = response.data.choices[0].message.content;
      setAnswer(aiAnswer);
    } catch (error) {
      console.error(error);
      setAnswer('Error getting AI answer. Please try again.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{topic.name}</h2>
      <p className="mb-4">
        Here the student can ask AI questions about {topic.name}.
      </p>

      <QuestionInput onAsk={handleAsk} />
      <AnswerDisplay answer={answer} />
    </div>
  );
}

export default TopicPage;
