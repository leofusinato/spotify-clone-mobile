import { useState } from "react";
import { Image } from "react-native";
import More from "../../../../../assets/icons/more.png";
import Shuffle from "../../../../../assets/icons/shuffle.png";
import Play from "../../../../../assets/icons/play.png";

import {
  ActionsContainer,
  Container,
  FollowContainer,
  FollowText,
  LeftContainer,
  MonthlyListeners,
  RightContainer,
} from "./styles";

export default function Header() {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  return (
    <Container>
      <MonthlyListeners>9,471,192 monthly listeners</MonthlyListeners>

      <ActionsContainer>
        <LeftContainer>
          <FollowContainer
            activeOpacity={1}
            onPress={() => setIsFollowing((state) => !state)}
          >
            <FollowText>{isFollowing ? "Following" : "Follow"}</FollowText>
          </FollowContainer>

          <Image source={More} />
        </LeftContainer>
        <RightContainer>
          <Image source={Shuffle} />
          <Image source={Play} />
        </RightContainer>
      </ActionsContainer>
    </Container>
  );
}
