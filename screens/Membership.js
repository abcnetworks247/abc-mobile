import React from "react";
import { useState , useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions, Pressable, View, Text, ScrollView, TouchableOpacity } from "react-native";
import Svg, { Rect, Path, Defs, ClipPath } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
const Membership = () => {
  const navigation=useNavigation() 
  const { width, height } = Dimensions.get("window");


 const [spinner, setSpinner] = useState(false);
  const [plantype, setPlanType] = useState("monthly");
 
  


 const Plans = [
   {
     name: "General - Copper Donor",
     id: "1",
     range1: plantype === "monthly" ? 10 : 120,
     range2: plantype === "monthly" ? 50 : 600,
     price: plantype === "monthly" ? "10 - $50" : "120 - $600",
     description: "Basic plan with live video access and more.",
     type: plantype === "monthly" ? "month" : "year",
     features: ["Live Video"],
   },
   {
     name: "Prime - Silver Donor",
     id: "2",
     range1: plantype === "monthly" ? 55 : 660,
     range2: plantype === "monthly" ? 100 : 1200,
     price: plantype === "monthly" ? "55 - $100" : "660 - $1200",
     description: "Enhanced plan with discounts and live video.",
     type: plantype === "monthly" ? "month" : "year",
     features: ["Special Discount", "Live Video"],
   },
   {
     name: "Patrons 1 - Gold Donor",
     id: "3",
     range1: plantype === "monthly" ? 105 : 1260,
     range2: plantype === "monthly" ? 200 : 2400,
     price: plantype === "monthly" ? "105 - $200" : "1260 - $2400",
     description: "Premium plan with discounts, live video, and free shipping.",
     type: plantype === "monthly" ? "month" : "year",
     features: ["Special Discount", "Live Video", "Free Shipping"],
   },
   {
     name: "Patron 2 - Diamond Donor",
     id: "4",
     range1: plantype === "monthly" ? 500 : 6000,
     range2: plantype === "monthly" ? 1000 : 12000,
     price: plantype === "monthly" ? "$500" : "$6000",
     description: "Exclusive plan with discounts, free shipping, and more.",
     type: plantype === "monthly" ? "month" : "year",
     features: [
       "Special Discount",
       "Live Video",
       "Free Shipping / Fast Delivery",
       "Free ABCTV App Download",
     ],
   },
   {
     name: "Patron 3 - Titanium Donor",
     id: "5",
     range1: plantype === "monthly" ? 1000 : 12000,
     range2: plantype === "monthly" ? 500000 : 6000000,
     price: plantype === "monthly" ? "$1000" : "$12000",
     description: "Elite plan with discounts, live video, and premium perks.",
     type: plantype === "monthly" ? "month" : "year",
     features: [
       "Special Discount",
       "Live Discount",
       "Free ABCTV App Download",
       "Free ABCTV Gadgets",
       "Free Shipping / Free Delivery",
     ],
   },
 ];


 const MonthlyPlan = () => {
   setPlanType("monthly");
  
 };

 const YearlyPlan = () => {
   setPlanType("yearly");
   
 };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View className="px-2" style={{ width: width }}>
          <View className="flex flex-row items-center justify-center">
            <Text className="mt-2 ">
              Your Prime membership now also includes 24*7 hours Customer
              Support, fast delivery on eligible items, exclusive access to
              deals & more.
            </Text>
          </View>
          <View>
            <View className="flex flex-row border border-gray-300 items-center mt-2 p-0 px-2 py-2 rounded-lg">
              <Pressable
                id="submit-button"
                onPress={MonthlyPlan}
                className={`${
                  plantype === "monthly" ? "bg-blue-600" : "bg-gray-200"
                } basis-1/2 h-8 flex flex-row items-center justify-center rounded-l-lg`}
              >
                <Text className={`${plantype === "monthly" && "text-white"}`}>
                  {" "}
                  Monthly
                </Text>
              </Pressable>
              <Pressable
                id="submit-button"
                className={`${
                  plantype === "yearly" ? "bg-blue-600" : "bg-gray-200"
                } basis-1/2 h-8 flex flex-row items-center justify-center rounded-r-lg`}
                onPress={YearlyPlan}
              >
                <Text className={`${plantype === "yearly" && "text-white"}`}>
                  {" "}
                  Yearly
                </Text>
              </Pressable>
            </View>
          </View>

          <View className="grid grid-cols-1 gap-8 mt-1 mb-16 lg:ap-2 lg:grid-cols-3">
            {Plans.map((plan) => (
              <View className="order-first" key={plan.id}>
                <View className="flex flex-col">
                  <View className="p-8 rounded-3xl bg-[#1c1f29] ring-1 ring-white/10 shadow-2xl">
                    <View className="flex-col justify-between">
                      <View className="flex items-center gap-3">
                        <Svg
                          viewBox="0 0 280 280"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          width={30}
                          height={30}
                        >
                          <Rect
                            width={280}
                            height={280}
                            rx={32}
                            fill="#d1cfdf"
                          />
                          <Path
                            d="M196.064 183.936L152.127 140l43.937-43.936L240 140l-43.936 43.936zm-112.128 0L40 140l43.936-43.936L127.873 140l-43.937 43.936zM140 240l-43.936-43.936L140 152.127l43.936 43.937L140 240zm0-112.127L96.064 83.936 140 40l43.936 43.936L140 127.873z"
                            fill="#000"
                          />
                          <Defs>
                            <ClipPath id="clip0_501_1489">
                              <Path
                                fill="#fff"
                                transform="translate(40 40)"
                                d="M0 0H200V200H0z"
                              />
                            </ClipPath>
                          </Defs>
                        </Svg>
                        <View className="flex flex-col items-center">
                          <Text className="text-sm font-medium text-white uppercase">
                            {plan.name}
                          </Text>
                          <Text className="text-base font-medium text-white  lg:text-xl">
                            {`${plan.price}/${plan.type}`}
                          </Text>
                          <Text className="mt-8 text-sm font-medium text-gray-300">
                            {plan.description}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View className="flex mt-6">
                      <TouchableOpacity
                        className="w-full px-8 py-1.5 text-white bg-blue-600 rounded-md"
                        for="modal-3"
                        onPress={() => {
                          // Navigate to modal with plan details
                          navigation.navigate("MyModal", { plan });
                        }}
                      >
                        <View className="flex flex-row items-center justify-center">
                          <Text className="text-white">Subscribe Now</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="px-8">
                    <View>
                      <Text className="mt-4 text-lg font-medium text-black uppercase lg:mt-8">
                        Features
                      </Text>
                      <View
                        className="order-last gap-4 mt-4 space-y-3 text-gray-300 list-none"
                        role="list"
                      >
                        {plan.features.map((feature, index) => (
                          <View
                            className="flex flex-row items-center gap-2"
                            key={index}
                          >
                            <Svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              stroke="#000"
                              fill="none"
                              className="w-8 h-8"
                            >
                              <Path d="M0 0h24v24H0z" stroke="none" />
                              <Path d="M3 12a9 9 0 1018 0 9 9 0 10-18 0" />
                              <Path d="M9 12l2 2 4-4" />
                            </Svg>
                            <Text className="text-black">{feature}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  selectedPlan: {
    backgroundColor: "blue",
  },
  buttonText: {
    color: "black",
  },
  content: {
    alignItems: "center",
  },
});

export default Membership;
