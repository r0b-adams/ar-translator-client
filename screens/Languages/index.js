import { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import AppContext from '../../store/context';
import { setSelectedlanguage } from '../../store/actions';

import styles from './styles';

const Languages = ({ navigation }) => {
  const [state, dispatch] = useContext(AppContext);

  const selectLanguage = (language) => {
    dispatch(setSelectedlanguage(language));
    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={state.languages}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.language}
              onPress={() => selectLanguage(item)}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Languages;
