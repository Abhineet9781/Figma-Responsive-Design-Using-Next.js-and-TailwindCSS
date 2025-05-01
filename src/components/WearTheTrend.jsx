'use client';
import React from 'react';
import Image from 'next/image';
import { MoveRight, MoveLeft } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'RB3548N Hexagonal Flat Lenses',
    brand: 'Alex Perry',
    price: 250,
    discountedPrice: 187.99,
    image: '/glasses1.png',
    colors: ['#000000', '#FF0000', '#0000FF'],
    soldOut: false,
  },
  {
    id: 2,
    name: 'Aviator Classic Gold Frame',
    brand: 'Ray-Ban',
    price: 300,
    discountedPrice: 219.99,
    image: '/glasses2.png',
    colors: ['#333333', '#3366FF', '#CCCCCC'],
    soldOut: true,
  },
  {
    id: 3,
    name: 'Round Metal Blue Lenses',
    brand: 'Vogue Eyewear',
    price: 280,
    discountedPrice: 199.99,
    image: '/glasses3.png',
    colors: ['#000000', '#FF6600', '#009999'],
    soldOut: false,
  },
  {
    id: 4,
    name: 'Clubmaster Tortoise Brown',
    brand: 'Persol',
    price: 320,
    discountedPrice: 239.99,
    image: '/glasses4.png',
    colors: ['#222222', '#00CCFF', '#CCCCCC'],
    soldOut: true,
  },
  {
    id: 5,
    name: 'Wayfarer Black Classic',
    brand: 'Ray-Ban',
    price: 270,
    discountedPrice: 189.99,
    image: '/glasses5.png',
    colors: ['#000000', '#FF0000', '#00FF00'],
    soldOut: false,
  },
  {
    id: 6,
    name: 'Oversized Transparent Frame',
    brand: 'Gucci',
    price: 400,
    discountedPrice: 299.99,
    image: '/glasses6.png',
    colors: ['#FFFFFF', '#999999', '#000000'],
    soldOut: true,
  },
  {
    id: 7,
    name: 'Cat Eye Bold Pink',
    brand: 'Prada',
    price: 350,
    discountedPrice: 269.99,
    image: '/glasses7.png',
    colors: ['#FF69B4', '#000000', '#663399'],
    soldOut: false,
  },
  {
    id: 8,
    name: 'Sport Shield Reflective',
    brand: 'Oakley',
    price: 310,
    discountedPrice: 239.99,
    image: '/glasses8.png',
    colors: ['#000000', '#3366FF', '#DDDDDD'],
    soldOut: true,
  },
];

const WearTheTrend = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-20 bg-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#333A45]">Wear The Trend</h2>
        <div className="flex gap-3 mt-4 sm:mt-0">
          <button className="p-2 bg-gray-200 rounded-full">
            <MoveLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 bg-gray-900 rounded-full">
            <MoveRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="bg-[#F7F8FA] p-4 rounded-md min-h-[300px] flex flex-col">
              {/* Image Container */}
              <div className="relative flex-1 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={100}
                  className="object-contain"
                />
                {/* Icons - Top Left */}
                <div className="absolute top-2 left-2">
                  <button className="p-1 bg-white rounded-full shadow">
                    <Image src="/icon1.png" alt="Rotate" width={17} height={17} />
                  </button>
                </div>
                {/* Icons - Top Right */}
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <button className="p-1 bg-white rounded-full shadow">
                    <Image src="/icon2.png" alt="Heart" width={17} height={17} />
                  </button>
                  <button className="p-1 bg-white rounded-full shadow">
                    <Image src="/icon3.png" alt="Search" width={17} height={17} />
                  </button>
                </div>
              </div>

              {/* Color Circles */}
              <div className="flex justify-center gap-2 mt-3">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="w-3 h-3 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-3">
              <p className="text-sm font-semibold text-[#353D4A]">{product.brand}</p>
              <p className="text-sm text-[#5B6871]">{product.name}</p>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#FF4646E5] line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm font-medium text-black">
                    ${product.discountedPrice.toFixed(2)}
                  </span>
                </div>
                {product.soldOut && (
                  <span className="text-xs text-[#FF4646]">Almost Sold Out</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WearTheTrend;
