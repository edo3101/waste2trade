export const fetchUserData = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}