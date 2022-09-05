import { Ionicons } from '@expo/vector-icons';

const CameraIcon = ({ focused }) => (
  <Ionicons
    name='camera-sharp'
    size={24}
    color={focused ? '#108CC6' : 'black'}
  />
);

export default CameraIcon;
