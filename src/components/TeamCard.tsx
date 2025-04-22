import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TeamCard: React.FC<TeamMember> = ({ name, role, image }) => {
  return (
    <div className={`p-4text-center w-48 h-48 mb-15 mx-auto`}>
      <img src={image} alt={name} className="w-48 h-48 shadow-md mx-auto rounded-xl object-cover" />
      <h3 className="mt-4 font-bold">
        {name.split(' ')[0]} <span className="uppercase">{name.split(' ')[1]}</span> <span className="text-red-600">●</span>
      </h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
};

export default TeamCard;
