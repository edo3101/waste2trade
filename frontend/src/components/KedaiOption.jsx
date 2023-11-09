import Container from './Container';
import kopigigih from '../assets/images/kopigigih.jpg';
import kopikiran from '../assets/images/kopikiran.jpg';
import kopipopipo from '../assets/images/kopipopipo.jpg';

export default function KedaiOption() {
    return (
      <section>
        <Container>
          <div className="container max-w-screen-xl mx-auto px-4">
            <h1 className="font-medium text-custom-secondary text-lg md:text-2xl uppercase my-8">
              YUK, KE KEDAI TERDEKAT!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
                <div className="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                  <img
                    className="object-cover h-20 w-20 rounded-full"
                    src={kopigigih}
                    alt=""
                  />
                </div>
  
                <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                  Kopi Gigih
                </h4>
  
                <p className="font-normal text-gray-500 text-md">
                  Alamat:
                </p>
              </div>
  
              <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
                <div className="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                  <img
                    className="object-cover h-20 w-20 rounded-full"
                    src={kopikiran}
                    alt=""
                  />
                </div>
  
                <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                  Kopikiran
                </h4>
  
                <p className="font-normal text-gray-500 text-md">
                  Alamat:
                </p>
              </div>
  
              <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
                <div className="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                  <img
                    className="object-cover h-20 w-20 rounded-full"
                    src={kopipopipo}
                    alt=""
                  />
                </div>
  
                <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                  Kopi Popipo
                </h4>
  
                <p className="font-normal text-gray-500 text-md">
                  Alamat
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }