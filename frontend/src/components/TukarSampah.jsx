import Container from './Container';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function TukarSampah({
  formData,
  handleTrashSubmit,
  handleInputChange,
}) {
  return (
    <section>
      <Container>
        <div className="mt-1 text-sm breadcrumbs text-custom-tertiary">
          <ul>
            <li>
              <Link className="text-base" to="/mitra/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="text-base" to="#">
                Hitung Sampah
              </Link>
            </li>
          </ul>
        </div>
        <h2 className="my-6 text-3xl font-bold tracking-tighter text-center text-custom-tertiary lg:mt-0">
          Hitung Sampah
        </h2>
        <form
          onSubmit={handleTrashSubmit}
          className="grid grid-cols-1 gap-4 p-6 mx-auto border-2 card lg:w-1/2 md:grid-cols-2 lg:grid-cols-1 lg:mb-4"
        >
          <div className="mb-1">
            <label className="block mb-2 text-sm font-semibold text-custom-tertiary">
              Nama
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Ketik nama user"
              className="w-full border-2 border-custom-secondary input input-bordered text-custom-tertiary"
            />
          </div>
          <div className="mb-1">
            <label className="block mb-2 text-sm font-semibold text-custom-tertiary">
              No. HP
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Ketik nomor user"
              className="w-full border-2 border-custom-secondary input input-bordered text-custom-tertiary"
            />
          </div>
          <div className="mb-1">
            <label className="block mb-2 text-sm font-semibold text-custom-tertiary">
              Berat Sampah (gram)
            </label>
            <input
              type="number"
              name="trashWeight"
              value={formData.trashWeight}
              onChange={handleInputChange}
              placeholder="(gram)"
              className="w-full border-2 border-custom-secondary input input-bordered text-custom-tertiary"
            />
          </div>
          <div className="mb-1">
            <label className="block mb-2 text-sm font-semibold text-custom-tertiary">
              Jenis Sampah
            </label>
            <select
              name="trashType"
              value={formData.trashType}
              onChange={handleInputChange}
              className="w-full text-base border-2 text-custom-tertiary border-custom-secondary select select-accent"
            >
              <option value="">Pilih Jenis Sampahmu!</option>
              <option value="plastik">Plastik</option>
              <option value="botol/gelas">Botol/Gelas Plastik</option>
              <option value="kaleng">Kaleng</option>
              <option value="kertas">Kertas</option>
              <option value="kardus">Kardus</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full border-2 rounded-full btn btn-accent btn-outline text-custom-primary"
          >
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
}

TukarSampah.propTypes = {
  formData: PropTypes.object.isRequired,
  handleTrashSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
