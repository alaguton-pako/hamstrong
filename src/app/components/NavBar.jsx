import Image from "next/image";
import logo from "@/app/images/logo/hamstrongLogo2.jpeg";
import NavBarMenu from "./NavBarMenu";
import Link from "next/link";
import DrawerComponent from "./DrawerComponent";
const NavBar = () => {
  return (
    <>
      <div className="w-full bg-white p-2 flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={logo} height={40} width={40} alt="logo" />
            <span>Hamstrong Realty Limited</span>
          </div>
        </Link>
        <div className="hidden sm:block -ml-40">
          <NavBarMenu />
        </div>
        <div className="mr-3">
          <DrawerComponent />
        </div>
      </div>
    </>
  );
};

export default NavBar;
