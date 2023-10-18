import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}