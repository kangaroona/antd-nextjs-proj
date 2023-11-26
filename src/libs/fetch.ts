// import fetch from "unfetch/polyfill";
import axios from "axios";
export const fetcher = (url) => fetch(url).then((r) => r.json());
export const axiosGet = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};
