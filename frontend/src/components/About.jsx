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
        <h2 className="text-2xl lg:text-4xl lg:mt-10 font-bold text-center text-custom-tertiary tracking-tighter">
          Tentang Kami
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="self-end lg:w-1/2 mt-6 lg:my-20">
            <img src={w2tImage} />
          </div>
          <div className="self-center lg:w-1/4 lg:mx-10">
            <h1 className="text-3xl lg:text-6xl font-bold text-custom-tertiary mt-7 tracking-tighter">
              Waste2Trade<span className="lg:block"> Indonesia</span>
            </h1>
            <h3 className="text-2xl lg:text-4xl font-bold text-custom-tertiary mt-7 tracking-tighter">
              Let's<span style={{ color: '#1B8D73' }}> trade</span> your<span className="text-custom-secondary"> waste</span> !
            </h3>
            <p className="text-md lg:text-base my-5 lg:my-6 text-custom-tertiary">
              Punya banyak sampah di rumah?
              Tenang aja, ada kami!
              <br></br>
              Kita bisa membangun lingkungan minim sampah bersama.
              <br></br>
              Yuk, tukarkan sampahmu dengan reward menarik!
            </p>
          </div>
        </div>

         <div className="container max-w-screen-xl mx-auto px-4 justify-center">
          <h3 className="text-2xl lg:text-4xl font-bold text-custom-tertiary mt-7 ml-10 tracking-tighter">
              Waste<span style={{ color: '#1B8D73' }}>2</span>Trade<span className="text-custom-secondary"> presents</span>
            </h3>
       <p className="text-lg lg:text-base lg:my-3 text-custom-tertiary ml-10">
        Waste2Trade adalah sebuah platform bagi anak muda dan pemilik kedai kopi yang ingin berkontribusi 
        dalam mengurangi sampah di Indonesia dengan cara menukarkan sampah untuk produk/barang yang ditawarkan oleh kedai kopi (sebagai mitra).
            </p>
            </div>
       

        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-custom-secondary text-lg md:text-2xl uppercase my-8 ml-10 mt-15">
            MISI KAMI UNTUK GENERASI MUDA
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
              <div className="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                <img
                  className="object-cover h-20 w-20"
                  src={kesadaran}
                  alt=""
                />
              </div>
              <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                Kesadaran
              </h4>
              <p className="font-normal text-gray-500 text-md text-center">
                Meningkatkan kesadaran memilah sampah dengan benar.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
              <div className="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                <img
                  className="object-cover h-20 w-20"
                  src={kolaborasi}
                  alt=""
                />
              </div>

              <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                Kolaborasi
              </h4>

              <p className="font-normal text-gray-500 text-md text-center">
                Berkolaborasi dengan kedai kopi terdekat dan penikmat kopi.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
              <div className="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                <img
                  className="object-cover h-20 w-20"
                  src={edukasi}
                  alt=""
                />
              </div>

              <h4 className="font-medium text-custom-tertiary text-lg mb-4">
                Edukasi
              </h4>

              <p className="font-normal text-gray-500 text-md text-center">
                Memberi edukasi seputar pemilahan sampah.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 mb-10">
  <h1 className="font-medium text-custom-secondary text-lg md:text-2xl uppercase my-8 md:mr-10">
    CARA KERJA
    <br />
    WASTE2TRADE
  </h1>
  <ul className="steps md:ml-10">
    <li className="step text-custom-tertiary mb-2 md:mb-0">Kumpulkan sampah</li>
    <li className="step text-custom-tertiary mb-2 md:mb-0">Pergi ke kedai kopi</li>
    <li className="step text-custom-tertiary mb-2 md:mb-0">Hitung sampah</li>
    <li className="step text-custom-tertiary mb-2 md:mb-0">Tukarkan poinmu!</li>
    <li className="step text-custom-tertiary mb-2 md:mb-0">Dapatkan reward!</li>
  </ul>
</div>


        {/** TEAM PROFILE */}
        <div className="flex items-center justify-center bg-custom-tertiary">
          <div className="w-full md:w-1/2 rounded-lg bg-white px-8 py-4 shadow-md m-4">
            <div className="px-1 py-4">
              <h3 className="font-bold text-2xl font-sans text-center text-custom-tertiary">Tim Waste2Trade</h3>
            </div>
            <ul className="grid grid-cols-5 gap-2 px-1">
              <li className="flex items-center flex-col">
                <img src={anjas} alt="" className="rounded-full w-16 h-16 object-cover" />
                <h5 className="font-semibold text-custom-secondary">Anjas</h5>
              </li>
              <li className="flex items-center flex-col">
                <img src={edo} alt="" className="rounded-full w-16 h-16 object-cover" />
                <h5 className="font-semibold text-custom-secondary">Edo</h5>
              </li>
              <li className="flex items-center flex-col">
                <img src={fandi} alt="" className="rounded-full w-16 h-16 object-cover" />
                <h5 className="font-semibold text-custom-secondary">Fandi</h5>
              </li>
              <li>
                <li className="flex items-center flex-col">
                  <img src={garuda} alt="" className="rounded-full w-16 h-16 object-cover" />
                  <h5 className="font-semibold text-custom-secondary">Garuda</h5>
                </li>
              </li>
              <li className="flex items-center flex-col">
                <img src={annisa} alt="" className="rounded-full w-16 h-16 object-cover" />
                <h5 className="font-semibold text-custom-secondary">Annisa</h5>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
