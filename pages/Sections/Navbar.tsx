"use client";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" py-3 sticky top-0 z-10">
      <div className="absolute inset-0 rounded-xl backdrop-blur -z-10 md:hidden"></div>
      <div className="px-4">
        <div className="flex rounded-xl justify-between items-center md:border border-white/15 md:p-2.5  lg:p-3 max-w-5xl lg:max-w-5xl mx-auto relative">
          <div className="absolute inset-0 rounded-xl backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="flex gap-1 items-center">
              <svg
                className="lg:w-6 lg:h-6 w-10 h-10 text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m16.1325 4.33451-2.5233-1.40664c-.4721-.26314-1.0678-.1036-1.3452.36025-.5301.88653-.995 1.16623-1.5715 1.51306l-.0109.00653c-.68512.41222-1.48439.89668-2.26786 2.20693-.78556 1.31373-.82234 2.23251-.84978 3.01976l-.00064.0183c-.02242.6445-.04051 1.1644-.56688 2.0447-.53011.8866-.99504 1.1663-1.57156 1.5131l-.01086.0065c-.68515.4122-1.48441.8967-2.26789 2.207-.13881.2321-.17767.5106-.10769.7719.06998.2612.24281.483.47907.6147l2.62175 1.4615c.14127-.4135.30621-.7369.42823-.941.78347-1.3102 1.58276-1.7947 2.26791-2.2069l.01085-.0066c.57652-.3468 1.04146-.6265 1.57155-1.513.5264-.8803.5445-1.4003.5669-2.0448l.0006-.0183c.0275-.7872.0643-1.706.8498-3.01973.7835-1.31024 1.5828-1.79471 2.2679-2.20692l.0109-.00653c.5738-.34523 1.0371-.62397 1.5642-1.50087.1235-.22119.2956-.5451.4544-.87294ZM7.93136 19.6711l2.42894 1.354c.4721.2632 1.0678.1037 1.3452-.3602.5301-.8865.995-1.1662 1.5715-1.513l.0109-.0066c.6852-.4122 1.4844-.8967 2.2679-2.2069.7855-1.3137.8223-2.2325.8498-3.0198l.0006-.0183c.0224-.6444.0405-1.1644.5669-2.0447.5301-.8865.995-1.1662 1.5715-1.5131l.0109-.0065c.6852-.41221 1.4844-.89667 2.2679-2.20692.1388-.23214.1777-.51061.1077-.77188-.07-.26128-.2428-.48306-.479-.61477L17.882 5.30974c-.1678.34035-.34.6625-.4657.88717-.0047.00832-.0095.01658-.0143.02476-.7835 1.31025-1.5828 1.79471-2.2679 2.20693l-.0109.00653c-.5765.34683-1.0415.62653-1.5716 1.51306-.5263.88031-.5444 1.40031-.5668 2.04471l-.0007.0183c-.0274.7873-.0642 1.7061-.8498 3.0198-.7834 1.3102-1.5827 1.7947-2.26785 2.2069l-.01085.0065c-.57651.3469-1.04144.6266-1.57154 1.5131-.10167.17-.25746.4945-.3527.9136Z"
                />
              </svg>

              <h1 className="text-xl hidden md:block text-center  justify-center items-center text-black font-medium ">
                Grewx
              </h1>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block" id="navbar">
            <nav className="flex gap-8 ">
              <a href="#home" className="text-black text-medium text-lg">
                Home
              </a>

              <a href="#services" className="text-black text-medium text-lg">
                Services
              </a>

              <a href="#pricing" className="text-black text-medium text-lg">
                Pricing
              </a>
              <a href="#contact" className="text-black text-medium text-lg">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex gap-4 items-center">
            <a
              href="#"
              className="px-7 py-1 text-black border border-black transition-all ease-in hover:bg-black hover:text-white hover:border-white rounded-full hidden md:block"
            >
                Get Started
            </a>
            <a
              className="bg-black p-1 rounded-full justify-center"
              href="https://github.com/SaadAnna"
              target="_blank"
            >
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
                />
              </svg>
            </a>
            <button
              onClick={toggleMenu}
              className="md:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 6H6m12 4H6m12 4H6m12 4H6"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out max-w-2xl mx-auto ${
            isMenuOpen ? "max-h-64 opacity-100 mt-4 " : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black backdrop-blur-lg py-3 px-4 rounded-xl border border-white/15 h-fit">
            <nav className="flex flex-col gap-2">
              <a
                href="#home"
                className="text-white transition py-2 px-4 hover:bg-white/10 rounded-lg"
              >
                Home
              </a>

              <a
                href="#services"
                className="text-white transition py-2 px-4 hover:bg-white/10 rounded-lg"
              >
                Services
              </a>

              <a
                href="#pricing"
                className="text-white transition py-2 px-4 hover:bg-white/10 rounded-lg"
              >
                Pricing
              </a>

              <a
                href="#contact"
                className="text-white transition py-2 px-4 hover:bg-white/10 rounded-lg"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
