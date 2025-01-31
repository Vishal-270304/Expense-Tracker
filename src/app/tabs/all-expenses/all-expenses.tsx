import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import ExpenseCard from '@/src/components/expense-card/ExpenseCard';
import AddExpenseModal from '@/src/components/modals/AddExpenseModal';

export default function AllExpenses() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>All Expenses!</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {setIsVisible(true)}}
        >
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>
      </View>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40}} 
      >
        <ExpenseCard name='Malai Chaap and Tandoori Chaap with Rumali Roti and Butter Naan' amount={420} date='19-01-2025' place='Ganpati Chaap'/>
        <ExpenseCard name='Chana Soup' amount={120} date='17-01-2025' place='Vishal Soup'/>
        <ExpenseCard name='Kadhi Chawal' amount={40} date='15-01-2025' place='The Rice Junction'/>
        <ExpenseCard name='Sevpuri' amount={50} date='2-01-2025' place='Company Park'/>
        <ExpenseCard name='Chole Bhature,Pav Bhaji,Dhokla,Kachori,Chilli Potato' amount={400} date='6-01-2025' place='Shree Bikanerwala , Bahadurgarh'/>
        <ExpenseCard name='Moth Kachori' amount={20} date='8-01-2025' place='Bahadurgarh'/>
      </ScrollView>
      <AddExpenseModal isVisible={isVisible} onClose={() => setIsVisible(false)}/>
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
