import React from 'react';
import apfp from '../assects/Apfp.png';
import Npfp from '../assects/nishant.png';
import Spfp from '../assects/suman.jpg';
import Bpfp from '../assects/bishal.png';

const teamMembers = [
  {
    name: 'Abhinav Singh',
    pic: apfp,
    language: ["React", "Three.Js"],
  },
  {
    name: 'Bishal Jung Basnet',
    pic: Bpfp,
    language: ["React"]
  },
  {
    name: 'Nishant Chaudhary',
    pic: Npfp,
    language: ["React"],
  },
  {
    name: 'Suman Kathayat',
    pic: Spfp,
    language: ["React"],
  }
  
];

const TeamMember = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        <br />
        <br />
        Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4 text-center">
            <img
              src={member.pic}
              alt={`${member.name}'s avatar`}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <div className="mt-2">
              <p className="text-gray-600">
                Languages Used:{' '}
                {member.language.map((lang, langIndex) => (
                  <span
                    key={langIndex}
                    className="inline-block py-1 px-3 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 mr-2 mb-2"
                  >
                    {lang}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
