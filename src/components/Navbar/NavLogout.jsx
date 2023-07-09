import Button from "@mui/joy/Button";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store";

function NavLogout() {
  const dispatch = useDispatch();
  return (
    <Button
      variant="soft"
      size="sm"
      color="danger"
      className="translate-x-3 hover:bg-yellow-400"
      onClick={() => dispatch(loginActions.changeLogin())}
    >
      Logout
    </Button>
  );
}

export default NavLogout;
