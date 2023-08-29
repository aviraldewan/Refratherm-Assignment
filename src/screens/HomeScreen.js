import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Keyboard, StyleSheet } from 'react-native';
import FoodCard from '../components/HomeScreenComponents/FoodCard';
import SearchBar from '../components/HomeScreenComponents/SearchBar';
import SimilarFoodsSection from '../components/HomeScreenComponents/SimilarFoodsSection';
import FilterOptions from '../components/HomeScreenComponents/FilterOptions';
import { foodData } from '../data/foodData';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(foodData);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const navigateToDetail = (food) => {
    navigation.navigate('FoodDetail', { food });
  };

  const handleSearch = (query) => {
    const filtered = foodData.filter(food =>
      food.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredData(foodData);
  };

  const renderResultsInfo = () => {
    if (searchQuery === '') {
      return null;
    }

    if (filteredData.length === 0) {
      return <Text style={styles.noResults}>No results found</Text>;
    }

    return <Text style={styles.resultsInfo}>Results: {filteredData.length}</Text>;
  };

  const handleFilterChange = (filters) => {
    
    let updatedData = foodData;

    if (filters.specialty) {
      updatedData = updatedData.filter(food => 
        food.specialty.toLowerCase() === filters.specialty.toLowerCase()
      );
    }

    if (filters.rating) {
      updatedData = updatedData.filter(food =>
        food.rating >= filters.rating
      );
    }

    if (filters.isVeg !== null) {
      updatedData = updatedData.filter(food =>
        filters.isVeg ? food.isVeg : !food.isVeg
      );
    }

    setFilteredData(updatedData);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          handleSearch(text);
        }}
        onClear={clearSearch}
      />
      <FilterOptions onFilterChange={handleFilterChange} />
      {renderResultsInfo()}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FoodCard
            food={item}
            onPress={() => navigateToDetail(item)}
          />
        )}
      />
      {!keyboardVisible && searchQuery !== '' && (
        <SimilarFoodsSection
          similarFoods={filteredData.filter(food =>
            food.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            food.title.toLowerCase() !== searchQuery.toLowerCase()
          )}
          navigateToDetail={navigateToDetail}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  resultsInfo: {
    marginLeft: 20,
    marginBottom: 10,
    color: 'green',
    fontSize: 14,
  },
  noResults: {
    marginLeft: 20,
    marginBottom: 10,
    color: 'red',
    fontSize: 14,
  },
});

export default HomeScreen;
