import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ value, onChangeText, onClear }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name"
        value={value}
        onChangeText={onChangeText}
      />
      {value !== '' && (
        <TouchableOpacity onPress={onClear} style={styles.clearButton}>
          <FontAwesome name="times-circle" size={24} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 16,
  },
  clearButton: {
    padding: 10,
  },
});

export default SearchBar;
