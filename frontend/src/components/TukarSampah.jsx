import Container from './Container';
import { Link } from 'react-router-dom';

export default function TukarSampah() {
  return (
    <section>
      <Container>
      <div className="">
        {/* Nama*/}
        <label className="block mt-5 mb-2 text-sm font-medium text-custom-secondary">
          Nama
        </label>
        <input
          type="text"
          placeholder="Ketik nama user"
          className="border-2 border-custom-secondary input input-bordered w-full max-w-xs text-custom-tertiary"
        />
        {/* Nomor HP */}
        <label className="block mt-5 mb-2 text-sm font-medium text-custom-secondary">
          No. HP
        </label>
        <input
          type="text"
          placeholder="Ketik nomor user"
          className="border-2 border-custom-secondary input input-bordered w-full max-w-xs text-custom-tertiary"
        />
        {/* Berat (gram) */}
        <label className="block mt-5 mb-2 text-sm font-medium text-custom-secondary">
          Berat Sampah
        </label>
        <input
          type="text"
          placeholder="(kg)"
          className="border-2 border-custom-secondary input input-bordered w-full max-w-xs text-custom-tertiary"
        />
        {/* PILIHAN SAMPAH */}
        <label className="block mt-5 mb-2 text-sm font-medium text-custom-secondary">
          Jenis Sampah
        </label>
        <select className="bg-custom-tertiary text-custom-primary border-2 border-custom-secondary select select-accent w-full max-w-xs">
          <option disabled selected>
            Pilih Jenis Sampahmu!
          </option>
          <option>Plastik</option>
          <option>Botol/Gelas Plastik</option>
          <option>Kaleng</option>
          <option>Kertas</option>
          <option>Kardus</option>
        </select>
       <br></br>
       <Link to={'/mitra/giftcode'}>
        <button
                  className="w-half my-5 btn btn-accent btn-outline rounded-full lg:px-20 px-4 text-custom-primary">Submit
                  </button>
      </Link>
      </div>
      </Container>
    </section>
  );
}
