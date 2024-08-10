const API = "https://swapi.dev/api/starships/";

const show = async () => {
  try {
    const res = await fetch(API);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Data", data);
  } catch (error) {
    console.log(error);
  }
};

show();
export default show;
