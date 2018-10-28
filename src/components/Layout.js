import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import WebFont from "webfontloader"

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
          <div style={{minHeight: "130vh", background:"yellow"}}>{children}</div>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    WebFont.load({
      typekit: {
        id: `${process.env.ADOBE_FONTS_TOKEN}`
      }
    })
  }
}