import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../config/Colors";

export default function Image({ imageUri }) {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons name="camera" size={30} color={Colors.medium} />
      )}
      {imageUri && <Image source={{ uri: imageUri }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.medium,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
