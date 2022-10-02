import { DefaultApiFactory, Event } from "../api";

const api = DefaultApiFactory(undefined, process.env.REACT_APP_API_URL);

export const useCreateEvent = () => {
  return (event: Event) => api.eventsControllerSave(event, { url: "\\events" });
};
