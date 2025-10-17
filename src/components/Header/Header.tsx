import { useState } from "react";
import "./Header.scss";
import { followers } from "./followers";
import "react-datepicker/dist/react-datepicker.css";
import { CustomDatePicker } from "./Calendar/Calendar";
export const Header = () => {
  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2025-10-15")
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date("2025-10-17"));
  return (
    <header className="header">
      <div className="header__container">
        <img src="/images/logo.svg" alt="logo" className="header__logo" />

        <div className="header__info">
          <div className="header__text">
            <h2 className="header__name">monblanproject</h2>
            <p className="header__start-date">Start on 17-02-2016</p>
          </div>
          <div className="header__folow">
            {followers.map((f) => (
              <p className="number" key={f.id}>
                {f.number} <span className="name">{f.name}</span>
              </p>
            ))}
          </div>
          <div className="header__date">
            <p className="date">Date</p>
            <CustomDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd-MM-yyyy"
              className="calendar"
              placeholder="select start Date"
            />
            <CustomDatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd-MM-yyyy"
              className="calendar"
              placeholder="select end Date"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
