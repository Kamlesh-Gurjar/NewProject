import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import {View, Text, StatusBar, KeyboardAvoidingView} from 'react-native';
import {styles} from './styles';
import CustomInput from '../../component/common/customComponets/CustomInput';
import CustomButton from '../../component/common/CustomButton';
const Login = ({navigation}) => {
  const [phoneemail, setPhoneEmial] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleLogin = () => {
    if (!username.trim()) {
      setError('Please enter your username');
      return;
    }

    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }

    // Perform login authentication here
    // For simplicity, I'm just logging the username and password
    console.log('Username:', username);
    console.log('Password:', password);

    // Clearing the input fields and error state after successful login
    setUsername('');
    setPassword('');
    setError('');
  };
  const onEmaiPhone = text => {
    setPhoneEmial(text);
  };
  const onPassword = text => {
    setPassword(text);
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
            <CheckBox
              onClick={() => setChecked(!checked)}
              isChecked={checked}
            />
            <Text style={{color: '#ddd', marginLeft: 10}}>
              Keep me signed in
            </Text>
          </View>
          <Text style={styles.forgotpassword}>Forgot password?</Text>
        </View>
        <CustomButton btnname={'Login'} />
        <Text style={styles.bottomtext}>
          Already have an account ?
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={{color: 'skyblue'}}>
            Sign Up
          </Text>
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
