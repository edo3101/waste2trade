import Container from './Container';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';

export default function Catalog() {
  const [partnerData, setPartnerData] = useState({});
  const [totalTrashWeight, setTotalTrashWeight] = useState(null);
  const { axiosInstance } = useAxios();

  const GRAMS_TO_KG = (grams) => {
    const gramsAsNumber = parseFloat(grams);

    if (isNaN(gramsAsNumber)) {
      return 'Invalid input';
    }

    const kilograms = gramsAsNumber / 1000;

    if (kilograms % 1 === 0) {
      return Math.round(kilograms);
    } else {
      const formattedKilograms = kilograms.toFixed(2).replace(/\.?0*$/, '');
      return formattedKilograms;
    }
  };
  
  const fetchData = async () => {
    try {
      const authToken = Cookies.get('auth_token');
      const profileResponse = await axiosInstance.get(
        '/partner/profile',
        {
          headers: {
            Authorization: 'Bearer ' + authToken,
          },
        }
      );

      const totalTrashWeightResponse = await axiosInstance.get(
        '/partner/totalTrashWeight',
        {
          headers: {
            Authorization: 'Bearer ' + authToken,
          },
        }
      );

      setPartnerData(profileResponse.data);

      setTotalTrashWeight(totalTrashWeightResponse.data.totalWeight);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
        <h3 className='font-bold text-custom-tertiary'>Alamat</h3>
        <span className="text-lg tracking-tighter label-text text-custom-tertiary">
          {partnerData.address}
        </span>
        <h3 className='mt-2 font-bold text-custom-tertiary'>Buka pukul:</h3>
        <span className="text-lg tracking-tighter label-text text-custom-tertiary">
          {partnerData.openhours} WIB
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
                    {GRAMS_TO_KG(totalTrashWeight)}
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
