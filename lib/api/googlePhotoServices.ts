import axios from "axios";
import { googlePhoto } from ".";

export const fetchPhoto = async (url: string) => {
  try {
    const response = await googlePhoto.get(`/photo/${url}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log("Google Places request failed", {
        message: error.message,
        status: error.response?.status,
        responseData: error.response?.data,
        axiosRequestData: error.config?.data,
      });
    } else {
      console.error("Unexpected Google Places error", error);
    }
  }
};
