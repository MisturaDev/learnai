import React from 'react';
import { useParams } from 'react-router-dom';

const topics = [
  { id: 1, name: 'Math' },
  { id: 2, name: 'Physics' },
  { id: 3, name: 'History' },
];

function TopicPage() {
  const { id } = useParams();
  const topic = topics.find((t) => t.id === parseInt(id));

  if (!topic) return <div>Topic not found</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{topic.name}</h2>
      <p>Here the student can ask AI questions about {topic.name}.</p>
    </div>
  );
}

export default TopicPage;
