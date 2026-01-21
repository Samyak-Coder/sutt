import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home'
import Dailies from '../screens/Dailies'
import ToDo from '../screens/ToDo'
import Rewards from '../screens/Rewards'
import Settings from '../screens/Settings'
const Stack = createNativeStackNavigator();


export default function StackNavigator() {
      return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Dailies" component={Dailies} />
          <Stack.Screen name="ToDo" component={ToDo} />
          <Stack.Screen name="Rewards" component={Rewards} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
        </NavigationContainer>
      );
    }