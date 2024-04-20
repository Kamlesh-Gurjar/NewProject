import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Perform sign-up logic here
    // For simplicity, I'm just logging the username, email, and password
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Clearing the input fields and error state after successful sign-up
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <View style={styles.container}>
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Text style={styles.logintxt}> Login</Text>
      <Text style={styles.welcometxt}>Welcome back to the app</Text>
      <CustomInput
        otherstyle={{marginTop: 40}}
        value={phoneemail}
        inputname={'Phone/Email'}
        placeholder={'Email mail Id'}
        onChangeText={onEmaiPhone}
        keyboardType={'email-address'}
      />
      <CustomInput
        value={password}
        inputname={'Password'}
        placeholder={'Enter password'}
        onChangeText={onPassword}
        secureTextEntry={showPassword}
        maxLength={12}
        onPress={() => setShowPassword(!showPassword)}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.chackboxview}>
        <View style={styles.checkbox}>
          <CheckBox onClick={() =>  setChecked(!checked)} isChecked={checked} />
          <Text style={{color: '#ddd', marginLeft: 10}}>
            Keep me signed in
          </Text>
        </View>
        <Text style={styles.forgotpassword}>Forgot password?</Text>
      </View>
      <CustomButton btnname={'Login'} />
      <Text style={styles.bottomtext}>
        Already have an account ?
        <Text onPress={()=>navigation.navigate("SignUp")} style={{color: 'skyblue'}}>Sign Up</Text>
      </Text>
    </KeyboardAvoidingView>
  </View>
  );
};

 
export default SignUp;
