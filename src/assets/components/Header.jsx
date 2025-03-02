import {
  FaHome,
  FaPlus,
  FaSearch,
  FaStar,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { PiTelevisionBold } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";
import Logo from "../Images/disney-logo.png";
import HeaderItems from "./HeaderItems.jsx";
import { useState } from "react";

export default function Header() {
  const menu = [
    { name: "HOME", icon: FaHome },
    { name: "SEARCH", icon: FaSearch },
    { name: "PLUS", icon: FaPlus },
    { name: "FAVORIES", icon: FaStar },
    { name: "MOVIES", icon: PiTelevisionBold },
    { name: "SERIES", icon: RiMovie2Line },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 container mx-auto relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={Logo}
          className="max-w-[80px] object-cover"
          alt="Logo disney plus"
        />
      </div>

      {/* Menu Desktop */}
      <nav className="hidden md:flex items-center gap-5">
        {menu.map((item) => (
          <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
        ))}
      </nav>

      {/* Menu Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 shadow-lg md:hidden">
          {menu.map((item) => (
            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
      )}
    </header>
  );
}
