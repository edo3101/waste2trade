import { useEffect } from "react";
import { MitraLogin, Footer } from '../components';
import { fetchUserData } from "../lib/fetch-data";

export default function LoginMitra() {

  useEffect(() => {
    fetchUserData();
  }, [])

  console.log("test");

  return (
    <>
      <MitraLogin />
      <Footer />
    </>
  );
}