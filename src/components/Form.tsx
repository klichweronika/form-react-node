import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const [date, setDate] = useState<Dayjs | null>(null);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mt={10}>
        <Box mb={3}>
          <TextField
            label="Name"
            name="name"
            type="name"
            variant="outlined"
            className="input-field"
            inputRef={register({
              required: true,
              minLength: 3,
            })}
          />
          <Box>
            {errors.name && errors.name.type === "required" && (
              <span className="error-message">This is required field</span>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <span className="error-message">
                Minimum characters 3 required
              </span>
            )}
          </Box>
        </Box>
        <Box mb={3}>
          <TextField
            label="Subname"
            name="subname"
            type="subname"
            variant="outlined"
            className="input-field"
            inputRef={register({
              required: true,
            })}
          />
          <Box>
            {errors.subname && errors.subname.type === "required" && (
              <span className="error-message">This is required field</span>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <span className="error-message">
                Minimum characters 3 required
              </span>
            )}
          </Box>
        </Box>
        <Box my={3}>
          <TextField
            label="Email"
            name="email"
            type="text"
            variant="outlined"
            className="input-field"
            inputRef={register({
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
          />
          <Box>
            {errors.email && errors.email.type === "required" && (
              <span className="error-message">This is required field</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="error-message">Enter a valid email</span>
            )}
          </Box>
        </Box>

        <Box sx={{ width: "87%" }} my={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Type a date"
              value={date}
              onChange={(newValue: Dayjs | null) => {
                setDate(newValue);
              }}
              inputRef={register({
                required: true,
              })}
              renderInput={(params) => <TextField {...params} required />}
            />
            <Box>
              {errors.name && errors.name.type === "required" && (
                <span className="error-message">This is required field</span>
              )}
            </Box>
          </LocalizationProvider>
        </Box>

        {/* <Box my={3}>
          <DateSelector setDate={setDate} date={date} />
        </Box> */}

        <Button
          color="primary"
          type="submit"
          variant="contained"
          className="submit-button"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}
