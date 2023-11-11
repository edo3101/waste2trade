import { Link } from 'react-router-dom';
import Container from './Container';
import logo from '../assets/images/logo.png';
import w2tProfile from '../assets/images/ProfileUser.jpg';

export default function Navbar2() {
  return (
    <header className="py-4 lg:py-6 sticky top-0 left-0 z-50 bg-white-950 bg-opacity-80 backdrop-filter backdrop-blur-md backdrop-saturate-100 shadow-sm">
      <Container className="lg:px-5">
        <div className="flex items-center gap-2 text-tertiary">
          <div className="flex-1">
            <Link to="/">
              <img className="w-8 rounded-full" src={logo} />
            </Link>
          </div>
          <div className="flex-none">
            <Link to="">
            <img
                className="object-cover h-10 w-10 rounded-full"
                src={w2tProfile}
                alt=""
              />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
