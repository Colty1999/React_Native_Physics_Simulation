import React from "react";
import Animated, { useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated";
import { StyleSheet, View } from 'react-native';

const Ball = (props: any) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const angle = props.body.angle;

  const styles = StyleSheet.create({
    view: {
      position: "absolute",
      borderRadius: 50,
      // left: x,
      // top: y,
      width: width,
      height: height,
      backgroundColor: props.color || "pink",
      transform: [{ rotate: angle + "rad" }],
    },
  })

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      left: x,
      top: y,
      // transform: [
      //     { translateX: ballXPosition.value },
      //     { translateY: ballYPosition.value },
      // ],
    }
  })


  // const animatedStyles = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ rotate: angle + "rad" }],
  //   };
  // });

  return (
    <Animated.View
      style={[styles.view, reanimatedStyle]}
    />
  );
};

const Floor = (props: any) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const angle = props.body.angle;

  const styles = StyleSheet.create({
    view: {
      position: "absolute",
      left: x,
      top: y,
      width: width,
      height: height,
      backgroundColor: props.color || "pink",
      transform: [{ rotate: angle + "rad" }],
    },
  })

  return (
    <Animated.View
      style={[styles.view]}
    />
  );
};

const mugBottom = (props: any) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y;
  const angle = props.body.angle;

  const styles = StyleSheet.create({
    bottom: {
      position: "absolute",
      left: x - 3 * width,
      top: y - width / 2,
      width: 7 * width,
      height: width,
      backgroundColor: props.color || "pink",
      // transform: [{ rotate: angle + "rad" }],
    },
  })

  return (
    <>
      <Animated.View
        style={[styles.bottom]}
      />
      {/* <View
        style={[styles.left]}
      />
      <View
        style={[styles.right]}
      /> */}
    </>
  );
};

const mugWall = (props: any) => {
  const label = props.label;
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y;
  const angle = props.body.angle;

  const styles = StyleSheet.create({
    left: {
      position: "absolute",
      left: x,
      top: y - height / 2,
      width: width,
      height: height,
      backgroundColor: "green" || "pink",
      // transform: [{ rotate: angle + "rad" }],
    },
    right: {
      position: "absolute",
      left: x,
      top: y - height / 2,
      width: width,
      height: height,
      backgroundColor: "red" || "pink",
      // transform: [{ rotate: angle + "rad" }],
    },
  })

  return (
    <>
      {label === "leftWall" ?
        <Animated.View
          style={[styles.left]}
        /> :
        <Animated.View
          style={[styles.right]}
        />
      }
    </>
  );
};

export { Ball, Floor, mugWall, mugBottom };

