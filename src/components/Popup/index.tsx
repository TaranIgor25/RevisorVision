import React from "react";

import { IPopupProps } from "../../types/typesAndInterfaces";
import { openClosePopup } from "../../store/popupSlice";
import { useAppDispatch } from "../../store/hooks/redux";

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
