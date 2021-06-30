import axios from 'axios';

const BASE_URL = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/";
const TOKEN = process.env.REACT_APP_TOKEN || ''; 

export const getMessages = () =>
  axios.get(
    `${BASE_URL}?token=${TOKEN}`
  );

export const postMessage = (data) => console.log(data) ||
  axios.post(
    BASE_URL,
    data,
    {
      headers: {
        "token": TOKEN,
      },
    }
  )