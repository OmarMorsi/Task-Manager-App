import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"; //(e.g <Ionicons name='md-checkmark-circle' size={32} color='green' />)
import ProfileIcon from "../widgets/ProfileIcon";

const containerWidth = Dimensions.get("window").width - 50;

export default class Tasks extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerImage}>
            <View style={styles.headerText}>
              <Text style={styles.text}>Create</Text>
              <Text style={styles.texttwo}>create your own profile</Text>
            </View>
            <ProfileIcon imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          </View>
        </View>
        <View style={styles.contains}>
          <View style={styles.inputContainer}>
            <Ionicons name="add-outline" size={32} color="black" />
            <TextInput
              placeholder="Add description"
              style={[
                styles.textInputOne,
                { flex: 1, width: containerWidth * 0.6 },
              ]}
            />
          </View>
          <View style={styles.both}>
            <View style={styles.inputContainer1}>
              <Ionicons name="body-outline" size={32} color="black" />
              <TextInput
                placeholder="Last Name"
                style={[
                  styles.textInputOne,
                  { flex: 1, width: containerWidth * 0.6 },
                ]}
              />
            </View>
            <View style={{ flex: 0.1 }}></View>
            <View style={styles.inputContainer2}>
              <Ionicons name="body-outline" size={32} color="black" />
              <TextInput
                placeholder="Last Name"
                style={[
                  styles.textInputOne,
                  { flex: 1, width: containerWidth * 0.4 },
                ]}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="chatbubbles-outline" size={32} color="black" />
            <TextInput
              keyboardType="numeric"
              placeholder="e.g JohnWick@gmail.com"
              style={[
                styles.textInputOne,
                { flex: 1, width: containerWidth * 0.4 },
              ]}
            />
          </View>
        </View>
        <View style={styles.last}></View>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 20,
  },

  headerText: {
    flex: 5,
    flexDirection: "column",
    alignItems: "stretch",
  },

  headerImage: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 40,
  },

  text: {
    fontSize: 60,
    color: "black",
    fontWeight: "bold",
  },

  texttwo: {
    fontSize: 20,
    color: "black",
  },

  contains: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 5,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "black",
    borderRadius: 20,
    paddingHorizontal: 10,
  },

  both: {
    flexDirection: "row",
    paddingVertical: 10,
  },

  inputContainer1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  inputContainer2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "black",
    borderRadius: 20,
    paddingHorizontal: 10,
  },

  textInputOne: {
    paddingVertical: 25,
    fontSize: 15,
  },
  last: {
    flex: 1,
  },
});
