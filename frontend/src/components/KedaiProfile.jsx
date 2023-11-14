import Container from './Container';
import kopigigih from '../assets/images/kopigigih.jpg';

export default function KedaiProfile() {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
            <div className="flex justify-center py-6 mb-4 rounded-md w-200 bg-gray-50">
              <img
                className="object-cover aspect-square"
                src={kopigigih}
                alt=""
              />
            </div>

            <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
              KEDAI KOPI GIGIH
            </h4>

            <p className="font-normal text-gray-500 text-md">
              Alamat: Jalan Jalan
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
