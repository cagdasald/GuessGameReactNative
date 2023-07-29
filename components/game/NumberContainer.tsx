import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import Colors from "../../constants/colors";

interface IProps {
  children?: ReactNode;
}

const NumberContainer = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    // you don't need to use it anymore because we added the font family in bold --- fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
