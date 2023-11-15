import React, { useState, useEffect } from 'react';
import Container from './Container';
import useAxios from '../hooks/useAxios';
import kopikiran from '../assets/images/kopikiran.jpg';

export default function KedaiOption() {
  const { axiosInstance } = useAxios();
  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('http://localhost:3000/user/coffeeShops');
        setCoffeeShops(response.data);
      } catch (error) {
        console.error('Error fetching coffee shops:', error);
      }
    };

    if (axiosInstance) {
      fetchData();
    }
  }, [axiosInstance]);

  return (
    <section>
      <Container>
        <div className="container max-w-screen-xl px-4 mx-auto">
          <h1 className="my-8 text-lg font-medium uppercase text-custom-secondary md:text-2xl">
            YUK, KE KEDAI TERDEKAT!
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {coffeeShops.map(coffeeShop => (
              <div key={coffeeShop._id} className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
                <img
                  className="object-cover w-20 h-20 rounded-full mb-4"
                  src={kopikiran}
                  alt={`Image of ${coffeeShop.name}`}
                />
                <h4 className="mb-4 text-lg font-medium text-custom-tertiary my-3">
                  {coffeeShop.name}
                </h4>
                <p className="font-normal text-gray-500 text-md my-3 text-center">Alamat: <br></br> {coffeeShop.address}</p>
                <p className="font-normal text-gray-500 text-md my-3">Open Hours: {coffeeShop.openhours}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
