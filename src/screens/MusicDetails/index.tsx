import { TouchableWithoutFeedback, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import MusicImg from "../../../assets/music.png";
import {
  Row,
  Title,
  MusicPhoto,
  MusicName,
  Artist,
  ContentContainer,
} from "./styles";
import Player from "./components/Player";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function MusicDetails() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const [favorited, setIsFavorited] = useState<boolean>(false);

  return (
    <LinearGradient
      style={{ flex: 1, paddingTop: insets.top }}
      colors={["#13174B", "#06081A"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0.3 }}
    >
      <ContentContainer>
        <Row>
          <EvilIcons name="chevron-down" size={40} color={colors.white} />
          <Title>NewJeans</Title>
          <Feather name="more-horizontal" size={32} color={colors.white} />
        </Row>
        <MusicPhoto source={MusicImg} />
        <Row style={{ marginTop: 40 }}>
          <View>
            <MusicName>Hype Boy</MusicName>
            <Artist>NewJeans</Artist>
          </View>
          <TouchableWithoutFeedback
            onPress={() => setIsFavorited((state) => !state)}
          >
            {!favorited ? (
              <AntDesign name="hearto" size={24} color={colors.white} />
            ) : (
              <AntDesign name="heart" size={24} color={colors.primary} />
            )}
          </TouchableWithoutFeedback>
        </Row>
        <Player />
      </ContentContainer>
    </LinearGradient>
  );
}
