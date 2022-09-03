import { useState, useContext } from 'react';
import { View, TouchableOpacity, Text, TextInput, Button } from 'react-native';

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
    <View style={styles.screen}>
      <View style={styles.form}>
        <View>
          <TextInput
            style={styles.input}
            placeholder='enter a username...'
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder='enter a password...'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title='Login' color='#108CC6' onPress={submit} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.register}
        onPress={() => navigation.navigate('Register')}
      >
        <Text>
          No account? <Text style={styles.link}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
