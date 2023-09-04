import { Music, MusicProps } from "./components/Music";
import { Container, MusicListContainer, Title } from "./styles";

const musics: MusicProps[] = [
  { number: 1, title: "Hype Boy", listeners: "75,244,755" },
  { number: 2, title: "Attention", listeners: "73,638,582" },
  { number: 3, title: "Cookie", listeners: "29,704,789" },
  { number: 4, title: "Hurt", listeners: "19,532,878" },
];

export function List() {
  return (
    <Container>
      <Title>Popular</Title>

      <MusicListContainer>
        {musics.map(({ number, title, listeners }) => (
          <Music
            key={number}
            number={number}
            title={title}
            listeners={listeners}
          />
        ))}
      </MusicListContainer>
    </Container>
  );
}
