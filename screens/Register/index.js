import { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';

import AppContext from '../../store/context';
import { register } from '../../store/thunks';

import Splash from '../Spash';
import styles from './styles';

const Register = () => {
  const [state, dispatch] = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const clearInputs = () => {
    setUsername(() => '');
    setPassword(() => '');
    setEmail(() => '');
  };

  const submit = () => {
    clearInputs();
    dispatch(register({ username, email, password }));
  };

  return state.fetching ? (
    <Splash />
  ) : (
    <View style={styles.screen}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='enter a username...'
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder='enter an email...'
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder='enter a password...'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title='Register' color='#108CC6' onPress={submit} />
      </View>
    </View>
  );
};

export default Register;
