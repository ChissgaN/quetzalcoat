import React, { useState, useEffect, useRef } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { GiPaintRoller } from "react-icons/gi";
import { FaSprayCan } from "react-icons/fa";
import { MdPalette } from "react-icons/md";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);
  const menuRef = useRef(null);

  const menuItems = ["Inspiración", "Productos"];

  const toggleOpciones = () => {
    setMostrarOpciones(!mostrarOpciones);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMostrarOpciones(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="fixed w-full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link to="/">
          <NavbarBrand>
            <img src={Logo} alt="logo" className="w-16 h-16 mt-1 mr-4" />
            <p className="font-bold text-inherit mb-0 hidden sm:block">
              Quetzalcoat
            </p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link to="#" className="font-semibold text-[#092469]">
            Inspiración
          </Link>
        </NavbarItem>
        <NavbarItem className="relative" ref={menuRef}>
          <Link to="#" className="font-semibold text-[#092469]" onClick={toggleOpciones}>
            Productos
          </Link>
          {mostrarOpciones && (
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-md px-6 py-2 rounded-md w-[300px] border-2 border-[#18dfc3] hover:border-[#8bc500] z-50">
              <Link to="/productosArquitectonicos" className="flex justify-between items-center mb-3 hover:bg-[#8bc500] text-black rounded-lg cursor-pointer p-2">
                <p className="cursor-pointer">Soluciones Arquitectónicas</p>
                <GiPaintRoller size={20} className="text-[#092469]" />
              </Link>
              <Link to="/productosIndustriales" className="flex justify-between items-center mb-3 hover:bg-[#8bc500] text-black rounded-lg cursor-pointer p-2">
                <p className="cursor-pointer">Soluciones Industriales</p>
                <FaSprayCan size={20} className="text-[#092469]" />
              </Link>
              <Link to="/Especialidades" className="flex justify-between items-center mb-3 hover:bg-[#8bc500] text-black rounded-lg cursor-pointer p-2">
                <p className="cursor-pointer">Especialidades</p>
                <MdPalette size={20} className="text-[#092469]" />
              </Link>
            </div>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as="a"
            href="https://wa.me/50236885254"
            color="primary"
            variant="flat"
            className="font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Asesoría!
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {item === "Productos" ? (
              <Link
                color="foreground"
                className="w-full"
                to="#"
                size="lg"
                onClick={toggleOpciones}
              >
                {item}
              </Link>
            ) : (
              <Link
                color={index === 1 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
                className="w-full"
                to="#"
                size="lg"
              >
                {item}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      {mostrarOpciones && (
        <div className="sm:hidden fixed top-40 left-1/2 transform -translate-x-1/2 bg-white shadow-md px-6 py-2 rounded-md w-[300px] border-2 border-[#18dfc3] hover:border-[#8bc500] z-50" ref={menuRef}>
          <Link to="/productosArquitectonicos" className="flex justify-between items-center mb-3 hover:bg-[#8bc500] text-black rounded-lg cursor-pointer p-2">
            <p className="cursor-pointer">Soluciones Arquitectónicas</p>
            <GiPaintRoller size={20} className="text-[#092469]" />
          </Link>
          <Link to="/productosIndustriales" className="flex justify-between items-center mb-3 hover:bg-[#8bc500] text-black rounded-lg cursor-pointer p-2">
            <p className="cursor-pointer">Soluciones Industriales</p>
            <FaSprayCan size={20} className="text-[#092469]" />
          </Link>
          <Link to="/Especialidades" className="flex justify-between items-center mb-3 hover:bg-[#8bc500] text-black rounded-lg cursor-pointer p-2">
            <p className="cursor-pointer">Especialidades</p>
            <MdPalette size={20} className="text-[#092469]" />
          </Link>
        </div>
      )}
    </Navbar>
  );
}
