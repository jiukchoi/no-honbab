import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./Landing.styles";

const LandingUI = ({ onFacebookButtonPress, onGoogleButtonPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      <Image
        style={styles.logo}
        source={require("../../../../public/landing/logo.png")}
      />
      <TouchableOpacity
        onPress={() =>
          onGoogleButtonPress().then(() => navigation.navigate("tabNavigator"))
        }
      >
        <Image
          source={require("../../../../public/landing/login-google-button.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          onFacebookButtonPress().then(() =>
            navigation.navigate("tabNavigator")
          )
        }
      >
        <Image
          source={require("../../../../public/landing/login-facebook-button.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LandingUI;
