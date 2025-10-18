import React from "react";
import "./Card.scss";
import { cardItem } from "./cardItem";

interface CardProps {
  view: "grid" | "list";
}

export const Card: React.FC<CardProps> = ({ view }) => {
  return (
    <div className={`main ${view === "list" ? "list-view" : "grid-view"}`}>
      {cardItem.map((items) => (
        <div
          className={`card ${view === "list" ? "list-card" : "grid-card"}`}
          key={items.id}
        >
          <img
            src={items.iamge}
            alt="card"
            className={`image ${view === "list" ? "list-img" : "grid-img"}`}
          />

          <div className={`wrapContent ${
                  view === "list" ? "list-wrapContent" : "grid-wrapContent"
                }`}>
            <div
              className={`TodayWrap ${
                view === "list" ? "list-TodayWrap" : "grid-TodayWrap"
              }`}
            >
              <p className="todayUpdate">{items.todayUpdate}</p>
              <div
                className={`wrapImg ${
                  view === "list" ? "list-wrapImg" : "grid-wrapImg"
                }`}
              >
                <img src="/images/card/heart.svg" className="img" alt="like" />
                <p className="like-heart">{items.todayLikes}</p>
                <img
                  src="/images/card/message.svg"
                  className="img"
                  alt="comment"
                />
                <p className="like-heart">{items.todayComents}</p>
              </div>
            </div>

            <div
              className={`TodayWrap ${
                view === "list" ? "list-TodayWrap" : "grid-TodayWrap"
              }`}
            >
              <p className="todayUpdate">{items.dateUpdate}</p>
              <div
                className={`wrapImg ${
                  view === "list" ? "list-wrapImg" : "grid-wrapImg"
                }`}
              >
                <img src="/images/card/heart.svg" className="img" alt="like" />
                <p className="like-heart">{items.dateLikes}</p>
                <img
                  src="/images/card/message.svg"
                  className="img"
                  alt="comment"
                />
                <p className="like-heart">{items.dateComents}</p>
              </div>
            </div>
          </div>
          <div
            className={`UploadWrap ${
              view === "list" ? "list-UploadWrap" : "grid-UploadWrap"
            }`}
          >
            <p
              className={`like-heart ${
                view === "list" ? "list-like-heart" : "grid-like-heart"
              }`}
            >
              {items.uploadImage}
            </p>
            <p className="uploadDate">{items.uploadDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
