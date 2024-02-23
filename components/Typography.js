import { StyleSheet } from "react-native";

const Typography = StyleSheet.create({
  header: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    color: "#333333",
    lineHeight: 32,
  },
  subheader: {
    fontFamily: "OpenSans-Regular",
    fontSize: 16,
    color: "#666666",
    lineHeight: 24,
  },
  body: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: "#444444",
    lineHeight: 20,
  },
  button: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
    lineHeight: 20,
  },
  caption: {
    fontFamily: "NunitoSans-Light",
    fontSize: 12,
    color: "#888888",
    lineHeight: 16,
  },
});

export default Typography;
