import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { HomeStackScreen } from '../stacks/HomeStack';
import Home from '../screens/Home'
import Dailies from '../screens/Dailies'
import ToDo from '../screens/ToDo'
import Rewards from '../screens/Rewards'
import Settings from '../screens/Settings'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

    const Tab = createBottomTabNavigator();

    export function BottomTabNavigator() {
      return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#8f5aed',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {backgroundColor: '#19171c', borderTopWidth: 0},
            
          }}

        >
          <Tab.Screen name="Home" component={Home} 
          options = {{
            tabBarIcon: ({focused,  color, size }) => 
              <MaterialIcons name="add-busines" size={size} color={color} />
          }}
          />
          <Tab.Screen name="Dailies" component={Dailies} 
          options = {{
            tabBarIcon: ({focused,  color, size }) => 
              <Ionicons name={focused ? "calendar-sharp" : "calendar-outline"} size={size} color={color} />
          }}
          />
          <Tab.Screen name="To Do" component={ToDo}
          options = {{
            tabBarIcon: ({focused,  color, size }) => 
              <Ionicons name={focused ? "checkmark-circle-sharp" : "checkmark-circle-outline"} size={size} color={color} />
          }}
           />
          <Tab.Screen name="Rewards" component={Rewards}
          options = {{
            tabBarIcon: ({focused,  color, size }) => 
              <Ionicons name={focused ? "briefcase" : "briefcase-outline"} size={size} color={color} />
          }}
          />
          <Tab.Screen name="Settings" component={Settings} 
          options = {{
            tabBarIcon: ({focused,  color, size }) => 
              <Ionicons name='menu' size={size} color={color} />
          }}
          />
          
        </Tab.Navigator>
      );
}