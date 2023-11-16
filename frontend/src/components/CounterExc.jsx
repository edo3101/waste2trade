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
  }

  const exchangeReward = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.put(`/user/buyProduct/${productId}`, { quantity: count });

      if (response.status === 200) {
        window.location.assign('/user/berhasil');
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        <div className="min-h-screen bg-custom-secondary flex justify-center items-center">
          <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
            <div className="py-12 p-10 bg-custom-primary">
              <div className="mb-6 text-center">
                <div className="custom-number-input h-10 w-32 mx-auto my-5">
                  <label
                    htmlFor="custom-input-number"
                    className="w-full lg:mt-5 text-custom-secondary text-base font-semibold"
                  >
                    Jumlah
                  </label>
                  <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent my-5">
                    <button
                      onClick={decreaseCount}
                      className="bg-custom-tertiary text-white hover:text-white hover:bg-custom-tertiary h-full w-20 rounded-l cursor-pointer outline-none"
                    >
                      <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input
                      type="number"
                      className="focus:outline-none text-center w-full bg-custom-tertiary font-semibold text-md hover:text-white focus:text-white md:text-base cursor-default flex items-center text-white outline-none"
                      name="custom-input-number"
                      value={count}
                      onChange={handleInputChange}
                      readOnly
                    />
                    <button
                      onClick={increaseCount}
                      className="bg-custom-tertiary text-white hover:text-white hover:bg-custom-tertiary h-full w-20 rounded-r cursor-pointer"
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
                <button
                  onClick={exchangeReward}
                  className="w-1/2 lg:w-1/3 btn btn-accent btn-outline rounded-full lg:px-20 text-custom-primary my-20"
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