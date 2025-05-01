'use client';

import { Inter, Amiri } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });
const ameri = Amiri({ weight: '400', subsets: ['latin'] });

export default function Banner() {
    return (
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[736px]">
            <Image
                src="/banner.jpg"
                alt="Eyewear collection"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-8 md:px-16 py-12 md:py-24">
                <div className={`${ameri.className} text-white text-3xl sm:text-4xl md:text-6xl font-bold`}>
                    <p>Find your perfect</p>
                    <p>eyewear look</p>
                </div>
                <div className={`${inter.className} text-white text-sm sm:text-sm md:text-sm font-normal max-w-md md:max-w-xl self-end mt-6 lg:pl-26 2xl:text-base`}>
                    <p>
                        We’re all about finding you that perfect pair. Experience the
                        difference a perfect pair makes. Let’s find yours together.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button className="bg-[#3882FF] text-white py-3 px-6 rounded-full text-sm font-medium">
                        Explore Frames
                    </button>
                    <button className="bg-[#FFFFFF05] text-white py-3 px-6 rounded-full border border-[#B7B9BCB2] text-sm font-medium">
                        Home Try-On
                    </button>
                </div>
            </div>
        </div>
    );
}
