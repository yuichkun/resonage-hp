import React from "react"
import styles from "../styles/Layout.module.scss"
import { Link } from "gatsby"

export default () => (
  <div className={styles.footer}>
    <div className={styles.top}>
      <Link to="/policies#social-media-guideline">ソーシャルメディアガイドライン</Link> /
      <Link to="/policies#privacy-policy">プライバシーポリシー</Link> /
      <Link to="/policies#site-policy">サイトポリシー</Link>
    </div>
    Footer!!
  </div>
);