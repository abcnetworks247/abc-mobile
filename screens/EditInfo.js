import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import Svg, { Path, G } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";
import globalstyels from "../styles/globalstyels";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { Toast } from "toastify-react-native";
import ToastManager from "toastify-react-native";
import Container from "toastify-react-native";
import { useState, useEffect } from "react";
import { UseUserContext } from "../context/UserContext";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";


const EditInfo = () => {
    const { UserData, authToken, getUserData } = UseUserContext();
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(null)
    console.log("UserData dp", UserData.userdp);
    
     const [submitForm, setSubmitForm] = useState(new FormData());
    
   const [formData, setFormData] = useState({
     fullname: UserData.fullname || "",
     email: UserData.email || "",
     phone: UserData.phone || "",
     shippingaddress: UserData.shippingaddress || "",
     userdp: UserData.userdp
       ? UserData.userdp
       : null,
   });
    
     
    
       
    
 const [selectedPhoto, setSelectedPhoto] = useState(null);
    
 const SelectImagePicker = async () => {
   try {
       result = await ImagePicker.launchImageLibraryAsync({
       mediaTypes: ImagePicker.MediaTypeOptions.All,
       allowsEditing: true,
       aspect: [4, 3],
       quality: 1,
     });
       console.log("result of picture", result)

          console.log("image result", result)
       if (result && result.assets && result.assets.length > 0 && !result.cancelled) {
           setSelectedPhoto(result.assets[0].uri)
           // Append the selected image to the submitForm
           submitForm.append("userphoto", {
               uri: result.assets[0].uri,
               name: "userphoto.jpg",
               type: "image/jpg",
           })
       };
        console.log("my form data", formData);
 
 
   } catch (error) {
     console.error("Error picking image:", error);
   }
};

    const renderProfileImage = () => {
      if (selectedPhoto) {
        // If a photo is selected, render the selected image
        return (
          <Image
            source={{ uri: selectedPhoto }}
            className=" relative object-cover rounded-md h-[90px] w-[100px]"
          />
        );
      } else if (formData.userdp) {
        // If no new photo is selected but there's an existing user photo, render it
        return (
          <Image
            source={{ uri: formData.userdp }}
            className=" relative object-cover rounded-md h-[90px] w-[100px]"
          />
        );
      } else {
        // If no new photo is selected and no existing user photo, render the default image
        return (
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/a6/f3/c5/a6f3c55ace829310723adcb7a468869b.png",
            }}
            className=" relative object-cover rounded-md h-[90px] w-[100px]"
          />
        );
       
      }
    };
    


 
 
  const handleInputChange = (name, value) => {
       setFormData((prevData) => ({
         ...prevData,
         [name]: value,
       }));
     
   console.log("my form data", formData)
     console.log(authToken)
     };
    
    
  const handleSubmit = async () => {
    console.log(formData, "hit");

    try {
      setLoading(true)
   
      // Create a new FormData instance
     


       submitForm.append("fullname", formData.fullname);
       submitForm.append("email", formData.email);
       submitForm.append("phone", formData.phone);
       submitForm.append("shippingaddress", formData.shippingaddress);
         
        console.log("submitForm", submitForm);
    
        // if (formData.userdp) {
        //   submitForm.append("userdp", {
        //     uri:result.assets[0].uri,
        //     name: "userphoto.jpg",
        //     type: "image/jpg",
        //   });
        // }

      // Make a PATCH request
      const response = await axios.patch(
        `${process.env.EXPO_PUBLIC_SERVER_URL}client/auth/account`,
        submitForm,
        {
          headers: {
            Authorization: `Bearer ${String(authToken)}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Check the response status
      if (response.status === 200) {
        await getUserData();
        console.log("Updated UserData:", UserData);
        if (UserData) {
          setLoading(false);
          navigation.navigate("Profile");
        }
        
         
        

        console.log("use profle updated successfully");
      } else {
        console.error("Failed to update user profile.");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };
    
    

  return (
    <SafeAreaView style={globalstyels.droidSafeArea}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      {loading ? (
        <View className="flex flex-row items-center justify-center mt-24 ">
          <View>
            <ActivityIndicator size="large" className="mt-[12px]" />
            <Text className="mt-[12px] text-[18px]">Updating profile...</Text>
          </View>
        </View>
      ) : (
        <ScrollView>
          <View>
            <View className="px-4 w-full">
              <View className="mt-6">
                <View className="mb-6">
                  <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                    Mobile Number
                  </Text>
                  <TextInput
                    name="phone"
                    type="text"
                    keyboardType="phone-pad"
                    placeholder="Type your mobile number"
                    className="w-full px-4 d py-2.5 text-base text-gray-900 bg-white font-normal border border-gray-200"
                    data-gramm="false"
                    wt-ignore-input="true"
                    value={formData.phone}
                    onChangeText={(text) => handleInputChange("phone", text)}
                  />
                </View>
                <View className="mb-6">
                  <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                    Full Name
                  </Text>
                  <TextInput
                    name="fullname"
                    type="text"
                    placeholder="Type your name"
                    className="w-full px-4 d py-2.5 text-base text-gray-900 font-normal border border-gray-200 bg-white"
                    data-gramm="false"
                    wt-ignore-input="true"
                    value={formData.fullname}
                    onChangeText={(text) => handleInputChange("fullname", text)}
                  />
                </View>
                <View className="mb-6">
                  <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                    Shipping Address
                  </Text>
                  <TextInput
                    name="shippingaddress"
                    type="text"
                    placeholder="Type your location"
                    className="w-full px-4 d py-2.5 text-base text-gray-900 font-normal border border-gray-200 bg-white"
                    data-gramm="false"
                    wt-ignore-input="true"
                    value={formData.shippingaddress}
                    onChangeText={(text) =>
                      handleInputChange("shippingaddress", text)
                    }
                  />
                </View>
                <View className="mb-6">
                  <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                    Email
                  </Text>
                  <TextInput
                    name="email"
                    type="email"
                    placeholder="Enter your shipping address..."
                    className="w-full px-4  py-2.5 text-base text-gray-900 font-normal border border-gray-200 bg-white"
                    data-gramm="false"
                    wt-ignore-input="true"
                    value={formData.email}
                    onChangeText={(text) => handleInputChange("email", text)}
                  />
                </View>
                <View className="mb-6">
                  <Text className="block mb-2 text-sm font-medium dark:text-gray-400">
                    Profile Picture
                  </Text>
                  <TouchableOpacity
                    className="py-2 shrink-0 w-full"
                    onPress={SelectImagePicker}
                  >
                    <View className="relative">
                      <View className="absolute bg-black/50 z-10 h-[50px] top-10 w-[100px] rounded-b-lg flex items-center justify-center ">
                        <Svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          height={30}
                          color="white"
                          width={30}
                          className="text-white"
                        >
                          <G stroke="#ffff" strokeWidth={1.5}>
                            <Path d="M15 13H9M12 10v6" strokeLinecap="round" />
                            <Path
                              d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 001.226-1.204c.749-1.1.749-2.633.749-5.697 0-3.065 0-4.597-.749-5.697a4.407 4.407 0 00-1.226-1.204c-.72-.473-1.622-.642-3.003-.702-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0013.634 3h-3.268c-.988 0-1.839.685-2.033 1.636-.129.635-.696 1.125-1.355 1.125-1.38.06-2.282.23-3.003.702A4.405 4.405 0 002.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21z"
                              strokeLinecap="round"
                            />
                            <Path d="M19 10h-1" strokeLinecap="round" />
                          </G>
                        </Svg>
                      </View>
                      <View>{renderProfileImage()}</View>
                    </View>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => handleSubmit()}
                  type="submit"
                  className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <Text className="text-white text-center text-lg">
                    Save details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default EditInfo;
