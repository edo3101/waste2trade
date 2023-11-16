import { useState } from 'react';
import { Link } from 'react-router-dom';
import kopi from '../assets/images/kopi-reward.jpg';
import Container from '../components/Container';

export default ListRewardCount;
const ListRewardCount = () => {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <section className="w-full bg-custom-primary">
      <Container className="py-5 lg:px-5">
        <div className="flex items-center justify-center min-h-screen bg-custom-secondary">
          <div className="container max-w-md mx-auto transition duration-300 shadow-md hover:shadow-lg">
            <div className="p-10 py-12 bg-custom-primary">
              <div className="mb-6 text-center">
                <img
                  className="object-cover w-32 h-32 mx-auto rounded-full"
                  src={kopi}
                  alt=""
                />
                <div className="w-32 h-10 mx-auto my-5 custom-number-input">
                  <label
                    htmlFor="custom-input-number"
                    className="w-full text-base font-semibold lg:mt-5 text-custom-secondary"
                  >
                    Jumlah
                  </label>
                  <div className="relative flex flex-row w-full h-10 my-5 bg-transparent rounded-lg">
                    <button
                      onClick={decreaseCount}
                      className="w-20 h-full text-white rounded-l outline-none cursor-pointer bg-custom-tertiary hover:text-white hover:bg-custom-tertiary"
                    >
                      <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input
                      type="number"
                      className="flex items-center w-full font-semibold text-center text-white outline-none cursor-default focus:outline-none bg-custom-tertiary text-md hover:text-white focus:text-white md:text-base"
                      name="custom-input-number"
                      value={count}
                      readOnly
                    />
                    <button
                      onClick={increaseCount}
                      className="w-20 h-full text-white rounded-r cursor-pointer bg-custom-tertiary hover:text-white hover:bg-custom-tertiary"
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
                <Link to="/user/berhasil">
                  <button className="w-1/2 my-20 rounded-full lg:w-1/3 btn btn-accent btn-outline lg:px-20 text-custom-primary">
                    Tukarkan
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
