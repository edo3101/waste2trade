import Cookies from 'js-cookie';
import Container from './Container';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactBarcode from 'react-barcode';
import { Link } from 'react-router-dom';

export default function CodeNotif() {
  const [giftCode, setGiftCode] = useState(null);

  const fetchData = async () => {
    try {
      const authToken = Cookies.get('auth_token');
      const giftResponse = await axios.get(
        'http://localhost:3000/partner/generateGiftcode',
        {
          headers: {
            Authorization: 'Bearer ' + authToken,
          },
        }
      );

      setGiftCode(giftResponse.data.giftCode);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="w-full bg-custom-primary">
      <Container className="py-5 lg:px-5">
      <div className="mt-1 text-sm breadcrumbs text-custom-tertiary">
          <ul>
            <li>
              <Link className="text-base" to="/mitra/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="text-base" to="/mitra/tukar">
                Hitung Sampah
              </Link>
            </li>
            <li>
              <Link className="text-base" to="#">
                Giftcode
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
            <h1 className="mb-4 text-lg font-medium text-custom-tertiary">
              GIFTCODE / BARCODE
            </h1>
            {giftCode ? (
              <div className='mb-2'>
                <ReactBarcode value={giftCode.code} />
                <p className='mt-2 text-sm text-center text-gray-500'>
                  Generated on: {new Date(giftCode.generatedAt).toLocaleString()}
                </p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
