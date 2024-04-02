import React from 'react';

export const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`text-sm font-light py-2 px-4 md:text-md font-semibold ${
        isActive ? 'bg-white text-[#112880]' : ' bg-transparent text-[#90918c]'
      } rounded-full focus:outline-none`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export const TabBar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center gap-2 bg-[#f0eee8] w-fit px-1 py-1 rounded-full md:gap-5">
      <Tab
        label="Personal Help"
        isActive={activeTab === 'Personal Help'}
        onClick={() => setActiveTab('Personal Help')}
      />
      <Tab
        label="Business Help"
        isActive={activeTab === 'Business Help'}
        onClick={() => setActiveTab('Business Help')}
      />
      <Tab
        label="Technical Help"
        isActive={activeTab === 'Technical Help'}
        onClick={() => setActiveTab('Technical Help')}
      />
    </div>
  );
};
