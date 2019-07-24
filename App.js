import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <KeyboardAvoidingView behavior="padding" enabled></KeyboardAvoidingView>
      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
