import React from 'react';
import TopicCard from '../components/TopicCard';
import QuickAskButton from '../components/QuickAskButton';

const topics = [
  { id: 1, name: 'Math' },
  { id: 2, name: 'Physics' },
  { id: 3, name: 'History' },
];

function HomePage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">LearnAI Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
      <QuickAskButton />
    </div>
  );
}

export default HomePage;
