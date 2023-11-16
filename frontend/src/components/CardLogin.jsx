import Container from './Container';
import { Link } from 'react-router-dom';
import { imageLinks } from '../constants';

export default function CardLogin() {
  return (
    <section className="mt-8 lg:mt-10">
      <Container>
        <h2 className="text-2xl font-bold tracking-tighter text-center lg:text-4xl lg:mb-20 text-custom-tertiary">
          Masuk Sebagai
        </h2>
        <div className="flex flex-wrap justify-center my-6">
          <Link
            to="/auth/user"
            className="w-full mt-2 mb-2 card lg:w-1/4 hover:shadow-2xl bg-custom-primary lg:ml-4 lg:mr-4"
          >
            <figure>
              <img src={imageLinks.user} alt="Masuk Sebagai User" />
            </figure>
            <div className="card-body text-custom-tertiary">
              <h2 className="card-title">User</h2>
            </div>
          </Link>
          <div className="divider lg:divider-horizontal text-custom-tertiary">
            OR
          </div>
          <Link
            to="/auth/mitra"
            className="w-full mt-2 mb-2 card lg:w-1/4 hover:shadow-2xl bg-custom-secondary lg:ml-4 lg:mr-4"
          >
            <figure>
              <img src={imageLinks.mitra} alt="Masuk Sebagai Mitra" />
            </figure>
            <div className="card-body text-custom-primary">
              <h2 className="card-title">Mitra</h2>
            </div>
          </Link>
        </div>
      </Container>

      <div className="mt-1 card-body text-custom-tertiary">
        <div className="flex justify-center mt-1">
          <h2 className="ml-2 text-lg">Belum punya akun?</h2>
          <Link to="/auth/register" className="ml-1 text-lg font-bold">
            Register!
          </Link>
        </div>
      </div>
    </section>
  );
}
