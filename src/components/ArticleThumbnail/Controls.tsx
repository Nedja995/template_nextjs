import React from "react";
import styled from "styled-components";
import { StyledButton } from "../Base";
import strings from "../../config/i18n";

type Props = {
  name: string;
  shortDescription: string;
  onFavourite?: Function;
};

const Container = styled.div`
  z-index: 4;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.tertiaryDarkTransparent};

  opacity: 0;
  &:after {
    opacity: 0;
  }
  &:hover {
    opacity: 1;
    transition: opacity 0.2s;
  }
`;

const Row = styled.div`
  margin: 10px;

  display: flex;
  text-align: center;
`;

const Name = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.font.sizeBig};
  color: white;
`;
const ShortDescription = styled.p`
  font-size: ${({ theme }) => theme.font.size};
  background-color: ${({ theme }) => theme.colors.primaryDarkTransparent};
  width: 100%;
  text-align: center;
  color: white;
  height: 60px;
  margin-top: auto;
`;

const FawIconButton = styled.div`
  position: absolute;
  width: 2rem;
  right: 1rem;
  top: 1rem;
  &:hover {
    -webkit-transform: scale(1.25);
    transform: scale(1.25);
  }
`;

const Button = styled(StyledButton)`
  max-width: 16rem;
`;

const ArticleThumnailControls: React.FC<Props> = props => (
  <Container>
    <Row>
      <Name>{props.name}</Name>
    </Row>
    <Row>
      <Button>{strings.articleThumbnail.controlOpen}</Button>
    </Row>
    <Row>
      <Button>{strings.articleThumbnail.controlFavourite}</Button>
    </Row>
    <Row>
      <Button>{strings.articleThumbnail.controlEdit}</Button>
    </Row>
    <ShortDescription>{props.shortDescription}</ShortDescription>
  </Container>
);

export default ArticleThumnailControls;
