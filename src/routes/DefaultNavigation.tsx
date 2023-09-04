import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultStackParamList } from "./types";

import MusicDetails from "../screens/MusicDetails";

const DefaultStack = createNativeStackNavigator<DefaultStackParamList>();

export default function DefaultNavigation() {
  return (
    <DefaultStack.Navigator>
      <DefaultStack.Screen name="MusicDetails" component={MusicDetails} />
    </DefaultStack.Navigator>
  );
}
