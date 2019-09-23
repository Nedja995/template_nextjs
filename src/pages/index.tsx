import HomeContainer from "../containers/Home";
import { connect } from "react-redux";
import { fetchArticles } from "../actions/article";
import { selectTheme } from "../reducers/config";
import * as React from "react";
import { ModalProvider } from "styled-react-modal";
import { ThemeProvider } from "styled-components";
import { primaryTheme } from "../components/_themes/primary";
import { lightTheme } from "../components/_themes/light";

const getTheme = name => {
  if (name === "light") {
    return lightTheme;
  } else {
    return primaryTheme;
  }
};

class HomePage extends React.Component<{ theme }, {}> {
  static async getInitialProps({ reduxStore, isServer, pathname, query }) {
    let data = await reduxStore.dispatch(fetchArticles(0));
    return data;
  }

  render() {
    return (
      <ThemeProvider theme={getTheme(this.props.theme)}>
        <HomeContainer />
      </ThemeProvider>
    );
  }
}
export default connect(
  state => ({
    theme: selectTheme(state)
  })
  // dispatchProps
)(HomePage);
