import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import Colors from "../../constants/colors";

interface IProps {
  children?: ReactNode;
  style?: object;
}

const InstructionText = (props: IProps) => {
  return <Text style={[styles.inputTitle, props.style]}>{props.children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  inputTitle: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
