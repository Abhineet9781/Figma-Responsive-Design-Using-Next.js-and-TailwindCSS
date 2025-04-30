"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { Languages, PoundSterling, Truck } from 'lucide-react';


export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50">
            {!isScrolled && (
                <div className="bg-[#F0F6FF] text-white text-sm p-[6px] ">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className='flex items-center space-x-3'>
                            <div className='flex items-center space-x-1'>
                                <Image
                                    src="/headphone.png"
                                    width={15}
                                    height={16}
                                    alt="Picture of the author"
                                    className='text-[#1E1E1E]'
                                />
                                <p className='text-[#1E1E1E] text-xs font-normal'>Need Help? </p>
                            </div>

                            <p className='text-[#3882FF] text-xs font-normal cursor-pointer'>Call 1800-266-0123</p>
                        </div>

                        <div className='flex items-center space-x-[10px]'>
                            <div className=" text-[#1E1E1ECC] text-center p-1 text-xs">
                                Shop Our Holiday Collection. Up to 50% Off on Eyewear!
                            </div>
                            <button className=" bg-[#3882FF]  rounded-full cursor-pointer ">
                                <p className='text-[#FFFFFF] text-[10px] font-medium px-3 py-2 cursor-pointer'>Grab Now</p>
                            </button>
                        </div>

                        <div className="hidden md:flex space-x-4">
                            <div className='flex items-center space-x-4'>
                                <button className=" bg-[#F0F6FF]  rounded-full cursor-pointer  flex items-center ">
                                    <div className=' flex items-center space-x-1'>
                                        <Truck size={18} color='#1E1E1E' />

                                        <p className='text-[#1E1E1E]   text-xs font-normal cursor-pointer '>Track Order</p>
                                    </div>

                                </button>
                                <div className="bg-[#1E1E1E] rounded-full flex items-center justify-center w-[25px] h-[25px]">
  <PoundSterling size={18} color="#FFFFFF" />
</div>


                            </div>

                            <button className=" bg-[#F0F6FF]  rounded-full cursor-pointer border border-[#3882FF99] flex items-center ">
                                <div className='px-3 py-2 flex items-center space-x-2'>
                                    <Languages size={18} color='#3882FF' />
                                    <p className='text-[#3882FF]   text-sm font-normal cursor-pointer '>Ind - Eng</p>
                                </div>

                            </button>

                        </div>
                    </div>
                </div>



            )}

            <div className={`bg-white shadow-md transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0' : ''}`}>
                <div className="container mx-auto p-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold">VINOVA</div>

                        <nav className="hidden md:flex space-x-6">
                            <a href="#" className="hover:text-blue-600">Eyeglasses</a>
                            <a href="#" className="hover:text-blue-600">Contact Lenses</a>
                            <a href="#" className="hover:text-blue-600">Brands</a>
                            <a href="#" className="hover:text-blue-600">Eye Testing</a>
                            <a href="#" className="hover:text-blue-600">House of Vinova</a>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button className="bg-black text-white px-4 py-2 rounded-md text-sm hidden sm:block">
                                30 TRY ON
                            </button>
                            <button className="hover:text-blue-600">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}