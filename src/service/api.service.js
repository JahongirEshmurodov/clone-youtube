import axios from "axios";

const BASE_URI = "https://youtube-v31.p.rapidapi.com";

// ⚠️ Vite o'zgaruvchilarini `import.meta.env` orqali olish kerak!
const API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;

if (!API_KEY) {
  console.error("API key not found! Check your .env file.");
}

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": API_KEY, // ✅ API kalit to‘g‘ri chaqiriladi
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    try {
      const response = await axios.get(`${BASE_URI}/${url}`, options);
      return response.data; // ✅ API javobini qaytaradi
    } catch (error) {
      console.error("API Error:", error);
      return null; // ✅ Xatolik bo‘lsa `null` qaytariladi
    }
  },
};
