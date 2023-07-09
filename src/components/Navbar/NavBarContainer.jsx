import Navbar from "./Navbar";
import { useState } from "react";
import Search from "./Search";

function NavbarContainer() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  function handleSearchFocused() {
    setIsSearchFocused((prev) => !prev);
  }

  return (
    <nav className="  min-h-[7vh] w-full bg-gray-950 bg-opacity-70 px-6 py-2 shadow-md shadow-slate-500 backdrop-blur-md">
      {isSearchFocused ? (
        <Search onHandleSearchFocused={handleSearchFocused} />
      ) : (
        <Navbar onHandleSearchFocused={handleSearchFocused} />
      )}
    </nav>
  );
}

export default NavbarContainer;
