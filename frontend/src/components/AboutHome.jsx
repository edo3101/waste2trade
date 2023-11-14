import Container from './Container';
import w2tImage from '../assets/images/w2t-hero.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-2xl font-bold tracking-tighter text-center lg:text-4xl lg:mt-20 text-custom-tertiary">
          Tentang Kami
        </h2>
        <div className="flex flex-col justify-center lg:flex-row">
          <div className="self-end mt-6 lg:w-1/3 lg:my-20">
            <img src={w2tImage} />
          </div>
          <div className="self-center lg:w-1/4 lg:mx-10">
            <h1 className="text-3xl font-bold tracking-tighter lg:text-5xl text-custom-tertiary mt-7">
              Waste2Trade<span className="lg:block"> Indonesia</span>
            </h1>
            <p className="my-5 text-md lg:text-base lg:my-6 text-custom-tertiary">
              Trade your waste for a better future.
              Ingin tahu lebih lanjut tentang kami?
            </p>
            <Link to={'/aboutus'}>
              <button className="w-full mb-5 rounded-full lg:w-1/4 btn btn-accent btn-outline lg:px-20 text-custom-primary">
                <span className="text-base">More</span>
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
