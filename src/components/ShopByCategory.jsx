'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const categories = {
  Men: [
    { name: 'Eyeglasses', src: 'eyeglasses.png' },
    { name: 'Sunglasses', src: 'sunglasses.png' },
    { name: 'Computer Glasses', src: 'computer-glasses.png' },
    { name: 'Reading Glasses', src: 'reading-glasses.png' },
    { name: 'Contact Lenses', src: 'contact-lenses.png' },
    { name: 'Accessories', src: 'accessories.png' },
  ],
  Women: [
    { name: 'Eyeglasses', src: 'eyeglasses.png' },
    { name: 'Sunglasses', src: 'sunglasses.png' },
    { name: 'Computer Glasses', src: 'computer-glasses.png' },
    { name: 'Reading Glasses', src: 'reading-glasses.png' },
    { name: 'Contact Lenses', src: 'contact-lenses.png' },
    { name: 'Accessories', src: 'accessories.png' },
  ],
  Kids: [
    { name: 'Eyeglasses', src: 'eyeglasses.png' },
    { name: 'Sunglasses', src: 'sunglasses.png' },
    { name: 'Computer Glasses', src: 'computer-glasses.png' },
    { name: 'Reading Glasses', src: 'reading-glasses.png' },
    { name: 'Contact Lenses', src: 'contact-lenses.png' },
    { name: 'Accessories', src: 'accessories.png' },
  ],
};

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState('Men');

  return (
    <div className="h-auto min-h-[200px] bg-white">
      <div className="pt-[83px] pl-[77px]">
        <h1 className="text-[#333A45] font-bold text-[38px]">Shop by Category</h1>

        {/* Tabs */}
        <div className="flex space-x-8 mt-7 text-lg font-semibold pl-[48px]">
          {['Men', 'Women', 'Kids'].map((tab) => (
            <button
              key={tab}
              className={`pb-1 ${
                activeTab === tab
                  ? 'text-[#272932] border-b-2 border-[#3882FF]'
                  : 'text-[#8B8FA9]'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Category Items */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 pr-10">
          {categories[activeTab].map((cat) => (
            <div key={cat.name} className="flex flex-col items-center text-center">
              <div className="w-[150px] h-[150px] rounded-full overflow-hidden shadow-md">
                <Image
                  src={`/${cat.src}`}
                  alt={cat.name}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-2 text-lg text-[#272932E5] font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
