import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import NavLogin from "./NavLogin";
import NavUser from "./NavUser";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";

function Navbar({ onHandleSearchFocused }) {
  const isLogin = useSelector((state) => state.login.isLogin);

  return (
    <ul className="flex items-center justify-between gap-4">
      <li className="min-w-[5rem]">
        <LiveTvOutlinedIcon className="text-4xl text-gray-400" />
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
