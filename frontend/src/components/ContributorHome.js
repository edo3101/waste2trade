import Container from './Container';
import coffe1 from '../assets/images/coffe1.png';
import coffe2 from '../assets/images/coffe2.png';
import coffe3 from '../assets/images/coffe3.png';
import coffe4 from '../assets/images/coffe4.png';

export default function ContributorHome() {
  return (
    <section className="w-full bg-custom-primary py-5 lg:py-10">
      <Container>
        <p className="text-base lg:text-lg lg:text-md text-center  text-custom-tertiary">
          Mitra
        </p>
        <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-8 font-bold tracking-tighter text-center text-custom-tertiary">
          Agen Perubahan
        </h2>
        <div className="flex flex-wrap items-center justify-center">
          <img
            src={coffe1}
            className="max-w-[120px] lg:max-w-[180px] grayscale opacity-60 transition hover:grayscale-0 opacity-100"
            alt="Coffe 1"
          />
          <img
            src={coffe2}
            className="max-w-[120px] lg:max-w-[180px] grayscale opacity- transition hover:grayscale-0 opacity-100"
            alt="Coffe 2"
          />
          <img
            src={coffe3}
            className="max-w-[120px] lg:max-w-[180px] grayscale opacity-60 transition hover:grayscale-0 opacity-100"
            alt="Coffe 3"
          />
          <img
            src={coffe4}
            className="max-w-[120px] lg:max-w-[180px] grayscale opacity-60 transition hover:grayscale-0 opacity-100"
            alt="Coffe 4"
          />
        </div>
      </Container>
    </section>
  );
}
