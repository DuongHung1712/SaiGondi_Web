import axios from "axios";
import { Place } from "@/types/place";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

interface PlaceResponse {
  places: Place[];
  pagination: {
    total: number;
    page: number;
    totalPages: number;
    limit: number;
    ward?: { _id: string; name: string };
  };
}

export const placeApi = {
  getAll: async (): Promise<PlaceResponse> => {
    const res = await axios.get(`${API_URL}/places`);
    return res.data.data as PlaceResponse;
  },
  getNearbyPlaces: async () => {
    const token = localStorage.getItem("accessToken");
    const res = await axios.get(`${API_URL}/places/nearby`, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return res.data.data;
  },
};