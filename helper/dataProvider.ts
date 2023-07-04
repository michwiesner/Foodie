import axios from "axios";
const BACK_URL = "http://192.168.0.3:3000";

type TMethods = "post" | "get" | "put" | "patch" | "delete";

interface IAxiosProps {
  url: string;
  method: TMethods;
  body?: any;
}

export const fetchData = async ({ url, method, body }: IAxiosProps) => {
  const axiosClient = axios.create({
    baseURL: BACK_URL,
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  });

  try {
    const { data } = await axiosClient[method](url, body);
    return data;
  } catch (error: any) {
    throw error.message;
  }
};
