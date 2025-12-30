import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com",
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    },
});

export const fetchImages = async (page = 1, perPage = 12) => {
  const response = await api.get("/photos", {
    params: { page, per_page: perPage },
  });
  return response.data;
};
