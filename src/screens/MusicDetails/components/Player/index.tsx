import { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { useTheme } from "styled-components/native";
import { Container, PauseContainer, Row, Time } from "./styles";

import { Feather, Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";

const SLIDER_WIDTH = Dimensions.get("window").width;

export default function Player() {
  const { colors } = useTheme();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isShuffled, setIsShuffled] = useState<boolean>(false);
  const [isRepeating, setIsRepeating] = useState<boolean>(false);

  return (
    <Container>
      <Slider
        style={{ width: SLIDER_WIDTH, marginLeft: -16 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor={colors.white}
        maximumTrackTintColor={colors.grayDark}
        thumbTintColor={colors.white}
        value={0.5}
      />
      <Row>
        <Time>1:19</Time>
        <Time>-1:39</Time>
      </Row>

      <Row>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setIsShuffled((state) => !state)}
        >
          <Ionicons
            name="md-shuffle"
            size={24}
            color={isShuffled ? colors.primary : colors.white}
          />
        </TouchableOpacity>
        <Ionicons name="play-skip-back-sharp" size={24} color={colors.white} />
        <PauseContainer
          onPress={() => setIsPlaying((state) => !state)}
          activeOpacity={0.8}
        >
          {isPlaying ? (
            <FontAwesome name="pause" size={24} color={colors.black} />
          ) : (
            <Entypo name="controller-play" size={30} color={colors.black} />
          )}
        </PauseContainer>
        <Ionicons name="play-skip-forward" size={24} color={colors.white} />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setIsRepeating((state) => !state)}
        >
          <Feather
            name="repeat"
            size={24}
            color={isRepeating ? colors.primary : colors.white}
          />
        </TouchableOpacity>
      </Row>
    </Container>
  );
}
