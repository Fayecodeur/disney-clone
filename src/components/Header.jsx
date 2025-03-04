import { useState } from "react";
import { FaHome, FaPlus, FaSearch, FaStar } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { PiTelevisionFill } from "react-icons/pi";
import { TbMovie } from "react-icons/tb";
import Logo from "../assets/Images/disney-logo.png";

import HeaderItems from "../components/HeaderItems";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menu = [
    { name: "HOME", icon: FaHome },
    { name: "SEARCH", icon: FaSearch },
    { name: "PLUS", icon: FaPlus },
    { name: "FAVORITES", icon: FaStar },
    { name: "MOVIES", icon: TbMovie },
    { name: "SERIES", icon: PiTelevisionFill },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#060a12]/90 backdrop-blur-md shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <img className="max-w-[80px] object-contain" src={Logo} alt="Logo" />

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 items-center">
          {menu.map((item) => (
            <HeaderItems
              key={item.name}
              name={item.name}
              Icon={item.icon}
              className="hover:text-blue-500 transition duration-300"
            />
          ))}
        </nav>

        {/* Menu Mobile */}
        <div className="flex md:hidden gap-6 items-center">
          {menu.slice(0, 3).map((item) => (
            <HeaderItems key={item.name} name={""} Icon={item.icon} />
          ))}
        </div>

        {/* Bouton menu mobile */}
        <div className="md:hidden relative" onClick={handleMenu}>
          <HeaderItems name={""} Icon={HiDotsVertical} />
          {menuOpen && (
            <div className="absolute right-0 mt-3 w-40 bg-[#060a12] border border-gray-700 px-4 py-3 flex flex-col gap-2 rounded-md shadow-lg animate-fadeIn">
              {menu.slice(3).map((item) => (
                <HeaderItems
                  key={item.name}
                  name={item.name}
                  Icon={item.icon}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
