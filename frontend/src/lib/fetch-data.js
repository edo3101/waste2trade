export const fetchUserData = async () => {
  try {
    const awaitFetch = await fetch(import.meta.env.VITE_API_BASE_URL);
    const data = await awaitFetch.json();
    console.log(data)
  } catch (error) {
    console.error(error);
  }
}