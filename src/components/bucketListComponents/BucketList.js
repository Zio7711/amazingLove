import { FlatList, StyleSheet, Text, View } from "react-native";

import BucketListCard from "./BucketListCard";
import React from "react";

const BucketList = () => {
  //fake data need to be replaced
  const fakeData = [
    {
      id: "1",
      title: "Bucket List Item 1",
      description: "Description of Bucket List Item 1",
      isCompleted: true,
      image: "https://picsum.photos/200",
      location: "Location of Bucket List Item 1",
      date: "Date of Bucket List Item 1",
    },

    {
      id: "2",
      title: "Bucket List Item 2",
      description: "Description of Bucket List Item 2",
      isCompleted: true,
      image: "https://picsum.photos/200",
      location: "Location of Bucket List Item 2",
      date: "Date of Bucket List Item 2",
    },

    {
      id: "3",
      title: "Bucket List Item 3",
      description: "Description of Bucket List Item 3",
      isCompleted: true,
      image: "https://picsum.photos/200",
      location: "Location of Bucket List Item 3",
      date: "Date of Bucket List Item 3",
    },

    {
      id: "4",
      title: "Bucket List Item 4",
      description: "Description of Bucket List Item 4",
      isCompleted: true,
      image: "https://picsum.photos/200",
      location: "Location of Bucket List Item 4",
      date: "Date of Bucket List Item 4",
    },

    {
      id: "5",
      title: "Bucket List Item 5",
      description: "Description of Bucket List Item 5",
      isCompleted: false,
      image: "https://picsum.photos/200",
      location: "Location of Bucket List Item 5",
      date: "Date of Bucket List Item 5",
    },

    {
      id: "6",
      title: "Bucket List Item 6",
      description: "Description of Bucket List Item 6",
      isCompleted: false,
      image: "https://picsum.photos/200",
      location: "Location of Bucket List Item 6",
      date: "Date of Bucket List Item 6",
    },

    {
      id: "7",
      title: "Bucket List Item 7",
      description: "Description of Bucket List Item 7",
      isCompleted: false,
      image: "https://picsum.photos/200",
      location: "Location of Bucket List Item 7",
      date: "Date of Bucket List Item 7",
    },

    {
      id: "8",
      title: "Bucket List Item 8",
      description: "Description of Bucket List Item 8",
      isCompleted: false,
      image: "https://picsum.photos/200",
      location: "Location of Bucket List Item 8",
      date: "Date of Bucket List Item 8",
    },

    {
      id: "9",
      title: "Bucket List Item 9",
      description: "Description of Bucket List Item 9",
      isCompleted: false,
      image: "https://picsum.photos/200",
      location: "Location of Bucket List Item 9",
      date: "Date of Bucket List Item 9",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={fakeData}
        renderItem={({ item }) => <BucketListCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
  },
});

export default BucketList;
