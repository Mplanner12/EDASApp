import { useAuth } from "./utils/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="mx-auto my-10 flex justify-center text-center">
      <h1>Welcome to your profile! {user.name}</h1>
    </div>
  );
};

export default Profile;
