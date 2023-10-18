import { Link } from 'react-router-dom';
import Container from './Container';

export default function Navbar() {
  return (
    <header className="py-6 sticky top-0 z-50 bg-white-950 bg-opacity-80 backdrop-filter backdrop-blur-md backdrop-saturate-100 shadow-sm">
      <Container>
        <div className="flex items-center gap-2 text-slate-50">
          <Link to="/" className="font-bold text-sm text-black">
            Waste2Trade
          </Link>
        </div>
      </Container>
    </header>
  );
}