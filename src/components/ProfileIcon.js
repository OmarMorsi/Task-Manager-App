import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class ProfileIcon extends Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.headerImage}
      />
    );
  }
}

const styles = StyleSheet.create({
  headerImage: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 20,
  },
});
