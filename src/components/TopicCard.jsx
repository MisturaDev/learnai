import React from 'react';

function TopicCard({ topic }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg cursor-pointer">
      <h3 className="text-xl font-semibold">{topic.name}</h3>
    </div>
  );
}

export default TopicCard;
