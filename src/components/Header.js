import React from "react"
import styles from "../styles/Layout.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import variables from "../styles/variables.scss"

export default () => (
  <div className={styles.header}>
    <nav className={styles.mobile}>
      hello
      <FontAwesomeIcon icon={faBars} color={variables.ResonageBlue} />
    </nav>
  </div>
);