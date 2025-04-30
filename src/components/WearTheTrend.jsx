'use client';
import React from 'react';
import Image from 'next/image';
import { Heart, Search, MoveRight, MoveLeft, RotateCcw } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'RB3548N Hexagonal Flat Lenses',
    brand: 'Alex Perry',
    price: 250,
    discountedPrice: 187.99,
    image: '/glasses1.png',
    colors: ['#000', '#f00', '#00f'],
    soldOut: false,
  },
  {
    id: 2,
    name: 'RB3548N Hexagonal Flat Lenses',
    brand: 'Alex Perry',
    price: 250,
    discountedPrice: 187.99,
    image: '/glasses2.png',
    colors: ['#000', '#00f', '#ccc'],
    soldOut: true,
  },
  {
    id: 3,
    name: 'RB3548N Hexagonal Flat Lenses',
    brand: 'Alex Perry',
    price: 250,
    discountedPrice: 187.99,
    image: '/glasses3.png',
    colors: ['#000', '#f00', '#00f'],
    soldOut: false,
  },
  {
    id: 4,
    name: 'RB3548N Hexagonal Flat Lenses',
    brand: 'Alex Perry',
    price: 250,
    discountedPrice: 187.99,
    image: '/glasses4.png',
    colors: ['#000', '#00f', '#ccc'],
    soldOut: true,
  },
  {
    id: 5,
    name: 'RB3548N Hexagonal Flat Lenses',
    brand: 'Alex Perry',
    price: 250,
    discountedPrice: 187.99,
    image: '/glasses5.png',
    colors: ['#000', '#f00', '#00f'],
    soldOut: false,
  },
  {
    id: 6,
    name: 'RB3548N Hexagonal Flat Lenses',
    brand: 'Alex Perry',
    price: 250,
    discountedPrice: 187.99,
    image: '/glasses6.png',
    colors: ['#000', '#00f', '#ccc'],
    soldOut: true,
  },
  {
    id: 7,
    name: 'RB3548N Hexagonal Flat Lenses',
    brand: 'Alex Perry',
    price: 250,
    discountedPrice: 187.99,
    image: '/glasses7.png',
    colors: ['#000', '#f00', '#00f'],
    soldOut: false,
  },
  {
    id: 8,
    name: 'RB3548N Hexagonal Flat Lenses',
    brand: 'Alex Perry',
    price: 250,
    discountedPrice: 187.99,
    image: '/glasses8.png',
    colors: ['#000', '#00f', '#ccc'],
    soldOut: true,
  },


];

const WearTheTrend = () => {
  return (
    <div className="py-16 px-8 bg-white">
      <div className="flex justify-between items-center mb-6 px-[77px]">
        <h2 className="text-3xl font-bold text-[#333A45] ">Wear The Trend</h2>
        <div className="flex gap-3">
          <button className="p-2 bg-gray-200 rounded-full">
            <MoveLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 bg-gray-900 rounded-full">
            <MoveRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-[77px]">
        {products.map((product) => (
          <div key={product.id} className="group w-[302px]">
            <div className="bg-[#F7F8FA] p-4 rounded-md min-h-[377px] flex flex-col">
              <div className="flex-1 flex items-center justify-center relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={240}
                  height={87}
                  className="object-contain"
                />

                <div className="absolute top-2 left-2">
                  <button className="p-1 bg-white rounded-full shadow">
                    <Image src="/icon1.png" alt="Rotate" width={17} height={17} />
                  </button>
                </div>

                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <button className="p-1 bg-white rounded-full shadow">
                    <Image src="/icon2.png" alt="Heart" width={17} height={17} />
                  </button>
                  <button className="p-1 bg-white rounded-full shadow mt-1">
                    <Image src="/icon3.png" alt="Search" width={17} height={17} />
                  </button>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-2">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-3 h-3 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>

            <div className="mt-3 px-1">
              <p className="text-[13px] text-[#353D4A] font-semibold">{product.brand}</p>
              <p className=" text-sm text-[#5B6871] font-normal">{product.name}</p>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] text-[#FF4646E5] line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-black font-medium">
                    ${product.discountedPrice}
                  </span>
                </div>

                {product.soldOut && (
                  <span className="text-xs text-[#FF4646] font-normal">
                    Almost Sold Out
                  </span>
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
