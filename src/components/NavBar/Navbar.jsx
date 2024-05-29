import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Logo from "../../assets/logo.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Inspiración",
    "Acerca de nosotros",
    "Productos",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="fixed w-full ">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={Logo} alt="logo" className="w-16 h-16 mt-1 mr-4"/>
          <p className="font-bold text-inherit mb-0 hidden sm:block">Quetzalcoat</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link  href="#" className="font-semibold">
            Inspiración
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="font-semibold">
            Productos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">

        <NavbarItem>
        <Button
        as="a"
        href="https://wa.me/+50240378644"
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
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
