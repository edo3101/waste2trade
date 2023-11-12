import Container from './Container';
import React from 'react';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function CodeNotif() {
  const [GiftCode, setGiftCode] = useState([])
  useEffect(()=> {
    const fetchData = async () => {
      const result = await fetch('http://localhost:3000/partner/generateGiftcode')
    result.json().then(json => {
      setGiftCode(json.GiftCode);
    });
    const token = response.data.token;
    Cookies.set('auth_token', token);
    console.log(token);
    window.location.assign('/mitra/dashboard');
  };
    fetchData();
  }, []);
  console.log(GiftCode);
      
  return (
    <section className="w-full bg-custom-primary">
      <Container className="py-5 lg:px-5">
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-col items-center">
          <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">

            <h1 className="font-medium text-custom-tertiary text-lg mb-4">
              GIFTCODE / BARCODE
              {GiftCode.map((code) => (
                key={code}
              ))}
            </h1>
         
          </div>
        </div>
      </Container>
    </section>
  );
}