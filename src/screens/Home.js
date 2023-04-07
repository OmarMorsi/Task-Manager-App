import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ProfileIcon from "../components/ProfileIcon";
import { Colors } from "../theme/Colors";

const { width } = Dimensions.get("window");
const height = width * 0.7;
const Separator = () => <View style={styles.separator} />;
const images = [
  "https://ouch-cdn2.icons8.com/SdKrNCfhQKVVp6T1qNUodUvbjsaiW8SOHwUIHtZjofQ/rs:fit:256:190/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDM1/LzY5N2YxYTE2LTgw/YWItNDJlYy04OTVk/LTk2OWU2MGU5ZDg0/OC5zdmc.png",
  "https://ouch-cdn2.icons8.com/keSdO4Pcxx7IZm40N1hMIleGVBhdgZbIUmCgOKrZCro/rs:fit:256:189/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjk3/L2E3OTUzMGUwLTc2/ZmQtNDNmMi04YWIy/LWEwZDM1ZmIyOTYw/YS5zdmc.png",
  "https://ouch-cdn2.icons8.com/Z_c7H-wu6RElsN-y87pRkLvLrYKrnu5aZUIWDhaQkQU/rs:fit:256:165/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTM1/L2Y2NmE3OTJlLWI2/YzItNDcxNy1hYzEz/LTlkYWY2N2UwNjhl/OS5zdmc.png",
];

export default class Home extends React.Component {
  constructor(props) {
    active = 0;
    super(props);
    this.state = {
      checked: null,
      radioButtons: [
        { label: "Concept 1 - business style" },
        { label: "Concept 2 - funny style" },
        { label: "Concept 3 - minimalism" },
      ],
    };
  }
  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {/* <View style={styles.headerImage}> */}
          <View style={styles.headerText}>
            <Text style={styles.text}>My Tasks</Text>
            <Text style={styles.texttwo}>
              4 tasks for{" "}
              <Text style={{ textDecorationLine: "underline" }}>Today</Text>
            </Text>
          </View>
          <ProfileIcon imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          {/* </View> */}
        </View>
        {/* Carousel */}

        <View style={styles.carouselContainer}>
          <ScrollView
            paginEnabled
            horizontal
            onScroll={this.change}
            scrollEventThrottle={0}
            showsHorizontalScrollIndicator={false}
            style={{ width, height }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                source={{
                  uri: image,
                }}
                style={{
                  width,
                  height,
                  resizeMode: "cover",
                  borderRadius: 50,
                  marginHorizontal: 10,
                }}
              />
            ))}
          </ScrollView>

          <View style={styles.slider}>
            {images.map((i, k) => (
              <Text
                key={k}
                style={
                  k == this.state.active
                    ? styles.activeSliderStyle
                    : styles.sliderStyle
                }
              >
                ⬤
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.radioButtonContainer}>
          <View style={styles.item}>
            {this.state.radioButtons.map((radioButton, index) => (
              <View key={index}>
                {this.state.checked === index ? (
                  <TouchableOpacity style={styles.btn}>
                    <Image
                      style={styles.img}
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/128/6941/6941944.png",
                      }}
                    />
                    <Text style={styles.radioText}>{radioButton.label}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ checked: index });
                    }}
                    style={styles.btn}
                  >
                    <Image
                      style={styles.img}
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/128/7613/7613822.png",
                      }}
                    />

                    <Text style={styles.radioText}>{radioButton.label}</Text>
                  </TouchableOpacity>
                )}
                {index !== this.state.radioButtons.length - 1 && <Separator />}
              </View>
            ))}
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 20,
  },

  headerContainer: {
    flexDirection: "row",
    marginVertical: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },

  headerText: {
    flex: 4,
  },

  text: {
    fontSize: 50,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 10,
    paddingBottom: 10,
  },

  texttwo: {
    fontSize: 20,
    color: "black",
    paddingLeft: 10,
  },

  slider: {
    flexDirection: "row",
    position: "relative",
    alignSelf: "center",
    paddingTop: 5,
    bottom: 0,
  },

  sliderStyle: {
    fontSize: 10,
    color: "lightgray",
  },

  activeSliderStyle: {
    fontSize: 10,
    color: "black",
  },

  //radioButton

  radioButtonContainer: {
    flex: 1,
    justifyContent: "center",

    alignSelf: "center",
  },

  img: {
    height: 25,
    width: 25,
  },

  btn: {
    flexDirection: "row",
    alignItems: "center",
  },

  item: {
    flex: 1,
    justifyContent: "center",
  },

  radioText: {
    padding: 25,
    color: "black",
    fontSize: 20,
  },

  separator: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    marginLeft: 35,
  },
});
