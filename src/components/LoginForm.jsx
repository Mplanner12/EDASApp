/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/utils/AuthContext";

export const LoginForm = () => {
  const loginForm = useRef(null);
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = { email, password };
    loginUser(userInfo);
  };

  return (
    <div className="mx-auto">
      <h1 className="relative -top-10 text-center text-3xl font-bold text-green-950 underline">
        Login
      </h1>
      <div className="login-register-container text-gray-900">
        <form ref={loginForm} onSubmit={handleSubmit}>
          <div className="py-[1.5rem] text-center">
            {/* <label className="relative -top-1.5 font-serif font-semibold">
              Email
            </label> */}
            <input
              required
              type="email"
              name="email"
              placeholder="Enter email..."
              className="bg-green-900 border-b-2 border-t-0 border-black p-2 text-black h-[2.5rem] rounded-md w-full max-w-xs"
            />
          </div>

          <div className="pb-[1.5rem] text-center">
            {/* <label className="relative -top-1.5 font-serif font-semibold">
              Password
            </label> */}
            <input
              type="password"
              name="password"
              placeholder="Enter password..."
              className="bg-green-900 border-b-2 border-t-0 border-black p-2 text-black h-[2.5rem] rounded-md w-full max-w-xs"
            />
          </div>

          <div className="flex justify-center items-center gap-2">
            <button
              type="submit"
              value="Login"
              className="bg-green-900 w-[7rem] font-sans font-bold rounded-md text-gray-300 px-[1rem] py-[0.5rem]"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mx-[1.5rem] mt-[2rem] text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/register">
              <button className=" bg-green-900 text-gray-300 rounded-md px-2 py-1">
                Register
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
