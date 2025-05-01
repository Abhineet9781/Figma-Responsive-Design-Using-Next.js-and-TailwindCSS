'use client';
import Image from 'next/image';
import { useRef } from 'react';

const brands = [
  { name: 'Ray-Ban', src: '/brands/brand1.png' },
  { name: 'Oakley', src: '/brands/brand2.png' },
  { name: 'Persol', src: '/brands/brand3.png' },
  { name: 'Maui Jim', src: '/brands/brand4.png' },
  { name: 'Tom Ford', src: '/brands/brand5.png' },
  { name: 'Prada', src: '/brands/brand6.png' },
  { name: 'Ray-Ban', src: '/brands/brand3.png' },
  { name: 'Oakley', src: '/brands/brand2.png' },
  { name: 'Persol', src: '/brands/brand3.png' },
  { name: 'Maui Jim', src: '/brands/brand4.png' },
  { name: 'Tom Ford', src: '/brands/brand5.png' },
  { name: 'Prada', src: '/brands/brand6.png' },
  { name: 'Ray-Ban', src: '/brands/brand1.png' },
  { name: 'Oakley', src: '/brands/brand2.png' },
  { name: 'Persol', src: '/brands/brand3.png' },
  { name: 'Maui Jim', src: '/brands/brand4.png' },
  { name: 'Tom Ford', src: '/brands/brand5.png' },
  { name: 'Prada', src: '/brands/brand6.png' },
];

export default function ShopByBrand() {
  const scrollRef = useRef(null);

  const scrollBrands = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="py-10 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
      <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-center text-[#333A45] mb-2">
        Shop By Brand
      </h2>
      <p className="text-center text-[#3B3F40] text-sm sm:text-base font-normal">
        Choose your perfect brand from our stylish colors and patterns.
      </p>

      <div className="flex items-center justify-between gap-4 mt-[40px]">
        {/* Scrollable Brands Row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-[40px] sm:space-x-[50px] md:space-x-[60px] scroll-smooth px-1"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {brands.map((brand, index) => (
            <div key={index} className="min-w-max flex-shrink-0">
              <Image
                src={brand.src}
                alt={brand.name}
                width={124}
                height={100}
                className="object-contain w-[100px] h-auto"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={scrollBrands}
          className="bg-blue-500 text-white rounded-full px-6 py-2 flex-shrink-0 hover:bg-blue-600 transition text-sm sm:text-base whitespace-nowrap"
        >
          Shop all <span className="ml-2">→</span>
        </button>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
