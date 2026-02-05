import React, { useState } from "react"
import { FaUser, FaEnvelope, FaBars, FaTimes } from "react-icons/fa"
import { IoEnterOutline } from "react-icons/io5"
import Login from "./Login"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const openLogin = () =>{
    navigate("/login")
  }  
 
  return (
    <header className="sticky top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 py-4 bg-black/10 text-white">
        <h1 className="text-lg font-bold">DC Daily Collage</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm items-center">
          <li className="p-2">
            <span className="flex gap-2 items-center">
              <FaUser /> Admission
            </span>
          </li>
          <li className="p-2">
            <span className="flex gap-2 items-center">
              <FaEnvelope /> Academics
            </span>
          </li>
          <li>
            <button onClick={openLogin} className="flex gap-2 items-center bg-red-500 p-2 rounded">
              <IoEnterOutline size={20} /> ERP Login
            </button>
          </li>
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 text-white px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-2 items-center">
              <FaUser /> Admission
            </li>
            <li className="flex gap-2 items-center">
              <FaEnvelope /> Academics
            </li>
            <li>
              <button className="flex gap-2 items-center bg-red-500 p-2 w-full rounded">
                <IoEnterOutline size={20} /> ERP Login
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
