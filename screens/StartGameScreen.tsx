import React, { useState } from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

interface IProps {
  onPickNumber: (pickedNumber: number) => void;
}

const StartGameScreen = (props: IProps) => {
  const [enteredValue, setEnteredValue] = useState("");

  function numberInputHandler(inputText: string) {
    setEnteredValue(inputText);
  }

  function resetInputHandler() {
    setEnteredValue("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInputHandler,
        },
      ]);
      return;
    }

    props.onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberIput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.btnContainer}>
          <PrimaryButton onClick={resetInputHandler}>Reset</PrimaryButton>
          <PrimaryButton onClick={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberIput: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
