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
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">
        LearnAI 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => navigate(`/topic/${topic.id}`)}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-1 duration-200"
          >
            <h3 className="text-2xl font-semibold text-gray-800">{topic.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
