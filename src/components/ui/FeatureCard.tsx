import React from 'react';


interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<CardProps> = ({  icon, title, description, children }) => {
  return (
    <div className="flex flex-col gap-4 border border-gray-300 p-4 rounded-lg">
      <div className="text-gray-800 flex items-center">
        {icon}
        <h2 className="text-base font-bold leading-tight ml-2">{title}</h2>
      </div>
      <div className="text-gray-800">
        <p className="text-sm font-normal leading-normal">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default FeatureCard;
