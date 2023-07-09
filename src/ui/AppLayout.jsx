import { Outlet } from "react-router-dom";
import NavbarContainer from "../components/Navbar/NavBarContainer";

function AppLayout() {
  return (
    <div className={"bg-gray-900 h-screen"}>
      <NavbarContainer />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
