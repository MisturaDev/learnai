import React from 'react';
import { useParams } from 'react-router-dom';

function TopicPage() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Topic Page - ID: {id}</h2>
      <p>Here the student can ask AI questions about this topic.</p>
    </div>
  );
}

export default TopicPage;
