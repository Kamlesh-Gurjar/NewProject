import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoFocus,
  inputname,
  otherstyle,
  maxLength,
  onPress,
  multiline
}) => {
   

  return (
    <View style={[{marginTop: 15}, otherstyle]}>
      <Text style={styles.inputtopname}>{inputname}</Text>
      <View style={styles.inputstyle}>
        <TextInput
          placeholder={placeholder}
          value={value}
          style={styles.input}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          placeholderTextColor={'#ccc' || placeholderTextColor}
          maxLength={maxLength}
          multiline={multiline}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={onPress}>
            <Text style={{color: 'red'}}>Show</Text>
          </TouchableOpacity>
        )  }
      </View>
    </View>
  );
};

export default CustomInput;
const styles = StyleSheet.create({
  inputtopname: {color: '#000'},
  inputstyle: {
    borderColor: '#ccc',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    color: '#000',
    width:"80%"
  },
});

// import { createSlice, configureStore } from '@reduxjs/toolkit'

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0
//   },
//   reducers: {
//     incremented: state => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decremented: state => {
//       state.value -= 1
//     }
//   }
// })

// export const { incremented, decremented } = counterSlice.actions

// const store = configureStore({
//   reducer: counterSlice.reducer
// })

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}
