/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { account } from "../appwriteConfig";
import { ID } from "appwrite";
import { Loading } from "../../components/Loading";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const logoutUser = () => {
    account.deleteSession("current");
    setUser(null); // if user is logged out, set the user state to null
    console.log("Logged out");
  };

  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password1,
        userInfo.name
      ); // create a new user account
      console.log("RESPONSE:", response);
      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password1
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails); // if user is logged in, set the user state to the account details
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }; // check if user is logged in or not

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <p>
          <Loading />
        </p>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
