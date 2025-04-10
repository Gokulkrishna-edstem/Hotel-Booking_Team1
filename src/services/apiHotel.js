import axios from "axios";

// function for geting all the list from api
export async function getHotels() {
  try {
    const res = await axios.get(`http://localhost:5000/hotels`);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("failed loading api :", err);
  }
}
