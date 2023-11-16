import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

export default function AuthLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
