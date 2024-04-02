import React, { useState } from 'react';

const SideBar = () => {
  const [activeItem, setActiveItem] = useState('Common Quetions');

  return (
    <div className='w-[250px] hidden md:block'>
      <ul>
        <li className={`px-[1rem] py-[.75rem] cursor-pointer ${activeItem === 'Common Quetions' ? 'border-l-4 border-blue-500 font-semibold bg-blue-100 text-[#001435]' : ''}`}  onClick={() => setActiveItem('Common Quetions')}>
          <a >Common Quetions</a>
        </li>
        <li className={`px-[1rem] py-[.75rem] cursor-pointer ${activeItem === 'PayPal Help Guides' ? 'border-l-4 border-blue-500 font-semibold bg-blue-100 text-[#001435]' : ''}`}  onClick={() => setActiveItem('PayPal Help Guides')}>
          <a >PayPal Help Guides</a>
        </li>
        <li className={`px-[1rem] py-[.75rem] cursor-pointer ${activeItem === 'Payments & Transfers' ? 'border-l-4 border-blue-500 font-semibold bg-blue-100 text-[#001435]' : ''}`}  onClick={() => setActiveItem('Payments & Transfers')}>
          <a >Payments & Transfers</a>
        </li>
        <li className={`px-[1rem] py-[.75rem] cursor-pointer ${activeItem === 'Disputes & Limitations' ? 'border-l-4 border-blue-500 font-semibold bg-blue-100 text-[#001435]' : ''}`} onClick={() => setActiveItem('Disputes & Limitations')}>
          <a>Disputes & Limitations</a>
        </li>
        <li className={`px-[1rem] py-[.75rem] cursor-pointer ${activeItem === 'My Account' ? 'border-l-4 border-blue-500 font-semibold bg-blue-100 text-[#001435]' : ''}`} onClick={() => setActiveItem('My Account')} >
          <a >My Account</a>
        </li>
        <li className={`px-[1rem] py-[.75rem] cursor-pointer ${activeItem === 'My Wallet' ? 'border-l-4 border-blue-500 font-semibold bg-blue-100 text-[#001435]' : ''}`}  onClick={() => setActiveItem('My Wallet')}>
          <a >My Wallet</a>
        </li>
        <li className={`px-[1rem] py-[.75rem] cursor-pointer ${activeItem === 'Login & Security' ? 'border-l-4 border-blue-500 font-semibold bg-blue-100 text-[#001435]' : ''}`} onClick={() => setActiveItem('Login & Security')}>
          <a >Login & Security</a>
        </li>
        <li className={`px-[1rem] py-[.75rem] cursor-pointer ${activeItem === 'Seller Tools' ? 'border-l-4 border-blue-500 font-semibold bg-blue-100 text-[#001435]' : ''}`} onClick={() => setActiveItem('Seller Tools')}>
          <a>Seller Tools</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
