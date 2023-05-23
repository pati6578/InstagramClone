const URL = "https://jsonplaceholder.typicode.com/photos";

// async await syntax
export const getPhotos = async () => {
  try {
    const response = await fetch(URL);
    return response.json();
  } catch (e) {
    // log error to analitics
    // Tutaj wykona się tylko jak będzie error
    console.error(e);
  } finally {
    console.log("Sukces");
  }
};
