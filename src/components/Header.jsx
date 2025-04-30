"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { Inter, Amiri } from 'next/font/google';
import { BriefcaseBusiness, ChevronDown, Heart, Languages, PoundSterling, Search, Truck } from 'lucide-react';
const inter = Inter({ subsets: ['latin'] });
const navItems = [
    { title: 'Eyeglasses', menu: ['Men', 'Women', 'Kids'] },
    { title: 'Contact Lenses', menu: ['Daily', 'Monthly', 'Color Lenses'] },
    { title: 'Brands', menu: ['RayBan', 'Oakley', 'Vinova'] },
    { title: 'Eye Testing', menu: ['Book Test', 'Nearby Centers'] },
    { title: 'House of Vinova', menu: ['About Us', 'Our Story'] },
];
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
   
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        setActive(active === index ? null : index);
    };
    return (
        <header className={`${inter.className} sticky top-0 z-50`}>
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

                            <div className=" bg-[#F0F6FF]  rounded-full cursor-pointer border border-[#3882FF99] flex items-center ">
                                <button className='px-3 py-2 flex items-center space-x-2 cursor-pointer '>
                                    <Languages size={18} color='#3882FF' />
                                    <p className='text-[#3882FF]   text-sm font-normal  '>Ind - Eng</p>
                                </button>

                            </div>

                        </div>
                    </div>
                </div>



            )}

            <div className={`bg-[#FFFFFF05] shadow-md transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 backdrop-blur-6xl' : ''}`}>

                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <Image
                            src="/logo.png"
                            width={140}
                            height={22}
                            alt="logo"
                            className='text-[#1E1E1E]'
                        />
                        <div className='flex items-center'>
                            <nav className="flex gap-6 relative z-50">
                                {navItems.map((item, index) => (
                                    <div key={item.title} className="relative">
                                        <button
                                            className="flex items-center gap-1 text-sm font-medium focus:outline-none"
                                            style={{ color: '#FFFFFF' }}
                                            onClick={() => handleToggle(index)}
                                        >
                                            {item.title}
                                            <ChevronDown width={18} height={18} />
                                        </button>

                                        {active === index && (
                                            <div className="absolute top-full mt-2 bg-[#FFFFFF05] shadow-md rounded-md w-40 py-2">
                                                {item.menu.map((menuItem) => (
                                                    <div
                                                        key={menuItem}
                                                        className="px-4 py-2 text-sm text-[#FFFFFF] hover:bg-gray-500 hover:text-black whitespace-nowrap"
                                                    >
                                                        {menuItem}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            <div className="flex items-center space-x-4 ml-8 ">
                                <button className="bg-[#3882FF] text-[#FFFFFF]  px-4 py-2 rounded-[12px] text-sm hidden sm:block cursor-pointer">
                                    3D TRY ON
                                </button>

                            </div>
                            <div className="bg-[#333D49] rounded-full cursor-pointer flex items-center ml-4">
                                <button className="px-3 py-2 flex items-center space-x-2 cursor-pointer">
                                    <Search size={18} color="#FFFFFF" />
                                    <Heart size={18} color="#FFFFFF" />
                                    <BriefcaseBusiness size={18} color="#FFFFFF" />

                                    <div className="w-px h-4 bg-white " />

                                    <p className="text-[#FFFFFF] text-sm font-medium">Sign In</p>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}