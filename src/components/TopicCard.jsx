import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopicCard({ topic }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/topic/${topic.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="border p-4 rounded shadow hover:shadow-lg cursor-pointer"
    >
      <h3 className="text-xl font-semibold">{topic.name}</h3>
    </div>
  );
}

export default TopicCard;
