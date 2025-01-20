import { moduleName } from "react-native";

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View>
      <LottieView source={require("../assets/loading.json")} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({});
