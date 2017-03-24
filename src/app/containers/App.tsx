const appConfig = require("../../../config/main");

import { Header } from "components";
import { normalize, setupPage } from "csstips";
import * as React from "react";
import * as Helmet from "react-helmet";
import {cssRaw, cssRule, style} from "typestyle";

// Global style
cssRaw(`@import url('https://fonts.googleapis.com/css?family=Roboto');`);
normalize();
cssRule(`body`, {
    fontFamily: "Roboto"
});
setupPage("#app");

// App container style
const Styles = {
    container: style({
        padding: 0,
        margin: 0,
        textAlign: "center"
    })
};

class App extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <section className={Styles.container}>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header />
        {this.props.children}
      </section>
    );
  }
}

export { App, Styles }
