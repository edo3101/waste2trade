import Container from './Container';
import plastik from '../assets/images/plastik.jpg';
import botol from '../assets/images/botol-gelas-kaleng.jpg';
import kertas from '../assets/images/kertas-kardus.jpg';

export default function WasteOpt() {
  return (
    <section>
      <Container>
        <div className="container max-w-screen-xl px-4 mx-auto">
          <h1 className="my-8 text-lg font-medium uppercase text-custom-secondary md:text-2xl">
            TUKARKAN SAMPAHMU!
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src={plastik}
                  alt=""
                />
              </div>

              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                Plastik
              </h4>

              <p className="font-normal text-gray-500 text-md">
                Sampah plastik ada sebanyak 18,55%, masih mau nambah lagi?
              </p>
            </div>

            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src={botol}
                  alt=""
                />
              </div>

              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                Botol, gelas, dan kaleng bekas
              </h4>

              <p className="font-normal text-gray-500 text-md">
                Sebagai peminum kopi, kamu pasti membuang banyak sampah ini,
                ayo, berubah!
              </p>
            </div>

            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src={kertas}
                  alt=""
                />
              </div>

              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                Kardus dan kertas
              </h4>

              <p className="font-normal text-gray-500 text-md">
                Sampah kertas/karton totalnya ada 11,04%, yuk, kurangi!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
