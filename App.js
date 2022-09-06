import React from "react";
// import firebase from "../firebase";
// import auth from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
// import * as firebase from "firebase/app";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignUpScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
});

const navigator = createStackNavigator(
  {
    Home: { screen: SignInScreen, navigationOptions: { header: null } },
    SignUp: { screen: SignUpScreen, navigationOptions: { header: null } },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

// const Stack = createNativeStackNavigator();

// const App = () => {
//   const firebaseConfig = {
//     apiKey: "AIzaSyBCCYE6a_nk5bpmyvMZNoV7AxyqEfn3OYo",
//     authDomain: "remoteapp-a07e5.firebaseapp.com",
//     projectId: "remoteapp-a07e5",
//     storageBucket: "remoteapp-a07e5.appspot.com",
//     messagingSenderId: "41924697690",
//     appId: "1:41924697690:web:5466530d7fb5a3a6c34263",
//     measurementId: "G-SS7TN5NDGQ",
//   };
//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   // if (!firebase.apps.length) {
//   //   firebase.initializeApp(firebaseConfig);
//   // } else {
//   //   firebase.app();
//   // }

//   // Listen for authentication state to change.
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user != null) {
//       console.log("We are authenticated now!");
//     }

//     // Do other things
//   });
//   // createAppContainer(navigator);

//   return (
//     // <NavigationContainer>
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="SignIn" component={SignInScreen} />
//       <Stack.Screen name="SignUp" component={SignUpScreen} />
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//     // </NavigationContainer>
//   );
// };

// Initialize Firebase

// export default App;
export default App;
