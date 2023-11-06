import { useEffect } from 'react';
import { Footer, MitraLogin } from '../components';

export default function LoginMitra() {

  const fetchUserData = () => {
    fetch(import.meta.env.VITE_API_BASE_URL)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        // setUsers(data)
      })
  }
  useEffect(()=>{
    fetchUserData()
  },[])
  
  return (
    <>
      <MitraLogin />
      <Footer />
    </>
  );
}