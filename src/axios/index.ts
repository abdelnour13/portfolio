import axios from "axios";
import { IContent } from "../context";

export const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export async function getContent() : Promise<IContent> {
  try {

    const response = await instance.get<IContent>("/public/data/data.json");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // TODO: redirect to error page
  }
}