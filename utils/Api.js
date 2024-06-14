import axios from "axios";

import {EXPO_PUBLIC_SERVER_URL} from '@env';
export default axios.create({
  baseURL: "https://abc-server-nazd.onrender.com/api/v1/",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
