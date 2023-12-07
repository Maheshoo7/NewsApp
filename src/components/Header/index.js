import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.brandName}>NewsApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191717',
    height: 60,
  },
  brandName: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
});

export default Header;
