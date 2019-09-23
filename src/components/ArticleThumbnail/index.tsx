import React from "react";
import Grid from "styled-components-grid";
import styled from "styled-components";
import Controls from "./Controls";

type Props = {
  name: string;
  shortDescription: string;
  images?: string;
  onFavourite?: Function;
};

const Container = styled.div`
  position: relative;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  &:hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

const LabelsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  bottom: 10%;
  z-index: 2;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.2s;
  background-color: ${({ theme }) => theme.colors.tertiaryDarkTransparent};
  ${Container}:hover & {
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

const Name = styled.p`
  position: relative;
  font-size: 1.2em;
  line-height: 0.75;
  text-align: center;
  color: #ffffff;
  pointer-events: none;
`;

const Description = styled.p`
  position: relative;
  opacity: 0.7;
  font-size: 0.9em;
  font-style: italic;
  text-align: center;
  color: #ffffff;
  pointer-events: none;
`;

const StyledPhoto = styled.img`
  object-fit: cover;
  // cursor: pointer;
  pointer-events: none;
  transition: 0.3s all ease-out;
`;

const ArticleThumnail: React.FC<Props> = props => (
  <Container>
    <Controls name={props.name} shortDescription={props.shortDescription} />
    <StyledPhoto
      alt="image"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute"
      }}
      src={props.images}
    />
    <LabelsContainer>
      <Name>{props.name}</Name>
      <Description>{props.shortDescription}</Description>
    </LabelsContainer>
  </Container>
);

export default ArticleThumnail;
