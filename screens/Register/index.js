import { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';

import AppContext from '../../store/context';
import { register } from '../../store/thunks';

import styles from './styles';

const Register = () => {
  const [, dispatch] = useContext(AppContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submit = () => {
    dispatch(register({ username, email, password }));
  };

  return (
    <View>
      <TextInput
        placeholder='username'
        value={username}
        onChangeText={setUsername}
      />

      <TextInput placeholder='email' value={email} onChangeText={setEmail} />

      <TextInput
        placeholder='password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Register' onPress={submit} />
    </View>
  );
};

export default Register;
