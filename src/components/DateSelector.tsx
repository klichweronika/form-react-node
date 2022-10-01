import React from "react";
import { TextField } from "@material-ui/core";
import { Dayjs } from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

type DateSelectorProps = {
  date: Dayjs | null;
  setDate: (date: Dayjs | null) => void;
};

export default function DateSelector({ date, setDate }: DateSelectorProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Type a date"
        value={date}
        onChange={(newValue: Dayjs | null) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} required />}
      />
    </LocalizationProvider>
  );
}
