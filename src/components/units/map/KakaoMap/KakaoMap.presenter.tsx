import React from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { WebView } from "react-native-webview";

<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=220fcd150a994693cfc3a4fef6ff7e26"
></script>;

const KakaoMapUI = () => {
  const container = document.getElementById("map");

  const options = {
    // @ts-ignore
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };

  // @ts-ignore
  const map = new KakaoMapUI.maps.Map(container, options);

  return <View id="map" style={{ width: "100%", height: "100%" }}></View>;
};

export default KakaoMapUI;
