import Container from './Container';
import w2tImage from '../assets/images/w2t-hero.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-2xl lg:text-4xl lg:mt-20 font-bold text-center text-custom-tertiary tracking-tighter">
          Tentang Kami
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="self-end lg:w-1/2 mt-6 lg:my-20">
            <img src={w2tImage} />
          </div>
          <div className="self-center lg:w-1/4 lg:mx-10">
            <h1 className="text-3xl lg:text-6xl font-bold text-custom-tertiary mt-7 tracking-tighter">
              Waste2Trade<span className="lg:block"> Indonesia</span>
            </h1>
            <p className="text-md lg:text-base my-5 lg:my-6 text-custom-tertiary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis rerum repellat, quia vitae id error corrupti sunt sequi
              quasi. Libero?
            </p>
            <Link to={'/aboutus'}>
            <button className="w-full lg:w-1/4 btn btn-accent btn-outline rounded-full lg:px-20 text-custom-primary mb-5">
              <span className="text-base">More</span>
            </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
