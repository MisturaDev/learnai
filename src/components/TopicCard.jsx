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
      className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl cursor-pointer transform hover:-translate-y-1 transition-transform duration-200"
    >
      <h3 className="text-2xl font-semibold text-gray-800">{topic.name}</h3>
    </div>
  );
}

export default TopicCard;
