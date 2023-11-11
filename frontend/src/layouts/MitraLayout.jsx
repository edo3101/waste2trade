import { Outlet } from 'react-router-dom';
import { Navbar3 } from '../components';

export default function MitraLayout() {
  return (
    <>
      <Navbar3 />
      <main>
        <Outlet />
      </main>
    </>
  );
}