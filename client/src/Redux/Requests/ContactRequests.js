import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://www.salleanthony.fr:6520"
  baseURL: "http://localhost:3001"
});

export async function requestContact(from, subject, text, firstname, lastname) {
  try {
    const response = await axiosInstance.post('/api/contact', { from, subject, text, firstname, lastname });
    return response;

  } catch (err) {
    console.error(err);
  }
}

