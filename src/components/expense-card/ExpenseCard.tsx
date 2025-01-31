import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Expense } from '@/src/types/ExpensesInterface';

const ExpenseCard = ({ id, name, amount, date, place,times }: Expense) => {
  return (
    <View style={styles.container}>

      <View style={styles.timesContainer}>
      <Text style={styles.place}>{place}</Text>
      <Text style={styles.amount}>{times}</Text>
      </View>
      <View style={styles.expenseCard}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.amount}>₹{amount}</Text>
      </View>
        <Text style={styles.date}>{date}</Text>
    </View>
  )
}

export default ExpenseCard


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  expenseCard: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  place: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  name:{
    fontSize: 14,
    marginLeft: -10,
    width: '85%',
  },
  amount: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: -10,
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  times: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  timesContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})
