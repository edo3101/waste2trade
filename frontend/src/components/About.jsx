import Container from './Container';
import w2tImage from '../assets/images/w2t-hero.png';
import edukasi from '../assets/images/edukasi.png';
import kesadaran from '../assets/images/kesadaran.png';
import kolaborasi from '../assets/images/kolaborasi.png';
import anjas from '../assets/images/anjas.png';
import annisa from '../assets/images/annisa.png';
import edo from '../assets/images/edo.png';
import fandi from '../assets/images/fandi.png';
import garuda from '../assets/images/garuda.png';

export default function About() {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-2xl font-bold tracking-tighter text-center lg:text-4xl lg:mt-10 text-custom-tertiary">
          Tentang Kami
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="self-end mt-6 lg:w-1/2 lg:my-20">
            <img src={w2tImage} />
          </div>
          <div className="self-center lg:w-1/4 lg:mx-10">
            <h1 className="text-3xl font-bold tracking-tighter lg:text-6xl text-custom-tertiary mt-7">
              Waste2Trade<span className="lg:block"> Indonesia</span>
            </h1>
            <h3 className="text-2xl font-bold tracking-tighter lg:text-4xl text-custom-tertiary mt-7">
              Let's<span style={{ color: '#1B8D73' }}> trade</span> your
              <span className="text-custom-secondary"> waste</span> !
            </h3>
            <p className="my-5 text-md lg:text-base lg:my-6 text-custom-tertiary">
              Punya banyak sampah di rumah? Tenang aja, ada kami!
              <br></br>
              Kita bisa membangun lingkungan minim sampah bersama.
              <br></br>
              Yuk, tukarkan sampahmu dengan reward menarik!
            </p>
          </div>
        </div>

        <div className="container justify-center max-w-screen-xl px-4 mx-auto">
          <h3 className="ml-10 text-2xl font-bold tracking-tighter lg:text-4xl text-custom-tertiary mt-7">
            Waste<span style={{ color: '#1B8D73' }}>2</span>Trade
            <span className="text-custom-secondary"> presents</span>
          </h3>
          <p className="ml-10 text-lg lg:text-base lg:my-3 text-custom-tertiary">
            Waste2Trade adalah sebuah platform bagi anak muda dan pemilik kedai
            kopi yang ingin berkontribusi dalam mengurangi sampah di Indonesia
            dengan cara menukarkan sampah untuk produk/barang yang ditawarkan
            oleh kedai kopi (mitra).
          </p>
        </div>
        
        <div className="container max-w-screen-xl px-4 mx-auto">
          <h1 className="my-8 ml-10 text-lg font-medium uppercase text-custom-secondary md:text-2xl mt-15">
            MISI KAMI UNTUK GENERASI MUDA
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover w-20 h-20"
                  src={kesadaran}
                  alt=""
                />
              </div>
              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                Kesadaran
              </h4>
              <p className="font-normal text-center text-gray-500 text-md">
                Meningkatkan kesadaran memilah sampah dengan benar.
              </p>
            </div>

            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img
                  className="object-cover w-20 h-20"
                  src={kolaborasi}
                  alt=""
                />
              </div>

              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                Kolaborasi
              </h4>

              <p className="font-normal text-center text-gray-500 text-md">
                Berkolaborasi dengan kedai kopi terdekat dan penikmat kopi.
              </p>
            </div>

            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <div className="flex justify-center w-20 py-6 mb-4 rounded-md bg-gray-50">
                <img className="object-cover w-20 h-20" src={edukasi} alt="" />
              </div>

              <h4 className="mb-4 text-lg font-medium text-custom-tertiary">
                Edukasi
              </h4>

              <p className="font-normal text-center text-gray-500 text-md">
                Memberi edukasi seputar pemilahan sampah.
              </p>
            </div>
          </div>
        </div>

         <div className="container max-w-screen-xl px-4 mx-auto">
          <h1 className="my-8 ml-10 text-lg font-medium uppercase text-custom-secondary md:text-2xl mt-15">
            SEKILAS MENGENAI PEMILAHAN SAMPAH
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <h4 className="mb-4 text-lg font-medium text-center text-custom-tertiary">
                Sampah Organik <br></br> (sampah yang dapat terurai)
              </h4>
              <p className="font-normal text-gray-500 text-md">Contoh: daun kering, sayur, sisa makanan, bekas/kulit buah</p>
              <br></br>
              <ul className="font-normal text-gray-500 text-md">
                <li>- Pisahkan sampah organik basah dan kering</li>
                <li>- Gunakan sebagai pakan hewan peliharaan</li>
                <li>- Kubur sampah</li>
                <li>- Tanam ulang sayuran</li>
                <li>- Gunakan sebagai pupuk kompos</li>
              </ul>
            </div>

            <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
              <h4 className="mb-4 text-lg text-center font-medium text-custom-tertiary">
                Sampah Anorganik <br></br> (sampah yang sulit terurai)
              </h4>
              <p className="font-normal text-gray-500 text-md">Contoh: plastik, botol, sedotan, kaleng, kresek, kaca, kertas</p>
              <br></br>
              <ul className="font-normal text-gray-500 text-md">
                <li>- Kumpulkan sampah</li>
                <li>- Pisahkan jenis sampahnya</li>
                <li>- Bersihkan sampah</li>
                <li>- Gunakan ulang (reuse)</li>
                <li>- Setorkan ke bank sampah (recycle)</li>
                <li>- Manfaatkan sebagai ecobrick</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center mt-10 mb-10 md:flex-row">
          <h1 className="my-8 text-lg font-medium uppercase text-custom-secondary md:text-2xl md:mr-10">
            CARA KERJA
            <br />
            WASTE2TRADE
          </h1>
          <ul className="steps md:ml-10">
            <li className="mb-2 step text-custom-tertiary md:mb-0">
              Kumpulkan sampah
            </li>
            <li className="mb-2 step text-custom-tertiary md:mb-0">
              Pergi ke kedai kopi
            </li>
            <li className="mb-2 step text-custom-tertiary md:mb-0">
              Hitung sampah
            </li>
            <li className="mb-2 step text-custom-tertiary md:mb-0">
              Tukarkan poinmu!
            </li>
            <li className="mb-2 step text-custom-tertiary md:mb-0">
              Dapatkan reward!
            </li>
          </ul>
        </div>

        {/** TEAM PROFILE */}
        <div className="flex items-center justify-center bg-custom-tertiary">
          <div className="w-full px-8 py-4 m-4 bg-white rounded-lg shadow-md md:w-1/2">
            <div className="px-1 py-4">
              <h3 className="font-sans text-2xl font-bold text-center text-custom-tertiary">
                Tim Waste2Trade
              </h3>
            </div>
            <ul className="grid grid-cols-5 gap-2 px-1">
              <li className="flex flex-col items-center">
                <img
                  src={anjas}
                  alt=""
                  className="object-cover w-16 h-16 rounded-full"
                />
                <h5 className="font-semibold text-custom-secondary">Anjas</h5>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={edo}
                  alt=""
                  className="object-cover w-16 h-16 rounded-full"
                />
                <h5 className="font-semibold text-custom-secondary">Edo</h5>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={fandi}
                  alt=""
                  className="object-cover w-16 h-16 rounded-full"
                />
                <h5 className="font-semibold text-custom-secondary">Fandi</h5>
              </li>
              <li>
                <li className="flex flex-col items-center">
                  <img
                    src={garuda}
                    alt=""
                    className="object-cover w-16 h-16 rounded-full"
                  />
                  <h5 className="font-semibold text-custom-secondary">
                    Garuda
                  </h5>
                </li>
              </li>
              <li className="flex flex-col items-center">
                <img
                  src={annisa}
                  alt=""
                  className="object-cover w-16 h-16 rounded-full"
                />
                <h5 className="font-semibold text-custom-secondary">Annisa</h5>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
