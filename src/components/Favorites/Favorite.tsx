import React from "react";

import style from "./favorite.module.scss";

function Favorite() {
  return (
    <div className={style.favoritesWrap}>
      <img
        src="./assets/images/illustration.png"
        className={style.illustration}
        alt={"oops, there is nothing in favorites"}
      ></img>
      <h3 className={style.h3}> Список избранного пуст</h3>
      <p className={style.description}>
        Добавляйте изображения, нажимая на звездочки
      </p>
    </div>
  );
}

export default Favorite;
