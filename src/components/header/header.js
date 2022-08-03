import {
  Container,
  BackButton,
  LogoContainer,
  Title,
  Logo,
  SettingsButton,
  SettingsIcon,
} from "./header.styles";
import CMLogo from "@assets/codeminer-logo.png";
import CogIcon from "@assets/icons/cog.png";
import { useNavigation, useRoute  } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";

function Header() {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  const isOnSettingsScreen = useRoute().name === "SettingsScreen"

  return (
    <Container>
      <BackButton
        disabled={!canGoBack}
        onPress={() => navigation.goBack()}
        testID="canGoBack-button"
      >
        <MaterialIcons
          name="arrow-back-ios"
          size={moderateScale(24)}
          color="white"
        />
      </BackButton>
      <LogoContainer>
        <Logo source={CMLogo} />
        <Title>PunchClock</Title>
      </LogoContainer>
      <SettingsButton 
        disabled={isOnSettingsScreen}
        onPress={() => navigation.navigate("SettingsScreen")}
      >
        <SettingsIcon source={CogIcon} />
      </SettingsButton>
    </Container>
  );
}

export default Header;
