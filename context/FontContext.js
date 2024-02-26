import React, { createContext, useContext } from "react";
import {
  useFonts,
  PublicSans_100Thin,
  PublicSans_200ExtraLight,
  PublicSans_300Light,
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_600SemiBold,
  PublicSans_700Bold,
  PublicSans_800ExtraBold,
  PublicSans_900Black,
  PublicSans_100Thin_Italic,
  PublicSans_200ExtraLight_Italic,
  PublicSans_300Light_Italic,
  PublicSans_400Regular_Italic,
  PublicSans_500Medium_Italic,
  PublicSans_600SemiBold_Italic,
  PublicSans_700Bold_Italic,
  PublicSans_800ExtraBold_Italic,
  PublicSans_900Black_Italic,
} from "@expo-google-fonts/public-sans";



const FontContext = createContext();

export const useCustomFonts = () => {
  return useContext(FontContext);
};

 const FontProvider = ({ children }) => {
  // You can set default values or load fonts here
  let [fontsLoaded] = useFonts({
    PublicSans_100Thin,
    PublicSans_200ExtraLight,
    PublicSans_300Light,
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_600SemiBold,
    PublicSans_700Bold,
    PublicSans_800ExtraBold,
    PublicSans_900Black,
    PublicSans_100Thin_Italic,
    PublicSans_200ExtraLight_Italic,
    PublicSans_300Light_Italic,
    PublicSans_400Regular_Italic,
    PublicSans_500Medium_Italic,
    PublicSans_600SemiBold_Italic,
    PublicSans_700Bold_Italic,
    PublicSans_800ExtraBold_Italic,
    PublicSans_900Black_Italic,
  });

  const fontStyles = {
    PublicSans_100Thin,
    PublicSans_200ExtraLight,
    PublicSans_300Light,
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_600SemiBold,
    PublicSans_700Bold,
    PublicSans_800ExtraBold,
    PublicSans_900Black,
    PublicSans_100Thin_Italic,
    PublicSans_200ExtraLight_Italic,
    PublicSans_300Light_Italic,
    PublicSans_400Regular_Italic,
    PublicSans_500Medium_Italic,
    PublicSans_600SemiBold_Italic,
    PublicSans_700Bold_Italic,
    PublicSans_800ExtraBold_Italic,
    PublicSans_900Black_Italic,
  };

  return (
    <FontContext.Provider value={{ fontsLoaded, fontStyles }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontProvider
