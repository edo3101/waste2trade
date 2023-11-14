import { Link } from 'react-router-dom';
import Container from './Container';
import logo from '../assets/images/logo.png';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Navbar3() {
  const [partnerData, setPartnerData] = useState({});

  const fetchData = async () => {
    try {
      const authToken = Cookies.get('auth_token');
      const profileResponse = await axios.get(
        'http://localhost:3000/partner/profile',
        {
          headers: {
            Authorization: 'Bearer ' + authToken,
          },
        }
      );

      setPartnerData(profileResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    Cookies.remove('auth_token');
    window.location.assign('/auth/login');
  };
  
  return (
    <header className="sticky top-0 left-0 z-50 py-4 shadow-sm lg:py-6 bg-white-950 bg-opacity-80 backdrop-filter backdrop-blur-md backdrop-saturate-100">
      <Container className="lg:px-5">
        <div className="flex items-center gap-2 text-tertiary">
          <div className="flex-1">
            <Link to="/">
              <img className="w-8 rounded-full" src={logo} />
            </Link>
          </div>
          <div onClick={handleLogout}>
            <Link to="/auth/login">
              <img
              className="object-cover w-10 h-10 rounded-full"
              src={partnerData.image_profile}
              alt=""
              />
              <p className="text-custom-tertiary text-center">Logout</p>
              </Link>
              </div>
        </div>
      </Container>
    </header>
  );
}
