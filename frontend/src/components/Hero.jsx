import Container from './Container';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-image.png';

export default function Hero() {
  return (
    <section className="w-full bg-custom-primary">
      <Container className="py-5 lg:px-5">
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="self-end mt-6 lg:w-full lg:my-20">
            <img src={heroImage} />
          </div>
          <div className="self-center lg:w-1/2 lg:my-20">
            <h1 className="mt-5 text-3xl font-bold tracking-tighter lg:text-6xl text-custom-tertiary">
              Let's<span style={{ color: '#1B8D73' }}> trade</span> your
              <span className="text-custom-secondary"> waste</span> !
            </h1>
            <p className="my-5 text-md lg:text-xl lg:my-6 text-custom-tertiary">
              Exchange your trash
              <span className="lg:block">to get some rewards.</span>
            </p>
            <Link to="/auth/register">
              <button className="w-full mb-5 rounded-full lg:w-1/4 btn btn-accent lg:px-10 text-custom-primary">
                <span className="text-base">Join</span>
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
