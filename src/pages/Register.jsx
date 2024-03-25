import RegisterForm from "../components/RegisterForm";
import image from "../../src/firefighter1.jpg";

const Register = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-none -mt-10 h-screen flex justify-center items-center"
    >
      <RegisterForm />
    </div>
  );
};

export default Register;
