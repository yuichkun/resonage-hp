import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "reset-css"
import { yellow } from "ansi-colors";

export default ({ children }) => (
  <div>
    <Header />
      <div style={{minHeight: "130vh", background:"yellow"}}>{children}</div>
    <Footer />
  </div>
);