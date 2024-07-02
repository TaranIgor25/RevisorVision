import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IPage } from "../../types/typesAndInterfaces";

import style from "./layout.module.scss";

const FAVORITE_PAGE = "/favorites";
const MAIN_PAGE = "/";

function Layout() {
  const [page, setPage] = useState<IPage | string>(window.location.pathname);

  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <Link
            onClick={() => setPage(MAIN_PAGE)}
            to={MAIN_PAGE}
            className={
              page === MAIN_PAGE ? style.a + " " + style.active : style.a
            }
          >
            Каталог
          </Link>
          <Link
            onClick={() => setPage(FAVORITE_PAGE)}
            to={FAVORITE_PAGE}
            className={
              page === FAVORITE_PAGE ? style.a + " " + style.active : style.a
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
