// Full Header.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  BriefcaseBusiness,
  ChevronDown,
  Heart,
  Languages,
  PoundSterling,
  Search,
  Truck,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { title: "Eyeglasses", menu: ["Men", "Women", "Kids"] },
  { title: "Contact Lenses", menu: ["Daily", "Monthly", "Color Lenses"] },
  { title: "Brands", menu: ["RayBan", "Oakley", "Vinova"] },
  { title: "Eye Testing", menu: ["Book Test", "Nearby Centers"] },
  { title: "House of Vinova", menu: ["About Us", "Our Story"] },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      {!isScrolled && (
        <div className="bg-[#F0F6FF] text-sm p-[6px]">
          <div className="w-full max-w-[1536px] px-4 2xl:px-[77px] mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Image
                  src="/headphone.png"
                  width={15}
                  height={16}
                  alt="help"
                />
                <p className="text-[#1E1E1E] text-xs font-normal">Need Help?</p>
              </div>
              <p className="text-[#3882FF] text-xs font-normal cursor-pointer">
                Call 1800-266-0123
              </p>
            </div>

            <div className="hidden sm:flex items-center space-x-[10px]">
              <div className="text-[#1E1E1ECC] text-xs">
                Shop Our Holiday Collection. Up to 50% Off on Eyewear!
              </div>
              <button className="bg-[#3882FF] rounded-full px-3 py-2">
                <p className="text-white text-[10px] font-medium">Grab Now</p>
              </button>
            </div>

            <div className="hidden md:flex space-x-4">
              <button className="bg-[#F0F6FF] rounded-full flex items-center px-2 py-1 space-x-1">
                <Truck size={18} color="#1E1E1E" />
                <p className="text-[#1E1E1E] text-xs font-normal">Track Order</p>
              </button>
              <div className="bg-[#1E1E1E] rounded-full flex items-center justify-center w-[25px] h-[25px]">
                <PoundSterling size={18} color="#FFFFFF" />
              </div>
              <div className="bg-[#F0F6FF] border border-[#3882FF99] rounded-full">
                <button className="px-3 py-2 flex items-center space-x-2">
                  <Languages size={18} color="#3882FF" />
                  <p className="text-[#3882FF] text-xs font-normal">Ind - Eng</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 backdrop-blur-2xl"
            : "bg-[#FFFFFF05] shadow-md"
        } w-full`}
      >
        <div className="w-full max-w-[1536px] px-4 2xl:pl-[77px]  mx-auto">
          <div className="flex items-center justify-between py-3 lg:gap-10 xl:gap-14 2xl:gap-24">
            {/* Logo */}
            <div className="flex items-center lg:flex-none">
              <Image
                src="/logo.png"
                width={140}
                height={22}
                alt="logo"
                className="text-[#1E1E1E] ml-[77px]"
              />
            </div>

            {/* Navigation Center */}
            <nav className="hidden lg:flex gap-6 flex-grow justify-center">
              {navItems.map((item, index) => (
                <div key={item.title} className="relative">
                  <button
                    className="flex items-center gap-1 text-sm xl:text-base 2xl:text-lg font-medium text-white"
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
                          className="px-4 py-2 text-sm text-white hover:bg-gray-500 hover:text-black whitespace-nowrap"
                        >
                          {menuItem}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center space-x-4 flex-none lg:pr-[77px]">
              <button className="bg-[#3882FF] text-white px-4 py-2 rounded-[12px] text-sm 2xl:text-base">
                3D TRY ON
              </button>
              <div className="bg-[#333D49] rounded-full flex items-center">
                <button className="px-3 py-2 flex items-center space-x-2">
                  <Search size={18} color="#FFFFFF" />
                  <Heart size={18} color="#FFFFFF" />
                  <BriefcaseBusiness size={18} color="#FFFFFF" />
                  <div className="w-px h-4 bg-white" />
                  <p className="text-white text-sm 2xl:text-base font-medium">Sign In</p>
                </button>
              </div>
            </div>

            {/* Hamburger for small screens */}
            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-2 space-y-2 pb-4">
              {navItems.map((item, index) => (
                <div key={item.title} className="border-b border-gray-600">
                  <button
                    onClick={() => handleToggle(index)}
                    className="flex justify-between w-full py-2 px-2 text-white"
                  >
                    <span>{item.title}</span>
                    <ChevronDown size={18} />
                  </button>
                  {active === index && (
                    <div className="pl-4 pb-2">
                      {item.menu.map((menuItem) => (
                        <div
                          key={menuItem}
                          className="py-1 text-white text-sm hover:underline"
                        >
                          {menuItem}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center space-x-4 mt-4">
                <button className="bg-[#3882FF] text-white px-4 py-2 rounded-[12px] text-xs">
                  TRY
                </button>
                <div className="bg-[#333D49] rounded-full px-3 py-2 flex items-center space-x-2">
                  <Search size={18} color="#FFFFFF" />
                  <Heart size={18} color="#FFFFFF" />
                  <BriefcaseBusiness size={18} color="#FFFFFF" />
                  <div className="w-px h-4 bg-white" />
                  <p className="text-white text-sm font-medium">Sign In</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
