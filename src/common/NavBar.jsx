import React, { useState } from "react";
import CustomButton from "./CustomButton";
import pageLogo from './../assets/image/png/page-logo.png'
import { NAVBAR_LIST } from '../utils/Helper'



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="py-5 flex justify-between items-center px-4 relative z-50">
            <img className="max-w-[105px] w-full max-h-10" src={pageLogo} alt="page-logo" />
            <div className="hidden lg:flex gap-6 items-center">
                {NAVBAR_LIST.map((obj, i) => (
                    <a className="text-white hover:underline underline-offset-2 hover:text-orange-600 duration-300 ease-linear text-base font-normal" href="#" key={i}>
                        {obj.list}
                    </a>
                ))}
            </div>
            <div className="hidden lg:block">
                <CustomButton btnTittle={"Get Started"} />
            </div>
            <button
                className="lg:hidden flex items-center justify-center w-10 h-10 text-4xl text-white rounded"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
            </button>
            {isOpen && (
                <div className="absolute top-0 right-0 h-screen w-full bg-gray-900 text-white p-6 flex flex-col items-center justify-center shadow-lg transition-transform ease-linear duration-300 transform">
                    <button
                        className="self-end mb-4 absolute top-4 text-xl"
                        onClick={() => setIsOpen(false)}>✖
                    </button>
                    {NAVBAR_LIST.map((obj, i) => (
                        <a
                            className="text-white text-base font-normal mb-4"
                            href="#"
                            key={i}
                            onClick={() => setIsOpen(false)}>
                            {obj.list}
                        </a>
                    ))}
                    <div className="">
                        <CustomButton btnTittle={"Get Started"} />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
