const BASE_URL = "https://dummyjson.com";

const GET = async (url) => {
  const res = await fetch(BASE_URL + url);
  return res.json();
};
export { GET };
