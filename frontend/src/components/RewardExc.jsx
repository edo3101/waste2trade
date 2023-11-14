import Container from './Container';
import kopi from '../assets/images/kopi-reward.jpg';
import totebag from '../assets/images/totebag-reward.jpg';
import tumbler from '../assets/images/tumbler-reward.jpg';
import { Link } from 'react-router-dom';

export default function RewardExc() {
  return (
    <section>
      <Container>
        <div className="container items-center max-w-screen-xl px-4 mx-auto">
          <h1 className="my-8 text-lg font-medium uppercase text-custom-secondary md:text-2xl">
            TUKARKAN POINMU!
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <Link to="/user/tukar">
                  <img
                    className="object-cover rounded-md aspect-square h-50 w-50"
                    src={kopi}
                    alt=""
                  />
                </Link>
              </div>
              <Link to="/user/tukar">
                <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                  Kopi Gula Aren
                </h4>
              </Link>
              <Link to="/user/tukar">
                <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                  5 Poin
                </h4>
              </Link>
            </div>

            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover rounded-md aspect-square h-50 w-50"
                  src={totebag}
                  alt=""
                />
              </div>
              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                Tote Bag
              </h4>
              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                15 Poin
              </h4>
            </div>

            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover rounded-md aspect-square h-50 w-50"
                  src={tumbler}
                  alt=""
                />
              </div>
              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                Tumbler
              </h4>
              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                30 Poin
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
