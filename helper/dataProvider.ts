import axios from "axios";
import {REACT_APP_BACKEND_URL} from "@env";

type TMethods = "post" | "get" | "put" | "patch" | "delete";

interface IAxiosProps {
  url: string;
  method: TMethods;
  body?: any;
}

export const fetchData = async ({ url, method, body }: IAxiosProps) => {
  const axiosClient = axios.create({
    baseURL: REACT_APP_BACKEND_URL,
    headers: {
      "Access-Control-Allow-Origin": true,
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });

  try {
    const { data } = await axiosClient[method](url, body);
    return data;
  } catch (error: any) {
    throw error.message;
  }
};
