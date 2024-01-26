import axios from "axios";

import {EXPO_PUBLIC_SERVER_URL} from '@env';
export default axios.create({
  baseURL: EXPO_PUBLIC_SERVER_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
