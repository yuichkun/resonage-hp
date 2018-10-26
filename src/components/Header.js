import React from "react"
import styles from "../styles/Layout.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import variables from "../styles/variables.scss"
import Logo from "../../logo.svg";

export default () => (
  <div className={styles.header}>
   {/* Mobile */}
    <nav className={styles.mobile}>
      <img src={Logo} />
      <FontAwesomeIcon icon={faBars} color={variables.ResonageBlue} />
    </nav>
   {/* PC */}
    <nav>
    </nav>
  </div>
);