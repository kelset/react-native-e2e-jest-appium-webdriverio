/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';

// export const testProps = (testID: string) => {
//   if (isIOS) {
//     return {
//       testID,
//       accessible: false,
//     };
//   }

//   return {
//     accessible: true,
//     accessibilityLabel: testID,
//   };
// };

const App: () => Node = () => {
  const [username, setUsername] = React.useState('username');
  const [password, setPassword] = React.useState('password');
  const [login, setLogin] = React.useState(false);

  return (
    <SafeAreaView
      style={styles.backgroundStyle}
      testID="app-root"
      accessibilityLabel="app-root">
      <StatusBar barStyle="dark-content" />

      <View style={styles.inputContainer}>
        <TextInput
          name="username"
          accessibilityLabel="username"
          placeholder={username}
          placeholderTextColor="#003f5c"
          style={styles.inputText}
          onChangeText={usr => setUsername(usr)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          name="password"
          accessibilityLabel="password"
          secureTextEntry={true}
          placeholder={password}
          placeholderTextColor="#003f5c"
          style={styles.inputText}
          onChangeText={pwd => setPassword(pwd)}
        />
      </View>

      <Text accessibilityLabel="loginStatus" style={styles.loginStatus}>
        {login ? 'success' : 'fail'}
      </Text>

      <Pressable
        style={styles.buttonContainer}
        accessibilityLabel="login"
        onPress={() => setLogin(!login)}>
        <Text style={styles.textStyle}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#003f5c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
  },
  loginStatus: {
    fontSize: 30,
    color: 'white',
  },
  inputContainer: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  buttonContainer: {
    width: '80%',
    backgroundColor: '#3CB371',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});

export default App;
