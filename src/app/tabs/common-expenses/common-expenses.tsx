import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CommonCard from '@/src/components/common-card/CommonCard';

export default function CommonExpenses() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.text}>Some Common Expenses!</Text>
      </View>
      <ScrollView  showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40}} >
      <CommonCard place='Ganpati Chaap' times='2'/>
      <CommonCard place='Vishal Soup' times='1'/>
      <CommonCard place='Veg Biryani' times='1'/>
      <CommonCard place='Rokka' times='3'/>
      <CommonCard place='Gujrati Soda' times='2'/>
      <CommonCard place='Dheela Kachori' times='1'/>
      </ScrollView>
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
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
