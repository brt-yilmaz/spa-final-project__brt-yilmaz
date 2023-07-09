import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store";

function NavLogin() {
  const dispatch = useDispatch();
  return (
    <li className="">
      <button
        className=" flex max-h-10 items-center gap-2 rounded-md border-slate-800  px-3 py-2  text-slate-400 shadow-sm focus:border-slate-800 focus:outline-none focus:ring-1 focus:ring-slate-700 sm:text-sm"
        onClick={() => dispatch(loginActions.changeLogin())}
      >
        <p>Login</p>
        <FaArrowRight />
      </button>
    </li>
  );
}

export default NavLogin;
