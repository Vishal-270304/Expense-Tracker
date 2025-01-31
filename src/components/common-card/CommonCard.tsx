import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Common } from '@/src/types/CommonInterface';
import {Tag, Button} from 'react-native-magnus'
import AntDesign from '@expo/vector-icons/AntDesign';

const CommonCard = ({ id, place,times }: Common) => {
  return (
    <View style={styles.container}>


      <View style={styles.timesContainer}>
      <Text style={styles.place}>{place}</Text>
      
      
      <Tag
        ml="sm"
        bg="yellow300"
        borderColor="yellow700"
        borderWidth={1}
      >
        <AntDesign name="eye" size={18} style={{marginRight:5}} color="black" />
        <Text style={styles.times}> : {times}</Text>
      </Tag>

      </View>
      <Button
        bg="blue500"
        py="lg"
        px="xl"
        mt="md"
        rounded="circle"
        onPress={() => {
          console.log('Check data pressed');
        }}
      >
        Previous data
      </Button>
    </View>
  )
}

export default CommonCard


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  place: {
    fontSize: 16,
    fontWeight: 'bold',
  },
times: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  timesContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gradientButton: {
    padding: 12,
    borderRadius: 8,
    alignItems:"center",
    backgroundColor: 'blue',
    marginTop: 15,
    width: '40%',
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
})
