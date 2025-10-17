import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.scss";

type CustomDatePickerProps = {
  selected?: Date | null;
  onChange?: (date: Date | null) => void;
  dateFormat?: string;
  className?: string;
  placeholder: string
};
export const CustomDatePicker = ({
  selected,
  onChange,
  dateFormat = "dd-MM-yyyy",
  className,
}: CustomDatePickerProps) => {
  const CustomInput = forwardRef<
    HTMLDivElement,
    { value?: string; onClick?: () => void }
  >(({ value, onClick }, ref) => (
    <div className="date-picker-input" onClick={onClick} ref={ref}>
      <input
        type="text"
        value={value || ""}
        readOnly
        placeholder="Select date"
        className="date-picker-input__field"
      />
      <div className="date-picker-input__icons">
        {value && (
          <img
            src="/images/delete.svg"
            alt="clear"
            className="date-picker-input__icon"
            onClick={(e) => {
              e.stopPropagation();
              onChange?.(null);
            }}
          />
        )}
        <img
          src="/images/calendar.svg"
          alt="calendar"
          className="date-picker-input__icon"
        />
      </div>
    </div>
  ));

  CustomInput.displayName = "CustomInput";

  return (
    <DatePicker
      selected={selected || null}
      onChange={onChange}
      dateFormat={dateFormat}
      customInput={<CustomInput />}
      className={className}
      popperPlacement="bottom-start"
    />
  );
};
