import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import Colors from '../../constants/colors'

interface IProps {
  children?: ReactNode;
}

const Card = (props: IProps) => {
  return (
    <View style={styles.inputContainer}>
        {props.children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.35,
    width: "80%",
  },
});