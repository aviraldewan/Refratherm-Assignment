import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FoodCard = ({ food, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={styles.card}>
        <Image source={{ uri: food.imageSource }} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{food.title}</Text>
          <Text style={styles.description}>{food.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    color: 'gray',
  },
});

export default FoodCard;
