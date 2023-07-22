import { NavLink, Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { LiaHomeSolid } from "react-icons/lia";
import { PiMessengerLogoLight } from "react-icons/pi";
import { BsPlusSquare, BsHeart } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
  const [setting, setSetting] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-20 py-3 header-nav">
        <Link>
          <h1 className="judul-navbar">TiRegram</h1>
        </Link>
        <form className="flex items-center gap-1 border-2 border-gray-600 rounded-md px-2">
          <BiSearch />
          <input
            type="search"
            placeholder="Search..."
            className="outline-none h-7"
          />
        </form>
        <ul className="flex items-center gap-10 ul-nav">
          <li>
            <NavLink to={"/home"} className="a-home">
              <LiaHomeSolid />
            </NavLink>
          </li>
          <li>
            <NavLink className="a-chat">
              <PiMessengerLogoLight />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <BsPlusSquare />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <BsHeart />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <GrUserSettings className="setting" />
            </NavLink>
          </li>
        </ul>
      </header>
      {setting && (
        <div className="div-setting">
          <ul>
            <li>
              <NavLink to={"/profil"} className="flex items-center gap-1 py-2 hover:bg-gray-300 px-2.5">
                <CgProfile /> Profil
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className="flex items-center gap-1 py-2 hover:bg-gray-300 px-2.5">
                <FiLogOut /> Logout
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      {document.addEventListener("click", (e) => {
        if (e.target == document.querySelector(".setting")) {
          setSetting(!setting);
        } else {
          setSetting(false);
        }
      })}
    </>
  );
}
