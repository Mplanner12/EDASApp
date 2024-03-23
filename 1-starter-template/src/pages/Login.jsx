import { LoginForm } from "../components/LoginForm";
import image from "../../public/firefighters.jpg";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-none -mt-10 h-screen flex justify-center items-center"
    >
      <LoginForm />
    </div>
  );
};

export default Login;
