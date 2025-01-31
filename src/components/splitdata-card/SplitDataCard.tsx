import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SplitData } from '@/src/types/SplitDataInterface';
import { Tag } from 'react-native-magnus';
import AntDesign from '@expo/vector-icons/AntDesign';

const SplitDataCard = ({ id, whoOwes, toWhomOwes, amount, date, status }: SplitData) => {
  return (
    <View style={styles.container}>
      <View style={styles.timesContainer}>
        <Text style={styles.place}>{whoOwes} owes {toWhomOwes} : ₹{amount}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Tag bg="green300" borderColor="green700" borderWidth={1} mt="sm">
          <Text>{status}</Text>
        </Tag>
        <AntDesign name="edit" onPress={() => {
          console.log('Edit data pressed');
        }} size={24} color="black" />
      </View>
    </View>
  )
}

export default SplitDataCard


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  // expenseCard: {
  //   backgroundColor: 'white',
  //   padding: 10,
  //   borderRadius: 10,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
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
    // fontWeight: 'bold',
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
  },
  statusContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status:{
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
