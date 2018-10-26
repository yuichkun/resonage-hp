import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "reset-css"

export default ({ children }) => (
  <div>
    <Header />
      <div style={{minHeight: "130vh"}}>{children}</div>
    <Footer />
  </div>
);