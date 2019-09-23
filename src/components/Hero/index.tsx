import styled from "styled-components";
import SearchInput from "./SearchInput";
import strings from "../../config/i18n";

type Props = {
  children?: any;
  searchText?: string;
  searchMode?: boolean;
  setSearchText(string): void;
};

const Title = styled.h1`
  position: relative;
  font-size: 40px;
  color: #ffffff;
  margin: 30px;
  bottom: 0.3em;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${(props: Props) => (props.searchMode ? "30vh" : "50vh")};
  :& {
    width: 100%;
  }
`;
export const Content = styled.div`
  position: absolute;
  z-index: 3;
`;

const BackgroundImage = styled.div`
  background-image: url(${require("../../public/hero.png")});
  width: 100%;
  height: 100%;
  background-size: cover;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OverlayMask = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
`;

const HeroBanner: React.FC<Props> = props => (
  <Container searchMode={props.searchMode} setSearchText={props.setSearchText}>
    <BackgroundImage>
      {/* <NavigationContainer /> */}
      <Content>
        {" "}
        <TextContainer>
          <Title id="title">{strings.siteTitle}</Title>
          <SearchInput
            setSearchText={props.setSearchText}
            searchText={props.searchText}
          />
        </TextContainer>
      </Content>
      <OverlayMask />
    </BackgroundImage>
  </Container>
);

export default HeroBanner;
