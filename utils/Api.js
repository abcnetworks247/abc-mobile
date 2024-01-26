import axios from "axios";

import {APP_ENV} from '@env';
export default axios.create({
  baseURL: APP_ENV,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
