import Container from './Container';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { imageLinks } from '../constants';
>>>>>>> 66b2adb9f5c0125464b2b59e92c7c49acec7670e
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Catalog() {
<<<<<<< HEAD
  const [partnerData, setPartnerData] = useState({});
  const [totalTrashWeight, setTotalTrashWeight] = useState(null);
  const GRAMS_TO_KG = 0.001;

  const fetchData = async () => {
    try {
      const authToken = Cookies.get('auth_token');
      const profileResponse = await axios.get('http://localhost:3000/partner/profile', {
        headers: {
          Authorization: 'Bearer ' + authToken,
        },
      });

      const totalTrashWeightResponse = await axios.get('http://localhost:3000/partner/totalTrashWeight', {
        headers: {
          Authorization: 'Bearer ' + authToken,
        },
      });

      setPartnerData(profileResponse.data);

      setTotalTrashWeight(totalTrashWeightResponse.data.totalWeight);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
=======
  const fetchdata = async () => {
    const s = Cookies.get('auth_token');
    const response = await axios.get('http://localhost:3000/partner/profile', {
      headers: {
        Authorization: 'Bearer ' + s,
      },
    });
>>>>>>> 66b2adb9f5c0125464b2b59e92c7c49acec7670e
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <section>
      <Container>
        <div className="mt-3 text-sm breadcrumbs text-custom-tertiary">
          <ul>
            <li>
              <Link className="text-base" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-base" to="#">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <h2 className="mt-8 text-3xl font-bold tracking-tighter lg:mt-14 lg:mb-5 text-custom-tertiary">
          Hi, {partnerData.name}
        </h2>
        <span className="text-lg tracking-tighter label-text text-custom-tertiary">
          {partnerData.address}
        </span>
        <span className="text-lg tracking-tighter label-text text-custom-tertiary">
          {partnerData.open}
        </span>
        <div className="flex flex-col mt-2 lg:flex-row">
          <div className="object-cover w-full lg:basis-1/2">
            <img
              className="rounded-2xl"
              src={partnerData.image_profile}
              alt=""
            />
          </div>
          <div className="w-full p-5 mt-5 form-control card lg:basis-1/4 lg:mt-0 lg:ml-5 bg-custom-primary">
            <h2 className="mb-2 text-2xl font-bold tracking-tighter text-custom-tertiary lg:mb-6">
              Catalog
            </h2>
            {partnerData.products &&
              partnerData.products.map((product) => (
                <label key={product._id} className="cursor-pointer label">
                  <span className="text-lg tracking-tighter label-text text-custom-tertiary">
                    {product.product_name}
                  </span>
                  <input
                    type="checkbox"
                    checked="checked" // You might want to change this based on some condition
                    className="checkbox checkbox-accent"
                  />
                </label>
              ))}
          </div>
          <div className="flex flex-col lg:ml-5">
            <div className="w-full p-5 mt-5 card lg:basis-1/2 bg-custom-primary lg:mt-0 ">
              <h2 className="mb-10 text-2xl font-bold tracking-tighter text-custom-tertiary lg:mb-24">
                Sampah Terkumpul
              </h2>
              <p className="text-custom-tertiary">
                Coffe shop anda telah mengumpulkan sampah sebanyak:
              </p>
              <h3 className="text-2xl font-bold tracking-tighter text-custom-tertiary">
                {totalTrashWeight !== null ? (
                  <>
                    {totalTrashWeight * GRAMS_TO_KG}
                    <span className="text-lg font-normal"> kg/pekan</span>
                  </>
                ) : (
                  'Loading...'
                )}
              </h3>
            </div>
            <div className="mt-5">
              <Link to={'/mitra/tukar'}>
                <button className="w-full mb-5 rounded-full btn btn-accent btn-outline text-custom-primary lg:mb-0">
                  <span className="text-base">Hitung Sampah</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider lg:mt-20"></div>
      </Container>
    </section>
  );
}