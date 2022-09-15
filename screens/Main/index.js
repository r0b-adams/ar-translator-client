import { useRef, useContext } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Camera, CameraType } from 'expo-camera';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import { setImgData } from '../../store/actions';
import AppContext from '../../store/context';

import styles from './styles';

const Main = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [state, dispatch] = useContext(AppContext);
  const [permission, grantPermission] = Camera.useCameraPermissions();

  // need a ref because methods are bound to the Camera component
  const cam = useRef(null);
  const ready = useRef(false);

  const analyze = async () => {
    try {
      if (!ready.current) throw new Error('camera not mounted');
      const { uri, base64 } = await cam.current.takePictureAsync({
        base64: true,
      });
      dispatch(setImgData(base64));
      navigation.navigate('Localizer', { uri });
    } catch (error) {
      console.error(error.message);
      navigation.navigate('Home');
    }
  };

  // camera permissions are still loading
  if (!permission) {
    return <View />;
  }

  // camera permissions are not granted yet
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={grantPermission} title='grant permission' />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isFocused && (
        <Camera
          ref={cam}
          style={styles.camera}
          type={CameraType.back}
          ratio='16:9'
          onCameraReady={() => (ready.current = true)}
          onMountError={() => console.error('CAMERA MOUNT ERROR')}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}
            >
              <FontAwesome name='home' size={36} color='#fff' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={analyze}>
              <MaterialIcons name='camera' size={48} color='#fff' />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Languages')}
            >
              <Text style={styles.text}>{state.selectedLanguage.name}</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
};

export default Main;
