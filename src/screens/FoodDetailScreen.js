import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 

import FoodDetail from '../components/FoodDetailScreenComponents/FoodDetail';
import FoodCard from '../components/HomeScreenComponents/FoodCard';
import { foodData } from '../data/foodData';

const FoodDetailScreen = ({ route, navigation }) => {
  const { food } = route.params;

  const similarFoods = foodData.filter(
    (item) => item.id !== food.id
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FoodDetail food={food} navigation={navigation} />
    </SafeAreaView>
  );
};

export default FoodDetailScreen;
