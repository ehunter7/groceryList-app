import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

{
  /* <KeyboardAvoidingView
behavior={Platform.OS === 'ios' ? 'position' : 'height'}
enabled={true}
> */
}

function KeyboardAvoidingWrapper({ children }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default KeyboardAvoidingWrapper;
