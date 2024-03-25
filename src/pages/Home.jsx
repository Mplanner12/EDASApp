import { useAuth } from "./utils/AuthContext";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import image from "../../src/firefighter5.jpg";

const Home = () => {
  const { user } = useAuth();
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="p-5 h-screen md:bg-no-repeat md:bg-contain md:w-full"
    >
      <div>
        <h1 className="mt-5 md:mt-5 text-center font-extrabold text-xl text-green-950">
          Welcome to EDAS {user.name}
        </h1>
        <div className="text-center flex-col justify-between">
          <div className="mx-auto  md:mt-6 h-[10rem] p-[2rem]">
            <p className="text-xs font-bold">
              Watch the video below to learn more
            </p>
            <Link className="w-[8.5rem] md:mt-3">
              <FaYoutube color="red" className="w-full h-full">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></a>
              </FaYoutube>
            </Link>
          </div>
          <div className="mx-auto h-[10rem] p-[2rem] md:mt-3">
            <h1 className="-mt-3 md:mb-7 text-center font-extrabold text-2xl text-green-950">
              Fire Services
            </h1>
            <div className="w-full flex-col justify-between md:mt-3 md:mb-10">
              <p className="text-center font-bold text-black text-xs">
                Contact our Hotlines below:
              </p>
              <p className="text-center font-bold text-black text-xs">
                0810141506010
              </p>
              <p className="text-center font-bold text-black text-xs">
                0700101253710
              </p>
              {/* <p className="text-center font-bold text-blue-950 text-xs">
              0810373460610
            </p> */}
            </div>
            <div className="w-full flex justify-between bg-inherit text-2xl mt-5 text-green-950">
              <div className="w-[4rem]">
                <MdReport color="red" className="w-full">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></a>
                </MdReport>
                <p className="text-xs font-extrabold">REPORT</p>
              </div>
              <div className="w-[4rem]">
                <IoMdLocate color="green" className="w-full">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></a>
                </IoMdLocate>
                <p className="text-xs font-extrabold">LOCATE</p>
              </div>
              <div className="w-[4rem]">
                <IoMdSettings color="black" className="w-full">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></a>
                </IoMdSettings>
                <p className="text-xs font-extrabold">SETTIGNS</p>
              </div>
            </div>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default Home;
