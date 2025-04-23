import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  link: string;
}

const TeamCard: React.FC<TeamMember> = ({ name, role, image, link }) => {
  // Support single-name cases
  const [firstName, lastName] = name.split(' ');
  return (
    <div className="mb-5 lg:mb-10 mx-auto text-center">
      <img
        src={image}
        alt={name}
        className="w-50 h-50 shadow-md mx-auto rounded-xl object-cover"
      />
      <h3 className="mt-4 font-bold">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:underline"
          aria-label={`Open LinkedIn profile of ${name}`}
        >
          {firstName}
          {lastName && (
            <span className="uppercase"> {lastName}</span>
          )}
          <span className="ml-1 text-blue-700" aria-hidden="true">
            {/* LinkedIn icon could go here instead */}
            {/* <svg
              width="18"
              height="18"
              fill="currentColor"
              className="inline align-text-bottom"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75c.965 0 1.75.784 1.75 1.75s-.785 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.867 0-2.153 1.457-2.153 2.964v5.703h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.562 2.841-1.562 3.041 0 3.603 2.003 3.603 4.605v5.59z"/>
            </svg> */}
          </span>
        </a>
        <span className="text-red-600 text-2xl">●</span>
      </h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
};

export default TeamCard;