import React from "react";
import { IPopupProps } from "../../types/types&interfaces";
import { useAppDispatch } from "../../hooks/redux";
import { openClosePopup } from "../../store/popupSlice";

import style from "./popup.module.scss";

function Popup({ popupProps }: IPopupProps) {
  const dispatch = useAppDispatch();

  return (
    <div onClick={(event) => event.stopPropagation()} className={style.wrap}>
      <span
        onClick={() => dispatch(openClosePopup(false))}
        className={style.close}
      ></span>
      <img
        className={style.img}
        src={popupProps?.url}
        key={popupProps?.id}
        alt={popupProps?.title}
      ></img>
    </div>
  );
}

export default Popup;
