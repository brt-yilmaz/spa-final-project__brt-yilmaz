import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import logo from "../../../public/logo.svg";
import NavLogin from "./NavLogin";
import NavUser from "./NavUser";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";

function Navbar({ onHandleSearchFocused }) {
  const isLogin = useSelector((state) => state.login.isLogin);

  return (
    <ul className="flex items-center  gap-4 max-w-[1200px]  mx-auto animate-fadeIn">
      <li className="min-w-[3rem]">
        <img src={logo} className="text-2xl text-gray-400" />
      </li>
      <li className="ml-auto">
        <BsSearch
          onClick={onHandleSearchFocused}
          className=" cursor-pointer text-slate-400 text-2xl"
        ></BsSearch>
      </li>
      {!isLogin && <NavLogin />}
      {isLogin && <NavUser></NavUser>}
    </ul>
  );
}

export default Navbar;
