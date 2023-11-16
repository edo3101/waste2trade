import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Container from './Container';
import w2tProfile from '../assets/images/ProfileUser.jpg';
import useAxios from '../hooks/useAxios';

export default function UserProfile() {
  const [userData, setUserData] = useState({});
  const [products, setProducts] = useState({});
  const [giftCodeInput, setGiftCodeInput] = useState('');
  const [claimStatus, setClaimStatus] = useState(null);
  const { axiosInstance } = useAxios();

  const fetchData = async () => {
    try {
      const authToken = Cookies.get('auth_token');
      const profileResponse = await axiosInstance.get('/user/profile', {
        headers: {
          Authorization: 'Bearer ' + authToken,
        },
      });

      setUserData(profileResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchProduct = async () => {
    try {
      const productResponse = await axiosInstance.get('/user/products');
      setProducts(productResponse.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const claimGiftCode = async () => {
    try {
      const authToken = Cookies.get('auth_token');
      const claimResponse = await axiosInstance.put(
        '/user/redeemcode',
        { giftCode: giftCodeInput },
        {
          headers: {
            Authorization: 'Bearer ' + authToken,
          },
        }
      );

      setClaimStatus({
        message: `Selamat! Point anda sudah bertambah`,
        success: true,
      });
      fetchData();
    } catch (error) {
      console.error('Error claiming gift code:', error);
      setClaimStatus({
        message: 'Code sudah pernah digunakan atau tidak ditemukan',
        success: false,
      });
    }
  };

  useEffect(() => {
    fetchData();
    fetchProduct();
  }, []);

  return (
    <section className="pb-8 lg:pb-10 bg-custom-primary">
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
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="text-center">
            <h1 className="mt-5 mb-8 text-lg font-medium uppercase text-custom-tertiary md:text-2xl">
              Hi, Coffee Lover!
            </h1>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-16">
              <img
                className="object-cover w-48 h-48 rounded-full lg:h-80 lg:w-80"
                src={w2tProfile}
                alt="w2tProfile"
              />
            </div>

            <h6 className="mb-8 text-lg font-semibold uppercase text-custom-tertiary md:text-2xl">
              {userData.username}
            </h6>

            <h6 className="mb-8 text-lg font-medium uppercase text-custom-tertiary md:text-2xl">
              Poin Terkumpul:{' '}
              <span className="font-semibold">{userData.points}</span>
            </h6>

            {claimStatus && (
              <p
                className={
                  claimStatus.success ? 'text-green-500' : 'text-red-500'
                }
              >
                {claimStatus.message}
              </p>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                claimGiftCode();
              }}
            >
              <div className="flex items-center justify-center mb-2">
                <input
                  type="text"
                  placeholder="Input Gift Code"
                  className="w-2/3 px-4 py-2 mb-4 border rounded-md text-custom-tertiary"
                  value={giftCodeInput}
                  onChange={(e) => setGiftCodeInput(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-2/3 mb-5 rounded-full lg:w-1/4 btn btn-accent btn-outline lg:px-20 text-custom-primary"
              >
                Claim Giftcode
              </button>
            </form>
          </div>
        </div>
        <div className="container items-center max-w-screen-xl px-4 mx-auto">
          <h1 className="my-8 text-lg font-medium uppercase text-custom-secondary md:text-2xl">
            PILIH HADIAH MENARIK!
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.isArray(products) ? (
              products.map((product) => (
                <Link to={`/user/tukar/${product._id}`}>
                  <div
                    key={product._id}
                    className="flex flex-col items-center px-8 py-10 rounded-md card hover:shadow-lg bg-gray-50"
                  >
                    <h4 className="mb-4 text-lg font-semibold text-center text-custom-tertiary">
                      {product.name}
                    </h4>
                    <p className="mb-4 text-base font-medium text-center text-custom-tertiary">
                      {product.price} Poin
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p>products bukan array</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
