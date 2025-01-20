import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import ListingsApi from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import { useApi } from "../hooks/useApi";
import apiClient from "../api/Client";

function ListingScreen({ navigation }) {
  const {
    data: listings,
    loading,
    error,
    request: loadListings,
  } = useApi(ListingsApi.getListings);
  // const getListings=useApi(ListingsApi.getListings)
  useEffect(() => {
    loadListings();
  }, []);

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
