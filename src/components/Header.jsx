/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/utils/AuthContext";
import { FaHome } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth(); // Get the user from the AuthContext provider

  return (
    <div className="header flex justify-between items-center p-1 bg-inherit shadow-sm">
      <div className="px-2">
        <Link id="header-logo" to="/">
          <img src="/edas.png" alt="" className="w-8 h-fit object-cover mr-2" />
        </Link>
      </div>

      <div className="links--wrapper ">
        {user ? (
          <div className="flex justify-evenly ">
            <Link to="/" className="header--link px-2">
              <FaHome color="green" />
            </Link>
            <Link to="/profile" className="header--link px-2">
              <MdSpaceDashboard color="black" />
            </Link>
            <button onClick={logoutUser} className="btn px-2">
              <IoLogOut color="red" />
            </button>
          </div>
        ) : (
          <>
            <Link
              className="flex gap-1 justify-evenly items-center header--link px-2 font-bold text-green-950"
              id="header-login"
              to="/login"
            >
              Login
              <IoIosLogIn className="text-white font-extrabold relative top-0.5 text-2xl" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
