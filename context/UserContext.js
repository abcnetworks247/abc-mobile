
import { createContext, useState, useContext, useEffect } from "react";
import React from "react";
import Api from "../utils/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";



const UserContext = createContext();

/**
 * @param {object} children where all component can acccss children
 */
export const UserContextProvider = ({ children }) => {
  // initial state for user incoming data
  const [UserData, setUserData] = useState([]);
  const [dummyUser, setDummyUser] = useState([]);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  // console.log("user data", UserData);

  // loading state for user incoming data

  const [loading, setLoading] = useState(true);
  const [genLoading, setGenload] = useState(true);

  



   useEffect(() => {
     const getUserData = async () => {
       try {
        const authToken = await AsyncStorage.getItem("authToken");
        const token = JSON.stringify(authToken)
        console.log('get auth ', authToken)
         if (authToken) {
           const response = await Api.get("client/auth/account", {
             headers: {
              Authorization: "Bearer " + authToken,
             },
           });
           const dataValue = response.data.olduser;
              // console.log('datavalue', dataValue);
           if (response.status === 200) {
             setUserData(dataValue);
             setLoading(false);
             setGenload(false);
           }
         } else {
           setGenload(false);
         }
       } catch (error) {
         console.error("Error fetching user data:", error);
       }
     };

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
        loading,
        isSignUpVisible,
        setIsSignUpVisible,
      }}
    >
      {children}
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
