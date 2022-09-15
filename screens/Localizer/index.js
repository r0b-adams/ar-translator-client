import { useEffect, useContext } from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  Alert,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppContext from '../../store/context';
import { setImgData } from '../../store/actions';
import api from '../../utils/api';
import styles from './styles';

const Localizer = ({ route, navigation }) => {
  const [state, dispatch] = useContext(AppContext);
  const { height, width } = useWindowDimensions();
  console.log(height, width);

  useEffect(() => {
    fetchImageData();
  }, []);

  const clearImgData = () => {
    dispatch(setImgData(''));
  };

  const fetchImageData = async () => {
    const { data } = await api.analyze(
      state.lastImageB64,
      state.selectedLanguage.code
    );

    if (data.length) {
      console.log('results:', data);
      Alert.alert('results', JSON.stringify(data, null, 2), [{ text: 'OK' }]);
    }
    clearImgData();
  };

  return (
    <>
      <Image style={styles.screen} source={{ uri: route.params.uri }} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          margin: 20,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: 'white', fontSize: 22 }}>{'<'}</Text>
        <Ionicons name='camera-sharp' size={48} color='white' />
      </TouchableOpacity>
    </>
  );
};

export default Localizer;
