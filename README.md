# Overview
Tired of dealing with the inconsistent behavior of KeyboardAvoidingView in React Native? Introducing react-native-keyboard-aware, a lightweight npm package designed to seamlessly manage the keyboard state and provide accurate keyboard offsets for your React Native applications.

# Installation

npm i --save react-native-keyboard-aware

# Features

* isKeyboardVisible : whether the keyboard is visible at the moment.
* keyboardOffset : height of the keyboard so that ui elements can be placed to always avoid the keyboard

# Usage

~~~~
import React from "react";
import { Text, TextInput, View } from "react-native";
import useKeyboard from "react-native-keyboard-aware";

const App = () => {
  const {isKeyboardVisible, keyboardOffset} = useKeyboard({android: false});

  return (
    <View style={{flex: 1}}>
       <Text>Keyboard visibility: {String(isKeyboardVisible)}</Text>
       <View style={{position: "absolute", bottom: keyboardOffset}}>
       {/* Text input will be above the keyboard at all times */}
        <TextInput style={{width: "100%"}}></TextInput>
       </View>
    </View>
  );
}

export default App;
~~~~

# Options
~~~
useKeyboard({
  // If AndroidManifest windowSoftInputMode is set to 'adjustResize' set this to false
  // If set to false keyboardOffset will always return 0 on android
  android: false
})
~~~