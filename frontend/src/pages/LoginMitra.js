import { useEffect } from 'react';
import { Footer, MitraLogin } from '../components';
import { fetchAllPartners } from '../lib/fetch-user';

export default function LoginMitra() {

 
  useEffect(()=>{
    fetchAllPartners()
  },[])
  
  return (
    <>
      <MitraLogin />
      <Footer />
    </>
  );
}