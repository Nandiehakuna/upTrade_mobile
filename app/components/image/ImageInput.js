import React, { useEffect, useState } from "react";
import Image from "./Image";
import { Image, StyleSheet, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";

const ImageInput = () => {
  const [imageUri, setImageUri] = useState();
  const requestpermission = async () => {
    // const {granted} =await permission.askAsync(permission.CAMERA, permission.LOCATION_BACKGROUND)
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("you need to grant permission to access camera ");
    }
  };
  useEffect(() => {
    requestpermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("error reading an image", error);
    }
  };
  return (
    <Screen>
      <Button onPress={selectImage}>select image</Button>
      <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />
      <Image imageUri={imageUri} />
    </Screen>
  );
};

export default ImageInput;

const styles = StyleSheet.create({});
