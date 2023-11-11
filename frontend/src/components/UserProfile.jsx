import Container from './Container';
import kopi from '../assets/images/kopi-reward.jpg';
import totebag from '../assets/images/totebag-reward.jpg';
import tumbler from '../assets/images/tumbler-reward.jpg';
import w2tProfile from '../assets/images/ProfileUser.jpg';
import { Link } from 'react-router-dom';

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
        <div className="container max-w-screen-xl mx-auto px-4 items-center">
          <h1 className="font-medium text-custom-secondary text-lg md:text-2xl uppercase my-8">
            PILIH HADIAH MENARIK!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
              <div className="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                <img
                  className="object-cover h-20 w-20 rounded-full"
                  src={kopi}
                  alt=""
                />
              </div>
              <Link to={'/user/tukar'}>
              <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                Kopi Gula Aren
              </h4>
              <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                5 Poin
              </h4>
              </Link>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
              <div className="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                <img
                  className="object-cover h-20 w-20 rounded-full"
                  src={totebag}
                  alt=""
                />
              </div>
              <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                Tote Bag
              </h4>
              <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                15 Poin
              </h4>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
              <div className="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                <img
                  className="object-cover h-20 w-20 rounded-full"
                  src={tumbler}
                  alt=""
                />
              </div>
              <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                Tumbler
              </h4>
              <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                30 Poin
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
