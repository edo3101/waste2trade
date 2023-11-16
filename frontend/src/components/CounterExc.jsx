import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from './Container';
import useAxios from '../hooks/useAxios';

const CounterExc = () => {
  const [count, setCount] = useState(0);
  const { axiosInstance } = useAxios();
  const { productId } = useParams();

  const handleInputChange = (e) => {
    setCount(e.target.value);
  };

  const exchangeReward = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.put(
        `/user/buyProduct/${productId}`,
        { quantity: count }
      );

      if (response.status === 200) {
        window.location.assign('/user/berhasil');
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <Container>
        <div className="mt-3 text-sm breadcrumbs text-custom-tertiary">
          <ul>
            <li>
              <Link className="text-base" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-base" to="/user/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="text-base" to="#">
                Tukar Reward
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center min-h-screen bg-custom-secondary">
          <div className="container max-w-md mx-auto transition duration-300 shadow-md hover:shadow-lg">
            <div className="p-10 py-12 bg-custom-primary">
              <div className="mb-6 text-center">
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
                      onChange={handleInputChange}
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
                <button
                  onClick={exchangeReward}
                  className="w-1/2 my-20 rounded-full lg:w-1/3 btn btn-accent btn-outline lg:px-20 text-custom-primary"
                >
                  Tukarkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CounterExc;
