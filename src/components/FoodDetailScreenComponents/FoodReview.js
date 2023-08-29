import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FoodReview = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: review.userDp }} style={styles.userDp} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{review.userName}</Text>
          <Text style={styles.time}>{review.time}</Text>
        </View>
      </View>
      <Text style={styles.reviewText}>{review.review}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userDp: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  reviewText: {
    fontSize: 16,
    color: '#333',
  },
});

export default FoodReview;
