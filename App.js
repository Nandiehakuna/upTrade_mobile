import React, { useEffect } from "react";
import { View } from "react-native";
import Card from "./app/components/Card";
import * as imagePicker from "expo-image-picker";
import * as permission from "expo-permissions";

function App(props) {
  const requestpermission = async () => {
    // const {granted} =await permission.askAsync(permission.CAMERA, permission.LOCATION_BACKGROUND)
    const { granted } = await imagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("you need to grant permission to access camera ");
    }
  };
  useEffect(() => {
    requestpermission();
  }, []);
  return <Screen></Screen>;
}

export default App;
