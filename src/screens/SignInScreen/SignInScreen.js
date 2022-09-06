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
// import firebase from "firebase/app";
// import "firebase/auth";

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    // console.warn("Sign Innn");
    // navigation.navigate("SignUp");
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(username, password)
    //   .then(() => {
    //     navigation.navigate("SignUp");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //     // ..
    //   });
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Innn");
  };

  const onSignUpPressed = () => {
    console.warn("Sign Upp");
    navigation.navigate("SignUp");
  };

  //login firebase
  // function loginFirebase() {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(username, password)
  //     .then(() => {
  //       navigation.navigate("SignUp");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       // ..
  //     });
  // }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={(styles.logo, { height: height * 0.3 })}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Email Address"
          value={username}
          setValue={setUsername}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton text="Sign In" onPress={onSignInPressed} type="PRIMARY" />

        <CustomButton
          text="Don't have an account? Sign Up"
          onPress={onSignUpPressed}
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

export default SignInScreen;
