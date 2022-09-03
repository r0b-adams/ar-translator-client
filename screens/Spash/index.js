import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

const Splash = () => {
  return (
    <View style={styles.screen}>
      <ActivityIndicator />
    </View>
  );
};

export default Splash;
