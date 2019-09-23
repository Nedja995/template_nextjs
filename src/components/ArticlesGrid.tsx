import React from "react";
import Grid from "styled-components-grid";
import { connect } from "react-redux";
import Article from "../@types/article";
import ArticleThumnail from "./ArticleThumbnail";
import styled, { css } from "styled-components";
import { ThemeProvider } from "styled-components";

export interface Props {
  articles: Article[];
  onFavourite?: Function;
}

const gridStyle = css``;
// const theme = {
//   breakpoints: {
//     xs: 0,
//     sm: 576,
//     md: 768,
//     lg: 992,
//     xl: 1200
//   }
// };

// const ArticlesGrid: React.FunctionComponent<Props> = props => (
//   <div>dfaf</div>
// );

const gridProps: any = {
  halign: "justify-center",
  verticalalign: "stretch"
};

const ArticlesGrid: React.FunctionComponent<Props> = props => (
  // <ThemeProvider theme={theme}>
  <Grid {...gridProps}>
    {props.articles &&
      props.articles.map(article => (
        <Grid.Unit
          key={article.id}
          size={{
            sm: 1,
            md: 1 / 4,
            lg: 1 / 5,
            xl: 1 / 6
          }}
          style={{
            minHeight: "25em",
            minWidth: "20em",
            margin: "1em"
          }}
        >
          <ArticleThumnail
            name={article.name}
            shortDescription={article.shortDescription}
            images={article.images}
            onFavourite={props.onFavourite}
          />
        </Grid.Unit>
      ))}
  </Grid>
  // </ThemeProvider>
);

export default ArticlesGrid;
