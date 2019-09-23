/* eslint-env jest */
import React from "react";
import { shallow } from "enzyme";
import { createMockStore } from "redux-test-utils";
import Home from "./index";
import { Provider } from "react-redux";

describe("Home", () => {
  it("renders the home component", () => {
    const testState = {
      // article: {
      //   articles: [],
      //   searchText: ""
      // },
      // user: {
      //   isLogedIn: false
      // },
      // config: {
      //   language: "en"
      // }
    };
    const store = createMockStore(testState);

    const wrapper = shallow(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(wrapper.find("#HomeView")).toBeTruthy();
  });
});
