import Container from './Container';
import kopi from '../assets/images/kopi-reward.jpg';
import totebag from '../assets/images/totebag-reward.jpg';
import tumbler from '../assets/images/tumbler-reward.jpg';
import { Link } from 'react-router-dom';

export default function RewardExc() {
  return (
    <section>
      <Container>
        <div className="container max-w-screen-xl mx-auto px-4 items-center">
          <h1 className="font-medium text-custom-secondary text-lg md:text-2xl uppercase my-8">
            TUKARKAN POINMU!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
              <div className="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">

              <Link to="/user/tukar">
                <img
                  className="object-cover aspect-square h-50 w-50 rounded-md"
                  src={kopi}
                  alt=""
                />
                </Link>
              </div>
              <Link to="/user/tukar">
              <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                Kopi Gula Aren
              </h4>
              </Link>
              <Link to="/user/tukar">
              <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                5 Poin
              </h4>
              </Link>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
              <div className="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                <img
                  className="object-cover aspect-square h-50 w-50 rounded-md"
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
                  className="object-cover aspect-square h-50 w-50 rounded-md"
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
