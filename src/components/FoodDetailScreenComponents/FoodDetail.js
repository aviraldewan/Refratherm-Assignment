import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import FoodReview from './FoodReview';
import SimilarFoodsSection from '../HomeScreenComponents/SimilarFoodsSection';
import { foodData } from '../../data/foodData'; 

const FoodDetail = ({ food, navigation }) => {

  const navigateToDetail = (food) => {
    navigation.navigate('FoodDetail', { food });
  };

  function calculateIngredientSimilarity(foodA, foodB) {
    const commonIngredients = foodA.ingredients.filter(ingredient => foodB.ingredients.includes(ingredient));
    return commonIngredients.length;
  }

  const maxResults = 3;

  return (
    <ScrollView style={styles.scrolleViewContainer}>
      <View style={styles.container}>
      <Image source={{ uri: food.imageSource }} style={styles.image} />
      <Text style={styles.title}>{food.title}</Text>
      <Text style={styles.price}>Price: ${food.price}</Text>
      <Text style={styles.price}>ID: {food.id}</Text>
      <Text style={styles.ingredients}>Ingredients: {food.ingredients.join(', ')}</Text>
      <Text style={styles.rating}>Rating: {food.rating}/5</Text>
      <Text style={styles.reviewsHeader}>Reviews:</Text>
      <View style={styles.reviewsContainer}>
        {food.reviews.map((review, index) => (
          <FoodReview key={index} review={review} />
        ))}
      </View>
      <SimilarFoodsSection
        similarFoods={foodData
          .filter(foodItem => foodItem.id !== food.id)
          .map(foodItem => ({
            ...foodItem,
            similarityScore: calculateIngredientSimilarity(food, foodItem),
          }))
          .sort((a, b) => b.similarityScore - a.similarityScore)
          .slice(0, maxResults)}
        navigateToDetail={navigateToDetail}
        />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  scrolleViewContainer: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    marginBottom: 8,
  },
  ingredients: {
    fontSize: 16,
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    marginBottom: 8,
  },
  reviewsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reviewsContainer: {
    marginLeft: 16,
  },
});

export default FoodDetail;
