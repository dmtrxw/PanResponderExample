import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  PanResponder,
} from "react-native";

import jotaroImg from "./assets/jotaro.png";

export default function App() {
  const _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderGrant: (evt, gestureState) => {
      Animated.timing(styles.modal.opacity, {
        toValue: 1,
        duration: 200,
      }).start();
    },
    onPanResponderRelease: (evt, gestureState) => {
      Animated.timing(styles.modal.opacity, {
        toValue: 0,
        duration: 200,
      }).start();
    },
  });
  return (
    <>
      <View style={styles.container}>
        <Image
          source={jotaroImg}
          resizeMode={"contain"}
          style={styles.thumbnail}
          {..._panResponder.panHandlers}
        />
      </View>
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.modal]}
        pointerEvents="none">
        <View style={styles.modalContainer}>
          <Text style={styles.header}>Kujo Jotaro</Text>
          <Image source={jotaroImg} style={styles.image} resizeMode={"cover"} />
        </View>
      </Animated.View>
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 4,
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    opacity: new Animated.Value(0),
  },
  modalContainer: {
    width: "80%",
    height: "50%",
    borderRadius: 4,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
};
