import Container from './Container';
import kopi from '../assets/images/kopi-reward.jpg';
import totebag from '../assets/images/totebag-reward.jpg';
import tumbler from '../assets/images/tumbler-reward.jpg';
import w2tProfile from '../assets/images/ProfileUser.jpg';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function UserProfile() {
  const [userData, setUserData] = useState({});

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

  useEffect(() => {
    fetchData();
  }, []);

  const [claimStatus, setClaimStatus] = useState(null);
  const claimGiftCode = async () => {
    try {
      const authToken = Cookies.get('auth_token');
      const claimResponse = await axios.post('http://localhost:3000/user/redeemcode', {}, {
        headers: {
          Authorization: 'Bearer ' + authToken,
        },
      });
  
      setClaimStatus(claimResponse.data.message);
      fetchData();
    } catch (error) {
      console.error('Error claiming gift code:', error);
      setClaimStatus('Failed to claim gift code');
    }
  };


  return (
    <section className="py-10 md:py-16 bg-custom-primary">
      <Container>
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
            <div className="text-center">
            {claimStatus && (
              <p className={claimStatus.includes('Success') ? 'text-green-500' : 'text-red-500'}>
                {claimStatus}
              </p>
            )}
            <button
              onClick={claimGiftCode}
              className="w-full mb-5 rounded-full lg:w-1/4 btn btn-accent btn-outline lg:px-20 text-custom-primary">
              Claim Giftcode
            </button>
          </div>
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
              <h4 className="mb-4 text-lg text-center font-medium text-custom-tertiary">
                Tumbler
              </h4>
              <h4 className="mb-4 text-lg text-center font-medium text-custom-tertiary">
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
