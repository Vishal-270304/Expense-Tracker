import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import SplitDataCard from '@/src/components/splitdata-card/SplitDataCard';
import AddSplitDataModal  from '@/src/components/modals/AddSplitDataModal';

export default function SplitData() {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Split Data History!</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {setIsVisible(true)}}
        >
          <Text style={styles.buttonText}>Add Split Data</Text>
        </TouchableOpacity>
      </View>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40}} 
      >
          <SplitDataCard whoOwes='Vishal' amount={120} date='19-01-2025' toWhomOwes='Keshav' status='Paid'/>
        <SplitDataCard whoOwes='Keshav' amount={220} date='17-01-2025' toWhomOwes='Vishal' status='Unpaid'/>
        <SplitDataCard whoOwes='Keshav' amount={3000} date='15-01-2025' toWhomOwes='Sahil' status='Paid'/>
        <SplitDataCard whoOwes='Sahil' amount={50} date='2-01-2025' toWhomOwes='Garvit' status='Unpaid'/>
        <SplitDataCard whoOwes='Garvit' amount={400} date='6-01-2025' toWhomOwes='Keshav' status='Paid'/>
        <SplitDataCard whoOwes='Keshav' amount={20} date='8-01-2025' toWhomOwes='Garvit' status='Unpaid'/>
      </ScrollView>
      <AddSplitDataModal isVisible={isVisible} onClose={() => {setIsVisible(false)}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
