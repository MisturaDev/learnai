import React from 'react';
import { useNavigate } from 'react-router-dom';

const topics = [
  { id: 1, name: 'Math' },
  { id: 2, name: 'Physics' },
  { id: 3, name: 'History' },
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">LearnAI Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => navigate(`/topic/${topic.id}`)}
            className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{topic.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
