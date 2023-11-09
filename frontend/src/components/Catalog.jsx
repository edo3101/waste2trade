import Container from './Container';
import { Link } from 'react-router-dom';
import imageLinks from '../constants';

export default function Catalog() {
  return (
    <section>
      <Container>
        <div className="text-sm breadcrumbs text-custom-tertiary mt-3">
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
        <h2 className="text-3xl font-bold mt-8 mb-4 lg:mt-14 lg:mb-5 tracking-tighter text-custom-tertiary">
          Hi, Kopi Anton
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="object-cover w-full lg:basis-1/2">
            <img className="rounded-2xl" src={imageLinks.coffeshop} alt="" />
          </div>
          <div className="form-control card w-full lg:basis-1/4 mt-5 lg:mt-0 lg:ml-5 p-5 bg-custom-primary">
            <h2 className="text-2xl font-bold tracking-tighter text-custom-tertiary mb-2 lg:mb-6">
              Catalog
            </h2>
            <label className="cursor-pointer label">
              <span className="label-text text-lg text-custom-tertiary tracking-tighter">
                Kopi
              </span>
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-accent"
              />
            </label>
            <label className="cursor-pointer label">
              <span className="label-text text-lg text-custom-tertiary tracking-tighter">
                Barang A
              </span>
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-accent"
              />
            </label>
            <label className="cursor-pointer label">
              <span className="label-text text-lg text-custom-tertiary tracking-tighter">
                Barang B
              </span>
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-accent"
              />
            </label>
            <label className="cursor-pointer label">
              <span className="label-text text-lg text-custom-tertiary tracking-tighter">
                Barang C
              </span>
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-accent"
              />
            </label>
            <label className="cursor-pointer label">
              <span className="label-text text-lg text-custom-tertiary tracking-tighter">
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
            <div className="card w-full lg:basis-1/2 bg-custom-primary p-5 mt-5 lg:mt-0 ">
              <h2 className="text-2xl font-bold tracking-tighter text-custom-tertiary mb-10 lg:mb-24">
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
              <Link to="#">
                <button className="w-full btn btn-accent btn-outline rounded-full text-custom-primary mb-5 lg:mb-0">
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
