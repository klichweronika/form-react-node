import axios from "axios";

type formRequestType = {
  name: string;
  subname: string;
  email: string;
  date: string;
};

const formRequest = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 3000,
  withCredentials: true,
  headers: {
    "content-type": "application/json",
  },
});

export default async function formRequestMessage(
  body: formRequestType,
  resetInputs: () => void
) {
  try {
    await formRequest.post("form", body);
    alert("The form has been sent successfully!");
    resetInputs();
  } catch (error: any) {
    console.error(error);
    alert(`Failed to submit form: ${error.message}`);
  }
}
