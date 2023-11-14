import Container from './Container';
import kopigigih from '../assets/images/kopigigih.jpg';
import kopikiran from '../assets/images/kopikiran.jpg';
import kopipopipo from '../assets/images/kopipopipo.jpg';

export default function KedaiOption() {
  return (
    <section>
      <Container>
        <div className="container max-w-screen-xl px-4 mx-auto">
          <h1 className="my-8 text-lg font-medium uppercase text-custom-secondary md:text-2xl">
            YUK, KE KEDAI TERDEKAT!
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src={kopigigih}
                  alt=""
                />
              </div>

              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                Kopi Gigih
              </h4>

              <p className="font-normal text-gray-500 text-md">Alamat:</p>
            </div>

            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src={kopikiran}
                  alt=""
                />
              </div>

              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                Kopikiran
              </h4>

              <p className="font-normal text-gray-500 text-md">Alamat:</p>
            </div>

            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src={kopipopipo}
                  alt=""
                />
              </div>

              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                Kopi Popipo
              </h4>

              <p className="font-normal text-gray-500 text-md">Alamat</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
