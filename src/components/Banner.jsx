import { Inter, Amiri } from 'next/font/google';
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] });
const ameri = Amiri({ weight: '400', subsets: ['latin'] });

export default function Banner() {
    return (
        <>
            <div className="relative h-[736px] w-full">
                <Image
                    src="/banner.jpg"
                    alt="Eyewear collection"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 h-full">
                    <div className={`${ameri.className} absolute text-white text-[68px] leading-[68px] font-bold left-[117px] top-11`}>
                        <p>Find your perfect</p>
                        <p>eyewear look</p>
                    </div>
                    <div className={`${inter.className} absolute text-white text-base leading-[23px] font-normal w-[452px] right-[96px] top-[280px]`}>
                        <p>We’re all about finding you that perfect pair, Experience the
                            difference a perfect pair makes, Let’s find yours together.</p>
                    </div>
                    <div className={`${inter.className} absolute text-white text-[15px] font-medium space-x-[14px] leading-[23px] left-[117px] bottom-[100px]`}>
                        <button className="bg-[#3882FF] py-4 px-6 rounded-full cursor-pointer">Explore Frames</button>
                        <button className="bg-[#FFFFFF05] py-4 px-6 rounded-full border border-[#B7B9BCB2] cursor-pointer">Home Try-On</button>
                    </div>
                </div>
            </div>

        </>
    );
}