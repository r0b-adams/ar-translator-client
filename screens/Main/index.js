import { useState, useRef } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

import api from '../../utils/api';
import styles from './styles';

const LANG_TO = 'en';

const Main = () => {
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [permission, grantPermission] = Camera.useCameraPermissions();

  // need a ref because methods are bound to the Camera component
  const cam = useRef(null);

  const toggleCameraType = () => {
    setCameraType((type) =>
      type === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const analyze = async () => {
    try {
      if (!cameraReady) {
        throw new Error('Failed to take photo; Camera failed to mount');
      }

      const { base64 } = await cam.current.takePictureAsync({ base64: true });
      const { data } = await api.analyze(base64, LANG_TO);

      console.log(data);
    } catch (error) {
      console.error(error.message);
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
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={grantPermission} title='grant permission' />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cam}
        style={styles.camera}
        type={cameraType}
        ratio='16:9'
        onCameraReady={() => setCameraReady(() => true)}
        onMountError={() => console.log('CAMERA MOUNT ERROR')}
      >
        <View style={styles.buttonContainer}>
          <Buttons toggleCameraType={toggleCameraType} analyze={analyze} />
        </View>
      </Camera>
    </View>
  );
};

const Buttons = ({ analyze, toggleCameraType }) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
        <Text style={styles.text}>Flip Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={analyze}>
        <Text style={styles.text}>Take Photo</Text>
      </TouchableOpacity>
    </>
  );
};

export default Main;
