import React, { useEffect, useState } from "react";

import ImageInputList from "./app/components/image/ImageInput";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

function App(props) {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
