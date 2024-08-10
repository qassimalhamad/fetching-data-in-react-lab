const API_KEY = "https://swapi.dev/api/starships/";
export default async function Show() {
  try {
    const res = await fetch(API_KEY);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
