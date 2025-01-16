import React from 'react';


interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

const FeatureCard: React.FC<CardProps> = ({  icon, title, description, className, children }) => {
  return (
    <div className="flex flex-col gap-8 border border-gray-300  p-4 rounded-lg">
      <div className="text-gray-800">
        {icon}
      </div>
      <div className="text-gray-800">
        <h2 className="text-base font-bold leading-tight">{title}</h2>
        <p className="text-sm font-normal leading-normal">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default FeatureCard;
