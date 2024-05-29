import Image from "next/image";
import Link from "next/link";

import SearchFilter from "./SearchFilters";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500] mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png"
            alt="DjangoBnb logo"
            width={180}
            height={38}
            />
          </Link>

          <div className="flex space-x-6">
            <SearchFilter/>
          </div>

          <div className="flex item-center space-x-6">
            <AddPropertyButton /> 

            <UserNav/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;