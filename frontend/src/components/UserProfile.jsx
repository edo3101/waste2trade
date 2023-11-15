import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Container from './Container';
import kopi from '../assets/images/kopi-reward.jpg';
import totebag from '../assets/images/totebag-reward.jpg';
import tumbler from '../assets/images/tumbler-reward.jpg';
import w2tProfile from '../assets/images/ProfileUser.jpg';

export default function UserProfile() {
  const [userData, setUserData] = useState({});
  const [giftCodeInput, setGiftCodeInput] = useState('');
  const [claimStatus, setClaimStatus] = useState(null);

  const fetchData = async () => {
    try {
      const authToken = Cookies.get('auth_token');
      const profileResponse = await axios.get('http://localhost:3000/user/profile', {
        headers: {
          Authorization: 'Bearer ' + authToken,
        },
      });

      setUserData(profileResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const claimGiftCode = async () => {
    try {
      const authToken = Cookies.get('auth_token');
      const claimResponse = await axios.put(
        'http://localhost:3000/user/redeemcode',
        { giftCode: giftCodeInput },
        {
          headers: {
            Authorization: 'Bearer ' + authToken,
          },
        }
      );

      setClaimStatus({ message: `Selamat! Point anda sudah bertambah`, success: true });
      fetchData();
    } catch (error) {
      console.error('Error claiming gift code:', error);
      setClaimStatus({ message: 'Code sudah pernah digunakan atau tidak ditemukan', success: false });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="py-10 md:py-16 bg-custom-primary">
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
            <h1 className="mb-8 text-lg font-medium uppercase text-custom-secondary md:text-2xl">
              Hi, Coffee Lover!
            </h1>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-16">
              <img
                className="object-cover rounded-full h-80 w-80"
                src={w2tProfile}
                alt=""
              />
            </div>

            <h6 className="mb-8 text-lg font-medium uppercase text-custom-secondary md:text-2xl">
              {userData.username}
            </h6>

            <h6 className="mb-8 text-lg font-medium uppercase text-custom-secondary md:text-2xl">
              Poin Terkumpul: {userData.points}
            </h6>
            
            {claimStatus && (
              <p className={claimStatus.success ? 'text-green-500' : 'text-red-500'}>
                {claimStatus.message}
              </p>
            )}
            
            <form onSubmit={(e) => { e.preventDefault(); claimGiftCode(); }}>
              <div className="flex items-center justify-center mb-2">
                <input
                  type="text"
                  placeholder="Input Gift Code"
                  className="w-2/3 px-4 py-2 border rounded-md text-custom-tertiary"
                  value={giftCodeInput}
                  onChange={(e) => setGiftCodeInput(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-2/3 mb-5 rounded-full lg:w-1/4 btn btn-accent btn-outline lg:px-20 text-custom-primary">
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
            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src={kopi}
                  alt=""
                />
              </div >
              <Link to={'/user/tukar'}>
                <h4 className="mb-4 text-lg font-medium text-center text-custom-tertiary">
                  Kopi Gula Aren
                </h4>
                <h4 className="mb-4 text-lg font-medium text-center text-custom-tertiary">
                  5 Poin
                </h4>
              </Link>
            </div>

            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src={totebag}
                  alt=""
                />
              </div>
              <Link to={'/user/tukar'}>
                <h4 className="mb-4 text-lg font-medium text-center text-custom-tertiary">
                  Tote Bag
                </h4>
                <h4 className="mb-4 text-lg font-medium text-center text-custom-tertiary">
                  15 Poin
                </h4>
              </Link>
            </div>

            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src={tumbler}
                  alt=""
                />
              </div>
              <Link to={'/user/tukar'}>
                <h4 className="mb-4 text-lg font-medium text-center text-custom-tertiary">
                  Tumbler
                </h4>
                <h4 className="mb-4 text-lg font-medium text-center text-custom-tertiary">
                  30 Poin
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}