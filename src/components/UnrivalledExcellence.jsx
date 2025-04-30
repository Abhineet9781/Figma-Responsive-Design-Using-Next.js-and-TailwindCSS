import Image from "next/image";

export default function UnrivalledExcellence() {
    return (
        <div className="bg-white min-h-screen py-10 px-4 sm:px-10">
            <h2 className="text-[38px] font-bold text-center mb-2 text-[#333A45]">Unrivalled Excellence</h2>
            <p className="text-center text-[#3B3F40] text-base font-normal pb-10">
                Select one card to find the perfect style or lenses, according to your needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-32 gap-6">
                <div className="md:col-span-19 bg-[#EAF3FD] rounded-2xl  flex flex-col justify-between" style={{ height: '598px' }}>
                    <div className="mx-8 pt-8">
                        <h3 className="text-[45px] text-[#333A45] mb-2 font-bold">Prescription Upload</h3>
                        <p className="text-[#3B3F40B2] mb-4 text-[20px] font-normal max-w-[544px]">
                            Provide Your Prescription to Ensure You Receive the Perfect Lenses for Clear and Comfortable Vision
                        </p>
                        <button className="bg-[#3882FF] text-[#FFFFFF] px-4 py-2 rounded-full text-[15px]">
                            Prescription Upload
                        </button>
                    </div>
                    <div className="mt-auto h-[60%] flex items-end justify-end">
                        <Image
                            src="/prescription.png"
                            alt="Prescription"
                            width={602}
                            height={402}
                            className="rounded-lg object-contain object-bottom transform scale-x-[-1]"
                        />
                    </div>
                </div>



                <div className="md:col-span-13 bg-[#FFE47E] rounded-2xl flex flex-col justify-between" style={{ height: '598px' }}>
                    <div className="mx-8">
                        <h3 className="text-[45px] text-[#333A45] mb-2 font-bold">
                            Optometrist Appointment Booking!
                        </h3>
                        <p className="text-[#3B3F40B2] mb-4 text-[20px] font-normal max-w-[338px]">
                            Schedule an Optometrist Appointment for a Personalized Eye Checkup!
                        </p>
                        <button className="bg-[#3882FF] text-[#FFFFFF] px-4 py-2 rounded-full text-[15px]">
                            Book Appointment
                        </button>
                    </div>
                    <div className=" h-[50%] flex items-end mb-12 pl-16">
                        <Image
                            src="/appointment.png"
                            alt="appointment"
                            width={676}
                            height={450}
                            className="rounded-lg w-full h-full object-contain object-bottom transform scale-x-[-1]"
                        />
                    </div>
                </div>



                <div className="md:col-span-13 bg-[#EAEAEA] rounded-2xl p-6 flex flex-col justify-between" style={{ height: '598px' }}>
                    <div>
                        <h3 className="text-[45px]  text-[#333A45] mb-2 font-bold">
                            Purchasing with insurance, made easy.
                        </h3>
                        <p className="text-[#3B3F40B2] mb-4 text-[20px] font-normal max-w-[338px]">
                            This is our promise to you. We accept most vision insurance plans, both in and out-of-network.
                        </p>
                        <button className="bg-[#3882FF]  text-[#FFFFFF] px-4 py-2 rounded-full text-[15px]">
                            Shop now
                        </button>
                    </div>
                    <div className="mt-auto h-[60%] flex items-end">
                        <Image
                            src="/insurance-glasses.jpg"
                            alt="Insurance"
                            width={524}
                            height={200}
                            className="rounded-lg w-full h-[200px] object-cover object-bottom"
                        />
                    </div>
                </div>

                <div className="md:col-span-19 bg-[#CFEFC9] rounded-2xl p-6 flex flex-col justify-between" style={{ height: '598px' }}>
                    <div>
                        <h3 className="text-[45px]  text-[#333A45] mb-2 font-bold">Prescription Upload</h3>
                        <p className="text-[#3B3F40B2] mb-4 text-[20px] font-normal max-w-[338px]">
                            Provide Your Prescription to Ensure You Receive the Perfect Lenses for Clear and Comfortable Vision
                        </p>
                        <button className="bg-[#3882FF]  text-[#FFFFFF] px-4 py-2 rounded-full text-[15px]">
                            Prescription Upload
                        </button>
                    </div>
                    <div className="mt-auto h-[60%] flex items-end justify-end">
                        <Image
                            src="/eye-machine.png"
                            alt="Prescription"
                            width={602}
                            height={402}
                            className="rounded-lg object-contain object-bottom"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
