import { useState, useRef, useContext } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

import Splash from '../Spash';
import api from '../../utils/api';
import AppContext from '../../store/context';

import styles from './styles';

const Main = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [state] = useContext(AppContext);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [permission, grantPermission] = Camera.useCameraPermissions();

  // need a ref because methods are bound to the Camera component
  const cam = useRef(null);
  const ready = useRef(false);

  const toggleCameraType = () => {
    setCameraType((type) =>
      type === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const analyze = async () => {
    try {
      if (!ready.current) {
        throw new Error('Failed to take photo; Camera not mounted');
      }
      const { base64 } = await cam.current.takePictureAsync({ base64: true });
      const { data } = await api.analyze(base64, state.selectedLanguage.code);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // camera permissions are still loading
  if (!permission) {
    return <Splash />;
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
          type={cameraType}
          ratio='16:9'
          onCameraReady={() => (ready.current = true)}
          onMountError={() => console.log('CAMERA MOUNT ERROR')}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Ionicons name='camera-reverse' size={36} color='white' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={analyze}>
              <MaterialIcons name='camera' size={48} color='white' />
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
