
  export const fetchMitra = async () => {
    const resp = await fetch(import.meta.env.VITE_API_BASE_URL);
    const data = await resp.json();
    console.log(data);
    return data;
  };