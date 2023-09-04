import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import AppNavigation from "./src/routes";
import { myTheme } from "./src/global/styles/theme";

import { useFonts, Abel_400Regular } from "@expo-google-fonts/abel";

export default function App() {
  let [fontsLoaded] = useFonts({
    Abel_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={myTheme}>
      <AppNavigation />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
