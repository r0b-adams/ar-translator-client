import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

import styles from './styles';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Login' onPress={() => console.log('LOG IN')} />
      <Button
        title='Register'
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;
