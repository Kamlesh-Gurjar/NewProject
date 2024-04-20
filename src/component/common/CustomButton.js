import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = ({btnname,onPress}) => {
  return (
    <TouchableOpacity activeOpacity={.7} onPress={onPress} style={styles.btnbackgroung}>
      <Text style={styles.btnname}>{btnname}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  btnbackgroung: {
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    marginTop:15,
    borderRadius:10
  },
  btnname: {
    color:"#fff"
  },
});
