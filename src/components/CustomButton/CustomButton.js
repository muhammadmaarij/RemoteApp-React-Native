import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { Button } from "react-native-web";

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable onPress={onPress} style={[styles[`container_${type}`]]}>
      <Text style={styles[`text_${type}`]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},

  container_PRIMARY: {
    backgroundColor: "#0464C8",
    width: "85%",
    height: 50,
    padding: 10,
    marginVertical: 25,
    alignItems: "center",
    borderRadius: 50,
  },

  container_TERTIARY: {
    width: "80%",
    padding: 5,
    marginLeft: 70,
    alignItems: "flex-end",
    borderRadius: 50,
  },

  container_SECONDARY: {
    width: "80%",
    padding: 5,
    alignItems: "center",
    borderRadius: 50,
  },

  text_PRIMARY: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },

  text_TERTIARY: {
    color: "#3BC535",
  },

  text_SECONDARY: {
    color: "#3BC535",
  },
});

export default CustomButton;
