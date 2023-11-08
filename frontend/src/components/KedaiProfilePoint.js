import Container from './Container';
import kopigigih from '../assets/images/kopigigih.jpg';

export default function KedaiProfilePoint() {
  return (
    <section className="w-full bg-custom-primary">
      <Container className="py-5 lg:px-5">
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-col items-center">
          <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
            <div className="w-200 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
              <img
                className="object-cover aspect-square"
                src={kopigigih}
                alt=""
              />
            </div>

            <h4 className="font-medium text-custom-tertiary text-lg mb-4">
              HI, KEDAI KOPI GIGIH!
            </h4>
            <div className="btn my-5 bg-custom-primary text-custom-tertiary">
              Poin kedai Anda sudah terkumpul:
              <div className="badge text-custom-tertiary">1000</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
