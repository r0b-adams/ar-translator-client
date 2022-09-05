import { FontAwesome } from '@expo/vector-icons';

const HomeIcon = ({ focused }) => (
  <FontAwesome name='home' size={24} color={focused ? '#108CC6' : 'black'} />
);

export default HomeIcon;
