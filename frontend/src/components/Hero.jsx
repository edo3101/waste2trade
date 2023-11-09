import Container from './Container';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero-image.png';

export default function Hero() {
  return (
    <section className="w-full bg-custom-primary">
      <Container className="py-5 lg:px-5">
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="self-end lg:w-full mt-6 lg:my-20">
            <img src={heroImage} />
          </div>
          <div className="self-center lg:w-1/2 lg:my-20">
            <h1 className="text-3xl lg:text-6xl font-bold text-custom-tertiary mt-5 tracking-tighter">
              Let's Trade <span className="lg:block">Your Waste</span>
            </h1>
            <p className="text-md lg:text-xl my-5 lg:my-6 text-custom-tertiary">
              Exchange your trash
              <span className="lg:block">to get some rewards.</span>
            </p>
            <Link to="/auth/register">
              <button className="w-full lg:w-1/4 btn btn-accent rounded-full lg:px-10 text-custom-primary mb-5">
                <span className="text-base">Join</span>
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
