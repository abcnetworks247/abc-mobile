import { createContext, useState, useContext, useEffect } from "react";
import React from "react";
import Api from "../utils/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Svg, { Circle, Path } from "react-native-svg"

const UserContext = createContext();

/**
 * @param {object} children where all component can acccss children
 */
export const UserContextProvider = ({ children }) => {
  // initial state for user incoming data
  const [UserData, setUserData] = useState([]);
  const [dummyUser, setDummyUser] = useState([]);
  const [isSignUpVisible, setIsSignUpVisible] = useState(true);
  const [authToken, setAuthToken] = useState(null);

  // console.log("user data", UserData);

  // loading state for user incoming data

  const [genLoading, setGenload] = useState(true);



    const getUserData = async () => {
      try {
        const storedToken = JSON.parse(await AsyncStorage.getItem("authToken"));

        if (storedToken && storedToken !== "undefined" && storedToken !== "") {
          setAuthToken(storedToken); // Set authToken in the context
          console.log("authToken", authToken);
          const response = await Api.get("client/auth/account", {
            headers: {
              Authorization: `Bearer ${storedToken}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
          const dataValue = response.data.olduser;

          if (response.status === 200) {
            setUserData(dataValue);
          }
        }
        setGenload(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
  };
  
  
  useEffect(() => {
    getUserData();
  }, []);


 

  /**
   * @function (fuction) getUserData - a fuction created to retrieve user info.
   */

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("authToken");
      await Api.delete("client/auth/signout", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const [blogData, setBlogData] = useState(null);

  /**
   * Retrieves a blog using the API and sets the blog data.
   *
   * @return {Promise<void>} - A promise that resolves when the blog data is set.
   */
  const getBlog = async () => {
    try {
      const res = await Api.get("admin/blog");
      const data = await res.data;

      setBlogData(data.allblog);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log("blog context", blogData && blogData);
    getBlog();
  }, []);

  // log out user

  // if (genLoading) {
  //   return <Loading />;
  // }
  return (
    <UserContext.Provider
      value={{
        handleLogout,
        UserData,
        isSignUpVisible,
        setIsSignUpVisible,
        authToken,
        getUserData,
      }}
    >
      {
        //   genLoading ?  <Svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   fill="none"
        //   viewBox="0 0 24 24"
        //    height={`24`}
        //    width={`24`}
        // >
        //   <Circle cx={12} cy={12} r={10} stroke="currentColor" />
        //   <Path
        //     fill="currentColor"
        //     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        //   />
        // </Svg> :

        children
      }
    </UserContext.Provider>
  );
};

/**
 * Returns the user provider from the React context.
 * @returns {Object} The user provider.
 */

export function UseUserContext() {
  const usercontext = UserContext;
  if (!usercontext) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return useContext(usercontext);
}
