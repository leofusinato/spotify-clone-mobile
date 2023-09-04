import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultStackParamList } from "./types";
import MusicDetails from "../screens/MusicDetails";
import TabsNavigation from "./TabsNavigation";

const Stack = createNativeStackNavigator<DefaultStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabsNavigation} />
        <Stack.Screen name="MusicDetails" component={MusicDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
