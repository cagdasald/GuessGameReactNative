import { StyleSheet, Text } from 'react-native'
import React, { ReactNode } from 'react'
import Colors from '../../constants/colors';

interface IProps {
    children?: ReactNode;
  }

const Title = (props: IProps) => {
  return (
    <Text style={styles.title} >{props.children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: Colors.white,
      textAlign: "center",
      borderWidth: 2,
      borderColor: Colors.white,
      padding: 12,
    },
});