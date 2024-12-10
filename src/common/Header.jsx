import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import { NAVBAR_LIST } from "./../utils/Helper";
// import uprightImg from './../assets/image/svg/upright-arrow.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <nav className="lg:py-5 pt-4 flex justify-between items-center px-4 relative z-50">
      <a href="">
        <img
          className="max-w-[105px] w-full max-h-10"
          src="./assets/image/webp/page-logo.webp"
          alt="page-logo"
        />
      </a>
      <div className="hidden lg:flex gap-6 items-center">
        {NAVBAR_LIST.map((obj, i) => (
          <a
            className="text-white opacity-[90%] hover:underline underline-offset-2 hover:scale-[1.04] duration-300 ease-linear text-base font-normal"
            href={obj.link}
            key={i}
          >
            {obj.tittle}
          </a>
        ))}
      </div>
      <div className="hidden lg:block">
        <CustomButton btnTittle={"Get Started"} img={""} />
      </div>
      <button
        className="lg:hidden flex items-center justify-center w-10 h-10 text-4xl text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen w-full bg-blue text-white p-6 flex flex-col items-center justify-center shadow-lg transition-transform ease-linear duration-300 transform z-50">
          <button
            className="self-end absolute top-4 text-4xl"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          {NAVBAR_LIST.map((obj, i) => (
            <a
              className="text-white hover:underline underline-offset-2 hover:scale-[1.04] duration-300 ease-linear opacity-[90%] text-base font-normal mb-4"
              href={obj.link}
              key={i}
              onClick={() => setIsOpen(false)}
            >
              {obj.tittle}
            </a>
          ))}
          <div>
            <CustomButton btnTittle={"Get Started"} />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
