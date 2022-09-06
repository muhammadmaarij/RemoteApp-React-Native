import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Logo from "../../../assets/images/logo_1.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const SignUpScreen = () => {
  // console.log(props);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign Innn");
  };
  const onSignUpPressed = () => {
    console.warn("Sign Upp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={(styles.logo, { height: height * 0.3 })}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Full Name"
          value={name}
          setValue={setName}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Email Address"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign Up" onPress={onSignUpPressed} type="PRIMARY" />
        <CustomButton
          text="Already have an account? Sign In"
          onPress={onSignInPressed}
          type="SECONDARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 40,
    paddingTop: 80,
  },
  logo: {
    paddingTop: 20,
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignUpScreen;
