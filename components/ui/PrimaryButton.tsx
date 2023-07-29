import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import Colors from "../../constants/colors";

interface IProps {
  children?: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

function PrimaryButton(props: IProps) {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        onPress={props.onClick}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.btnText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    width: "50%",
  },
  btnInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
