import Container from './Container';
import { Link } from 'react-router-dom';
import { imageLinks } from '../constants';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import axios from 'axios';

export default function Catalog() {
  const fetchdata = async () => {
    const s = Cookies.get('auth_token');
    const response = await axios.get('http://localhost:3000/partner/profile', {
      headers: {
        Authorization: 'Bearer ' + s,
      },
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <section>
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
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <h2 className="mt-8 mb-4 text-3xl font-bold tracking-tighter lg:mt-14 lg:mb-5 text-custom-tertiary">
          Hi, Kopi Anton
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="object-cover w-full lg:basis-1/2">
            <img className="rounded-2xl" src={imageLinks.coffeshop} alt="" />
          </div>
          <div className="w-full p-5 mt-5 form-control card lg:basis-1/4 lg:mt-0 lg:ml-5 bg-custom-primary">
            <h2 className="mb-2 text-2xl font-bold tracking-tighter text-custom-tertiary lg:mb-6">
              Catalog
            </h2>
            <label className="cursor-pointer label">
              <span className="text-lg tracking-tighter label-text text-custom-tertiary">
                Kopi
              </span>
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-accent"
              />
            </label>
            <label className="cursor-pointer label">
              <span className="text-lg tracking-tighter label-text text-custom-tertiary">
                Barang A
              </span>
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-accent"
              />
            </label>
            <label className="cursor-pointer label">
              <span className="text-lg tracking-tighter label-text text-custom-tertiary">
                Barang B
              </span>
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-accent"
              />
            </label>
            <label className="cursor-pointer label">
              <span className="text-lg tracking-tighter label-text text-custom-tertiary">
                Barang C
              </span>
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-accent"
              />
            </label>
            <label className="cursor-pointer label">
              <span className="text-lg tracking-tighter label-text text-custom-tertiary">
                Barang D
              </span>
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-accent"
              />
            </label>
          </div>
          <div className="flex flex-col lg:ml-5">
            <div className="w-full p-5 mt-5 card lg:basis-1/2 bg-custom-primary lg:mt-0 ">
              <h2 className="mb-10 text-2xl font-bold tracking-tighter text-custom-tertiary lg:mb-24">
                Sampah Terkumpul
              </h2>
              <p className="text-custom-tertiary">
                Coffe shop anda telah mengumpulkan sampah sebanyak:
              </p>
              <h3 className="text-2xl font-bold tracking-tighter text-custom-tertiary">
                100kg<span className="text-lg font-normal">/pekan</span>
              </h3>
            </div>
            <div className="mt-5">
              <Link to={'/mitra/tukar'}>
                <button className="w-full mb-5 rounded-full btn btn-accent btn-outline text-custom-primary lg:mb-0">
                  <span className="text-base">Hitung Sampah</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider lg:mt-20"></div>
      </Container>
    </section>
  );
}
