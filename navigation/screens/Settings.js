import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://ouch-cdn2.icons8.com/XmdmB1yJMFh3mgqg-ZUj9jJpQJPHbjQyaoFiBmoEvV8/rs:fit:315:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy91aS1lbGVt/Lzc2OS9jNzRhNGEy/Ny1mYjY1LTQzN2Yt/OTI5MC1hYzY0ODIy/YTI4YzAuc3Zn.png",
          }}
          style={styles.imgStyle}
        />
      </View>

      <View style={styles.TexxtContainer}>
        <Text
          style={{
            fontSize: 35,
            marginBottom: 30,
            color: "black",
            fontWeight: "bold",
          }}
        >
          There are no tasks
        </Text>
        <Text
          style={{
            flex: 1,
            fontSize: 18,

            color: "gray",

            textAlign: "center",
            width: "80%",
          }}
        >
          Select another day or create new tasks
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  imageContainer: {
    flex: 2,
    padding: 20,
  },
  imageWrapper: {
    flex: 1,
    borderRadius: 30,
    overflow: "hidden",
  },
  TexxtContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    flex: 1,
    resizeMode: "contain",
    borderRadius: 200,
  },
});
