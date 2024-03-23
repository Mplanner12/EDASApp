import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useAuth } from "../pages/utils/AuthContext";

const RegisterForm = () => {
  const registerForm = useRef(null);
  const { user, registerUser } = useAuth();
  const navigate = useNavigate();

  // Check if user is already logged in and redirect to home page if so
  useEffect(() => {
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = registerForm.current.name.value;
    const email = registerForm.current.email.value;
    const password1 = registerForm.current.password1.value;
    const password2 = registerForm.current.password2.value;

    // Check if fields are empty
    if (!name || !email || !password1 || !password2) {
      alert("Please fill in all fields!");
      return;
    }

    // Check if passwords match
    if (password1 !== password2) {
      alert("Passwords do not match!");
      return;
    }
    const userInfo = {
      name,
      email,
      password1,
      password2,
    };
    registerUser(userInfo);
  };

  return (
    <div className="container">
      <div className="mt-7">
        <form ref={registerForm} onSubmit={handleSubmit}>
          <div className="py-[0.35rem] text-center">
            <h1 className="relative -top-4 text-center text-3xl font-bold">
              Register
            </h1>

            {/* <label className="relative -top-1.5 font-serif font-semibold">
              Name
            </label> */}
            <input
              required
              type="name"
              name="name"
              placeholder="Enter your name..."
              className="bg-green-900 border-b-2 border-t-0 border-black p-2 text-black h-[2.5rem] rounded-md w-full max-w-xs"
            />
          </div>

          <div className="py-[1rem] text-center">
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
              name="password1"
              placeholder="Enter password..."
              className="bg-green-900 border-b-2 border-t-0 border-black p-2 text-black h-[2.5rem] rounded-md w-full max-w-xs"
            />
          </div>

          <div className="pb-[1.5rem] text-center">
            {/* <label className="relative -top-1.5 font-serif font-semibold">
              Confirm Password
            </label> */}
            <input
              type="password"
              name="password2"
              placeholder="Confirm password..."
              className="bg-green-900 border-b-2 border-t-0 border-black p-2 text-black h-[2.5rem] rounded-md w-full max-w-xs"
            />
          </div>

          <div className="flex mb-[1rem] justify-center items-center gap-2">
            <button
              type="submit"
              value="Login"
              className="bg-green-900 w-[7rem] font-sans font-bold rounded-md text-gray-300 px-[1rem] py-[0.5rem]"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-[2rem] text-center">
          <p>
            Already have an account?
            <button className="mx-[1rem] bg-green-900 text-gray-300 rounded-md px-2 py-1">
              <Link to="/login">Login</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
