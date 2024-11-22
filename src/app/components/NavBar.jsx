import Image from "next/image";
import logo from "@/app/images/logo/hamstrongLogo2.jpeg";
import NavBarMenu from "./NavBarMenu";
import Link from "next/link";
import DrawerComponent from "./DrawerComponent";
import DrawerComponentTwo from "./DrawerComponentTwo";
const NavBar = () => {
  return (
    <>
      <div className="w-full bg-white p-2 flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={logo} height={30} width={30} alt="logo" />
            <span className="text-sm md:text-md">Hamstrong Realty Limited</span>
          </div>
        </Link>
        <div className="hidden sm:block -ml-40">
          <NavBarMenu />
        </div>
        <div className="mr-3 flex items-center">
          <DrawerComponent />
          <DrawerComponentTwo />
        </div>
      </div>
    </>
  );
};

export default NavBar;
