import Link from "next/link"
import { Router, useRouter } from "next/router"
import { use } from "react"
import styles from './header.module.css'

export default function Header() {
  const router = useRouter();

  return <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">MYStore</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <a className={router.pathname == "/" ?"nav-link active " + styles.linkactive : "nav-link"} aria-current="page" >Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/cart/user/2">
              <a className={router.pathname == "/cart/user/[userid]" ?" nav-link active " + styles.linkactive : "nav-link"} >Cart</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
            <a className={router.pathname == "/about" ? " nav-link active " + styles.linkactive : "nav-link"}>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}