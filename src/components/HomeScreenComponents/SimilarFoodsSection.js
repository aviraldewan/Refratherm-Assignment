import React from 'react';
import { View, Text, FlatList } from 'react-native';
import FoodCard from './FoodCard';

const SimilarFoodsSection = ({ similarFoods, navigateToDetail }) => {
  if (similarFoods.length === 0) {
    return null;
  }

  return (
    <View>
      <Text style={styles.similarFoodHeader}>Similar to this</Text>
      <FlatList
        data={similarFoods}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FoodCard
            food={item}
            onPress={() => navigateToDetail(item)}
          />
        )}
      />
    </View>
  );
};

const styles = {
  similarFoodHeader: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default SimilarFoodsSection;
