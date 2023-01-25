import Image from "next/image";
import LogoWellPict from "@/assets/images/logo.png";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <nav className="py-3 border-b-2 border-b-100">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image src={LogoWellPict} alt={"Logo_wellpict"} />
        </div>
        <ul className="flex md:gap-8">
          <NavbarLink to="#">Home</NavbarLink>
          <NavbarLink to="#">English</NavbarLink>
          <NavbarLink to="#">About Us</NavbarLink>
        </ul>
      </div>
    </nav>
  );
}
