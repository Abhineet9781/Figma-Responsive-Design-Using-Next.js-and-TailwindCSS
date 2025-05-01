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
    <div className="bg-white py-10 px-4 sm:px-8 md:px-16">
      <h1 className="text-[#333A45] font-bold text-2xl sm:text-3xl md:text-4xl">
        Shop by Category
      </h1>

      {/* Tabs */}
      <div className="flex gap-6 mt-6 text-base sm:text-lg font-semibold">
        {['Men', 'Women', 'Kids'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 transition-colors ${activeTab === tab
                ? 'text-[#272932] border-b-2 border-[#3882FF]'
                : 'text-[#8B8FA9]'
              }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Category Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories[activeTab].map((cat) => (
          <div key={cat.name} className="flex flex-col items-center text-center">
            <div className="w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden shadow-md">
              <Image
                src={`/${cat.src}`}
                alt={cat.name}
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-2 text-sm sm:text-base text-[#272932E5] font-medium">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
