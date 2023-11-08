{
  /* PROFILE USER START */
}
import Container from './Container';
import w2tProfile from '../assets/images/ProfileUser.jpg';

export default function UserProfile() {
  return (
    <section className="py-10 md:py-16 bg-custom-primary">
      <Container>
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-medium text-custom-secondary text-lg md:text-2xl uppercase mb-8">
              Hi, Coffee Lover!
            </h1>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-16">
              <img
                className="object-cover h-80 w-80 rounded-full"
                src={w2tProfile}
                alt=""
              />
            </div>

            <h6 className="font-medium text-custom-secondary text-lg md:text-2xl uppercase mb-8">
              Jane Doe
            </h6>

            <h6 className="font-medium text-custom-secondary text-lg md:text-2xl uppercase mb-8">
              Umur: 16
            </h6>

            <h6 className="font-medium text-custom-secondary text-lg md:text-2xl uppercase mb-8">
              Domisili: Jakarta
            </h6>

            <h6 className="font-medium text-custom-secondary text-lg md:text-2xl uppercase mb-8">
              Poin Terkumpul: 1010
            </h6>
            <a
              href="#"
              className="w-full lg:w-1/4 btn btn-accent btn-outline rounded-full lg:px-20 text-custom-primary mb-5"
            >
              Scan Barcode
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
