import React from "react";
import "./Card.scss";
import { cardItem } from "./cardItem";
import { CardTypes } from "../../types/cardTypes";
export const Card: React.FC<CardTypes> = () => {
  return (
    <div className="main">
      {cardItem.map((items) => (
        <div className="card">
          <img src={items.iamge} />
          <div className="wrapContent">
            <div className="TodayWrap">
              <p className="todayUpdate">{items.todayUpdate}</p>
              <div className="wrapImg">
                <img src="/images/card/heart.svg" />
                <p className="like-heart">{items.todayLikes}</p>
              </div>
              <div className="wrapImg">
                <img src="/images/card/message.svg" />
                <p className="like-heart">{items.todayComents}</p>
              </div>
            </div>
            <div className="dateWrap">
              <p className="todayUpdate">{items.dateUpdate}</p>
              <div className="wrapImg">
                <img src="/images/card/heart.svg" />
                <p className="like-heart">{items.dateLikes}</p>
              </div>
              <div className="wrapImg">
                <img src="/images/card/message.svg" />
                <p className="like-heart">{items.dateComents}</p>
              </div>
            </div>
          </div>
          <div className="UploadWrap">
            <p className="like-heart">{items.uploadImage}</p>
            <p className="uploadDate">{items.uploadDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
