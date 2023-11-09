import Container from './Container';
import imageLinks from '../constants';

export default function CardHome() {
  return (
    <section className="mt-8 lg:mt-10">
      <Container>
        <p className="text-base lg:text-lg lg:text-md text-center lg:mt-20 text-custom-tertiary">
          Ayo Gabung Menjadi
        </p>
        <h2 className="text-2xl lg:text-4xl font-bold lg:mb-20 tracking-tighter text-center text-custom-tertiary">
          Agen Perubahan
        </h2>
        <div className="flex flex-wrap mt-6 justify-center">
          <div className="card w-full lg:w-1/4 bg-custom-primary mt-2 mb-2 lg:ml-4 lg:mr-4">
            <figure>
              <img src={imageLinks.user} alt="User" />
            </figure>
            <div className="card-body text-custom-tertiary">
              <h2 className="card-title">User</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="divider lg:divider-horizontal text-custom-tertiary">
            OR
          </div>
          <div className="card w-full lg:w-1/4 bg-custom-secondary mt-2 mb-2 lg:ml-4 lg:mr-4">
            <figure>
              <img src={imageLinks.mitra} alt="Mitra" />
            </figure>
            <div className="card-body text-custom-primary">
              <h2 className="card-title">Mitra</h2>
              <p>
                Culpa, molestias odit illum quae consectetur necessitatibus.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
