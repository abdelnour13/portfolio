import axios from "axios";
import { IContent } from "../context";

const BASE_URL = "http://127.0.0.1:5500" //"https://raw.githubusercontent.com/abdelnour13/portfolio/refs/heads/main/public";

export const instance = axios.create({
  baseURL: BASE_URL,
});

export async function getContent() : Promise<IContent> {
  try {

    const response = await instance.get<IContent>("/data/data.json",{
        headers: {
          "Content-Type": "application/json",
        }
    });

    return response.data;

  } catch (error) {
    console.log(error);
    throw error; // TODO: redirect to error page
  }
}