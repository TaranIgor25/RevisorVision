import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IPage } from "../../types/types&interfaces";

import style from "./layout.module.scss";


function Layout() {
  const [page, setPage] = useState<IPage | string>(window.location.pathname);
  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <Link
            onClick={() => setPage("/")}
            to="/"
            className={page === "/" ? style.a + " " + style.active : style.a}
          >
            Каталог
          </Link>
          <Link
            onClick={() => setPage("/favorites")}
            to="/favorites"
            className={
              page === "/favorites" ? style.a + " " + style.active : style.a
            }
          >
            Избранное
          </Link>
        </nav>
      </header>
      <main className={style.main}>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default Layout;
