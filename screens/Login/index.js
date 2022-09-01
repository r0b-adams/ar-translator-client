import { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';

import AppContext from '../../store/context';
import { login } from '../../store/thunks';

import styles from './styles';

const Login = ({ navigation }) => {
  const [, dispatch] = useContext(AppContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    dispatch(login({ username, password }));
  };

  return (
    <View>
      <TextInput
        placeholder='username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder='password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Login' onPress={submit} />

      <Button
        title='Register'
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;
