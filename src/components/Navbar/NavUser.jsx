import NavLogout from "./NavLogout";
import Avatar from "./Avatar";
import { useState, useEffect } from "react";

function NavUser() {
  const [showLogout, setShowLogout] = useState(false);
  function handleShowLogout() {
    setShowLogout(!showLogout);
  }

  useEffect(() => {
    let timeout;

    if (showLogout) {
      timeout = setTimeout(() => {
        setShowLogout(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showLogout]);

  return (
    <div className="flex justify-end gap-4">
      {showLogout && <NavLogout></NavLogout>}
      <Avatar onClick={handleShowLogout}></Avatar>
    </div>
  );
}

export default NavUser;
