import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  useWindowDimensions,
} from "react-native";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#3BC535"
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",

    borderColor: "#e8e8e8",
    borderBottomWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    paddingTop: 35,
    marginVertical: 1,
  },
  input: {},
});

export default CustomInput;
