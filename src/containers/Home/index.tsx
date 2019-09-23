import React from "react";
import { connect } from "react-redux";
import { selectJWTToken } from "../../reducers/user";
import { selectArticles, selectSearchText } from "../../reducers/article";
import { setArticlesSearchText, fetchArticles } from "../../actions/article";
import Article from "../../@types/article";
import { selectLanguage } from "../../reducers/config";
import { Layout } from "../../components/Base";
import Hero from "../../components/Hero";
import BottomScrollListener from "react-bottom-scroll-listener";
import SignupFormContainer from "../SignupContainer";
import LoginFormContainer from "../LoginContainer";
import InfoModal from "../InfoContainer";
import ArticlesGrid from "../../components/ArticlesGrid";

export interface Props {
  isLogedIn: boolean;
  articles?: Article[];
  onSearchChange(text): void;
  searchText: string;
  dispatch?: any;
  language?: string;
}

let page: number = 0;
const HomeContainer: React.FC<Props> = props => {
  let onFavourite = undefined;
  if (props.isLogedIn) {
    onFavourite = () => {};
  }
  return (
    <div id="HomeView">
      <Layout>
        <BottomScrollListener
          onBottom={() => {
            props.dispatch(fetchArticles(++page));
          }}
        />
        <SignupFormContainer />
        <LoginFormContainer />
        <InfoModal />
        <Hero
          searchMode={!!props.searchText}
          setSearchText={query => props.dispatch(setArticlesSearchText(query))}
        />
        <ArticlesGrid articles={props.articles} onFavourite={onFavourite} />
      </Layout>
    </div>
  );
};

// const dispatchProps = {
//   onToggleSignupModal: toggleSignupModal
// };

export default connect(
  state => ({
    articles: selectArticles(state),
    isLogedIn: !!selectJWTToken(state),
    searchText: selectSearchText(state),
    language: selectLanguage(state)
  })
  // dispatchProps
)(HomeContainer);
