import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { StackNavigationProp } from "@react-navigation/stack";

export type TabsStackParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
};

export type DefaultStackParamList = {
  MusicDetails: undefined;
  Tabs: TabsStackParamList;
};

export type DefaultStackProps = StackNavigationProp<DefaultStackParamList>;
