import { Outlet } from 'react-router-dom';
import { Navbar2 } from '../components';

export default function UserLayout() {
  return (
    <>
      <Navbar2 />
      <main>
        <Outlet />
      </main>
    </>
  );
}