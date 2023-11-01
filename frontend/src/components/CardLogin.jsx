import Container from './Container';
import { Link } from "react-router-dom";
import imageLinks from '../constants';

export default function CardLogin() {
  return (
    <section className='mt-8 lg:mt-10'>
      <Container>
        <h2 className="text-2xl lg:text-4xl font-bold lg:mb-20 tracking-tighter text-center text-custom-tertiary">Masuk Sebagai</h2>
        <div className="flex flex-wrap my-6 justify-center">
          <Link to="/user" className="card w-full lg:w-1/4 hover:shadow-2xl bg-custom-primary mt-2 mb-2 lg:ml-4 lg:mr-4">
            <figure><img src={imageLinks.user} alt="Masuk Sebagai User" /></figure>
            <div className="card-body text-custom-tertiary">
              <h2 className="card-title">User</h2>
            </div>
          </Link>
          <div className="divider lg:divider-horizontal text-custom-tertiary">OR</div>
          <Link to="/mitra" className="card w-full lg:w-1/4 hover:shadow-2xl bg-custom-secondary mt-2 mb-2 lg:ml-4 lg:mr-4">
            <figure><img src={imageLinks.mitra} alt="Masuk Sebagai Mitra" /></figure>
            <div className="card-body text-custom-primary">
              <h2 className="card-title">Mitra</h2>
            </div>
          </Link>
        </div>
      </Container>
    </section >
  );
}