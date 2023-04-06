import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {GlobalStyles} from "./constants";
import {Ionicons} from "@expo/vector-icons"

import AllExpnasiesScreen from './screens/AllExpansies';
import ManageExpnasiesScreen from './screens/ManageExpansies';
import RecentExpnasiesScreen from './screens/RecentExpancies';
import IconButton from './components/ui/IconButton';
import ExpencesContextProvider from './store/expence-context';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const ExpenseOverView = () => {
  return <BottomTab.Navigator screenOptions={({navigation}) => ({
    headerStyle: {backgroundColor: GlobalStyles.colors.primary700},
    headerTintColor: "white",
    tabBarStyle:{backgroundColor: GlobalStyles.colors.primary700},
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    tabBarInactiveTintColor: GlobalStyles.colors.primary200,
    headerRight: ({ tintColor }) => (
       <IconButton icon={"add"} 
       color={tintColor} 
       size={24} 
       onPress={() => navigation.navigate("ManageExpanse")}
       />
    )
    
  })}>
    <BottomTab.Screen name="RecentExpanvies" component={RecentExpnasiesScreen} options={{
      title: "Recent Expencies",
      tabBarLabel: "Recent",
      tabBarIcon: ({color, size}) => <Ionicons color={color} size={size} name={"hourglass"}/>
    }}/>
    <BottomTab.Screen name='AllExpencies' component={AllExpnasiesScreen} options={{
      title: "All Expencies",
      tabBarLabel: "All",
      tabBarIcon: ({color, size}) => <Ionicons color={color} size={size} name={"calendar"}/>
    }}/>
  </BottomTab.Navigator>
}


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpencesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.primary700},
          headerTintColor: "white",
          presentation: "card"
        }}>
          <Stack.Screen name='ExpencesOverview' component={ExpenseOverView} options={{headerShown: false}}/>
          <Stack.Screen name='ManageExpanse' component={ManageExpnasiesScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ExpencesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
