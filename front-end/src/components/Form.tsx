import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Event } from "../api";
import { useCreateEvent } from "./useCreateEvent";

export default function Form() {
  const { register, handleSubmit, errors, reset } = useForm();
  const [date, setDate] = useState<Dayjs | null>(null);
  const createEvent = useCreateEvent();

  const onSubmit = async (data: Event) => {
    try {
      const event = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        eventDate: new Date(data.eventDate).toISOString(),
      };

      const response = await createEvent(event);

      if (response.status === 201) {
        reset();
        setDate(null);
        alert("Your event has been sucessfully saved.");
        return;
      }

      alert(`Your request was not accepted, ${response.statusText}.`);
    } catch (e) {
      alert(`Sending your request failed with an error ${JSON.stringify(e)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mt={10}>
        <Box mb={3}>
          <TextField
            label="Name"
            name="firstName"
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
            name="lastName"
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
              renderInput={(params) => (
                <TextField name="eventDate" {...params} required />
              )}
            />
            <Box>
              {errors.name && errors.name.type === "required" && (
                <span className="error-message">This is required field</span>
              )}
            </Box>
          </LocalizationProvider>
        </Box>

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
