import React from "react"
import { Link } from "gatsby"
import styles from "../styles/Layout.module.scss"
import variables from "../styles/variables.scss"
import Logo from "../../logo.svg"
import Navbar from 'react-bulma-components/lib/components/navbar';

// TODO
// Hamburgerの色がプロダクションで反映されていない
// TODO 
// これUtil化する
const windowIsDefined = typeof window !== "undefined";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className={styles.header}>
        <nav>
          <Link to ="/"><img src={Logo} alt="top_logo" /><span className={styles.pcOnly}>株式会社レゾナージュ</span></Link>
          <Navbar
        </nav>
      </div>
    );
  }

  renderMenu() {
    return (
      <div className={styles.menu}>
        <ul>
          <li><Link to="/services">サービス</Link></li>
          <li><Link to="/members">メンバー</Link></li>
          <li><Link to="/news">ニュース</Link></li>
          <li><Link to="/about">会社概要</Link></li>
          <li><Link to="/contact">お問い合わせ</Link></li>
        </ul>
      </div>
    );
  }

}