import { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import AppContext from '../../store/context';
import { logout } from '../../store/thunks';

import styles from './styles';

const Settings = ({ navigation }) => {
  const [, dispatch] = useContext(AppContext);

  return (
    <View style={styles.screen}>
      <Text>Settings</Text>
      <Button title='Logout' onPress={() => dispatch(logout())} />
    </View>
  );
};

export default Settings;
