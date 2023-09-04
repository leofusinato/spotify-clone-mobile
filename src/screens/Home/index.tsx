import { BackgroundImage, Container, PlaylistName } from "./styles";
import Artist from "../../../assets/artist.png";
import Header from "./components/Header";
import { List } from "./components/List";

export default function Home() {
  return (
    <Container>
      <BackgroundImage source={Artist} resizeMode="cover">
        <PlaylistName>NewJeans</PlaylistName>
      </BackgroundImage>

      <Header />

      <List />
    </Container>
  );
}
