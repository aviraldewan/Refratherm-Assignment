import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Switch } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FilterOptions = ({ onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [specialty, setSpecialty] = useState(null);
  const [rating, setRating] = useState(null);
  const [isVeg, setIsVeg] = useState(null);

  const toggleFilterPanel = () => {
    setShowFilters(!showFilters);
  };

  const applyFilters = () => {
    const filters = {
      specialty,
      rating,
      isVeg,
    };
    onFilterChange(filters);
    toggleFilterPanel();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleFilterPanel} style={styles.filterButton}>
        <FontAwesome name="filter" size={20} color="gray" />
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>
      {showFilters && (
        <View style={styles.filterPanel}>
          <Text style={styles.filterLabel}>Specialty:</Text>
          <TextInput
            style={styles.filterInput}
            placeholder="Enter specialty"
            value={specialty}
            onChangeText={setSpecialty}
          />
          <Text style={styles.filterLabel}>Rating:</Text>
          <TextInput
            style={styles.filterInput}
            placeholder="Enter rating"
            value={rating}
            onChangeText={setRating}
            keyboardType="numeric"
          />

          <Text style={styles.filterLabel}>Veg/Non-Veg:</Text>
          <Switch
            value={isVeg}
            onValueChange={setIsVeg}
            style={styles.switch}
          />
          
          <View style={styles.filterButtons}>
            <TouchableOpacity onPress={applyFilters} style={styles.applyButton}>
              <Text style={styles.buttonText}>Apply</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleFilterPanel} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  filterButtonText: {
    marginLeft: 5,
    color: 'gray',
  },
  filterPanel: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginTop: 10,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  filterInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
  },
  switch: {
    marginBottom: 10,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  applyButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FilterOptions;
