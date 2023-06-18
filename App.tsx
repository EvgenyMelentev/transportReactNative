import React, { useReducer } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Components/HomeScreen";
import DetailsScreen from "./Components/DetailsScreen";
import Context from "./Features/Context";
import reducer from "./Features/Reducer";
import Settings from "./Components/Settings";



const Stack = createNativeStackNavigator();
export default function App() {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <NavigationContainer>
      <Context.Provider value={{ state, dispatch }}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </Context.Provider>
    </NavigationContainer>

  );
}
