import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import ListingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    LoadListings();
  }, []);
  const LoadListings = () => {
    setLoading(false);
    const response = ListingsApi.getListings();
    setLoading(true);
    if (!response.ok) {
      setError(true);
    }
    setError(false);

    setListings(response.data);
  };

  return (
    <Screen>
      {error && (
        <>
          <AppText>couldnt load listings</AppText>
          <AppButton title="retry" onPress={LoadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(ListingsItem) => ListingsItem.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => navigation.navigate("ListingsDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ListingScreen;
