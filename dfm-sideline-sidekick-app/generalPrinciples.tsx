import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GeneralPrinciples = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>General Principles</Text>
      <Text>content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    textAlign: 'left',
  },
  title: {
    color: '#182B49',    
    fontSize: 32,        
    fontFamily: 'Roboto', 
    fontWeight: '700',    
    marginBottom: 20, 
    textAlign: 'left'   
  },
});

export default GeneralPrinciples;
