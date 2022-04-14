import { SafeAreaView, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import Header from "./src/components/header/header";
import theme from "./src/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Header />
      </SafeAreaView>
    </ThemeProvider>
  );
}
