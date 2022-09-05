import { Ionicons } from '@expo/vector-icons';

const SettingsIcon = ({ focused }) => (
  <Ionicons name='settings' size={24} color={focused ? '#108CC6' : 'black'} />
);

export default SettingsIcon;
