import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

import styles from './styles';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View>
      <TextInput
        placeholder='username'
        value={username}
        onChangeText={setUsername}
      />

      <TextInput placeholder='email' value={email} onChangeText={setUsername} />

      <TextInput
        placeholder='password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Register' onPress={() => console.log('REGISTER')} />
    </View>
  );
};

export default Register;
