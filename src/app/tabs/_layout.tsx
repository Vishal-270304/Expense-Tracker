import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';


export default function Layout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: styles.tabBarStyle,
      headerShown: false
    }}>
      <Tabs.Screen
        name="all-expenses/all-expenses"
        options={{
          headerShown: false,
          tabBarLabel: 'All Expenses',
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={styles.tabBarStyle.fontSize} color={"blue"} />
          ),
        }}
      />
      <Tabs.Screen
        name="common-expenses/common-expenses" 
        options={{
          headerShown: false,
          tabBarLabel: 'Common Expenses',
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={styles.tabBarStyle.fontSize} color={"blue"} />
          ),
        }}
      />

      <Tabs.Screen
        name="split-data/split-data"
        options={{
          headerShown: false,
          tabBarLabel: 'Split History',
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={styles.tabBarStyle.fontSize} color={"blue"} />
          ),
        }}
      />

    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    fontSize: 24,
  },
});
