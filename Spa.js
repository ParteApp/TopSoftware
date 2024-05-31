import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TabBar from './TabBar';

const Spa = () => {
  const navigation = useNavigation();

  const handleScrollToEnd = () => {
    navigation.navigate('TabBarPage'); // Replace with your actual TabBarPage screen name
  };

  return (
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (isCloseToBottom(nativeEvent)) {
          handleScrollToEnd();
        }
      }}
      scrollEventThrottle={400}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text>This is the Spa page</Text>
        {/* Add more content as needed */}
      </View>
      <TabBar />
    </ScrollView>
  );
};

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    // Add styles for your content container if needed
  },
});

export default Spa;
