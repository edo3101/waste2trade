import Container from './Container';
import kopi from '../assets/images/kopi-reward.jpg';

export default function CounterExc() {
  return (
<section className="w-full bg-custom-primary">
  <Container className="py-5 lg:px-5">
    <div className="min-h-screen bg-custom-secondary flex justify-center items-center">
      <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <div className="py-12 p-10 bg-custom-primary">
          <div className="mb-6 text-center">
            <img
              className="object-cover h-20 w-20 rounded-full mx-auto"
              src={kopi}
              alt=""/>
            <div className="custom-number-input h-10 w-32 mx-auto">
              <label for="custom-input-number" className="w-full text-custom-secondary text-sm font-semibold">
              Jumlah
              </label>
              <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent my-5">
                <button data-action="decrement" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                  <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input type="number" className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none" name="custom-input-number" value="0" />
                <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
            <a href="#" className="w-full lg:w-1/4 btn btn-accent btn-outline rounded-full lg:px-20 text-custom-primary my-20">Tukarkan</a>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>
  )
};