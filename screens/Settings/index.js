import { useContext } from 'react';
import { View, Button } from 'react-native';

import AppContext from '../../store/context';
import { logout } from '../../store/thunks';

import styles from './styles';

const Settings = () => {
  const [, dispatch] = useContext(AppContext);

  return (
    <View style={styles.screen}>
      <Button
        title='Logout'
        color='#108CC6'
        onPress={() => dispatch(logout())}
      />
    </View>
  );
};

export default Settings;
