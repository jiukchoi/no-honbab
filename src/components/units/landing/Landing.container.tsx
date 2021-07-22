import React from "react";
import LandingUI from "./Landing.presenter";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";

GoogleSignin.configure({
  webClientId:
    "190456314170-acl1rahn8rmkpna0nfvk67aicu6rta68.apps.googleusercontent.com",
});

const Landing = () => {
  const saveUserOnRTDB = () => {};

  const onGoogleButtonPress = async () => {
    const { idToken } = await GoogleSignin.signIn();
    // Google Credential 정보를 token으로 생성
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Credential 이용하여 로그인
    return auth()
      .signInWithCredential(googleCredential)
      .then((userInfo) => console.log(userInfo));
  };

  const onFacebookButtonPress = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        "public_profile",
        "email",
      ]);

      if (result.isCancelled) {
        throw "User cancelled the login process";
      }

      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw "Something went wrong obtaining accesstoken";
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken
      );
      return auth()
        .signInWithCredential(facebookCredential)
        .then((userInfo) => console.log(userInfo));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LandingUI
      onGoogleButtonPress={onGoogleButtonPress}
      onFacebookButtonPress={onFacebookButtonPress}
    />
  );
};

export default Landing;
