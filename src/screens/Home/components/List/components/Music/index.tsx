import { Image, View } from "react-native";
import { Container, Listeners, MusicPhoto, Name, Number, Row } from "./styles";

import MusicImg from "../../../../../../../assets/music.png";
import More from "../../../../../../../assets/icons/more.png";
import { useNavigation } from "@react-navigation/native";
import { DefaultStackProps } from "../../../../../../routes/types";

export interface MusicProps {
  number: number;
  title: string;
  listeners: string;
}

export function Music({ number, title, listeners }: MusicProps) {
  const { navigate } = useNavigation<DefaultStackProps>();

  return (
    <Container activeOpacity={0.7} onPress={() => navigate("MusicDetails")}>
      <Row>
        <Number>{number}</Number>
        <MusicPhoto source={MusicImg} />
        <View>
          <Name>{title}</Name>
          <Listeners>{listeners}</Listeners>
        </View>
      </Row>
      <Image source={More} />
    </Container>
  );
}
