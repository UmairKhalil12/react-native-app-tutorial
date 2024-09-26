import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import InputForm from '../../../components/InputForm/InputForm';
import NavigationStrings from '../../../constants/NavigationStrings';
// import imgPaths from '../../../constants/imgPaths';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(true);


  const handlePassword = () => {
    setHidden(!hidden);
  }

  const handleLoginButton = async () => {
    if (email !== '' && password !== '') {
      Alert.alert(`Login Sucessfull ${email}`);
      console.log('email checking', email);
      await AsyncStorage.setItem('email', email);
      const value = await AsyncStorage.getItem('email');
      console.log('email login console', value);
      // console.log('email', AsyncStorage.getItem('email'));
    }
    else {
      Alert.alert('Error', 'email and password are required');
    }
  }

  return (
    <SafeAreaView style={styles.loginView}>
      <Text style={styles.heading} >Login</Text>
      <InputForm
        value={email}
        onChangeText={(e) => setEmail(e)}
        placeholder='Enter Mobile Phone or Number'
        placeholderTextColor='#8F8989'
        keyboardType='email-address'
      />

      <InputForm
        value={password}
        onChangeText={(e) => setPassword(e)}
        placeholder='Enter Password'
        placeholderTextColor='#8F8989'
        secureTextEntry={hidden}
        iconSource={hidden ? 'visibility-off' : 'visibility'}
        OnPress={handlePassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLoginButton} >
        <Text style={styles.loginButtonText} >Log in</Text>
      </TouchableOpacity>

      <Text style={styles.forgettenPass}>Forgetten password?</Text>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.lineOr} >Or</Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity style={styles.signupBtn} >
        <Text style={styles.signupBtnText} > Create new account </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login

