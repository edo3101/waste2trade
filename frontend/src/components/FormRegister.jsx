import Container from './Container';
import { Link } from "react-router-dom";

export default function () {
  return (
    <section className='mt-8 lg:mt-10'>
      <Container>
        <h2 className="text-2xl lg:text-4xl font-bold lg:mb-4 tracking-tighter text-center text-custom-tertiary">Yuk, Daftar!</h2>
        <div className="form-control card bg-white shadow-xl p-7 lg:my-5 w-full text-custom-tertiary">
          <form action="">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Masukkan Email" className="input input-bordered input-accent w-full mb-4" required />
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input type="text" placeholder="Masukkan Username" className="input input-bordered input-accent w-full mb-4" required />
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="Masukkan Password" className="input input-bordered input-accent w-full mb-8" required />
            <Link to="#">
              <button className="w-full lg:w-1/4 btn btn-accent rounded-full lg:px-10 text-custom-primary"><span className='text-base'>Daftar</span></button>
            </Link>
          </form>
        </div>
      </Container>
    </section>
  );
}