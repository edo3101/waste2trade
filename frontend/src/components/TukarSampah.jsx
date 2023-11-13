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
        <h2 className="text-3xl font-bold text-center tracking-tighter text-custom-tertiary my-6 lg:mt-0">
          Hitung Sampah
        </h2>
        <form
          onSubmit={handleTrashSubmit}
          className="card border-2 p-6 mx-auto lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:mb-4 gap-4"
        >
          <div className="mb-1">
            <label className="block text-sm font-semibold text-custom-tertiary mb-2">
              Nama
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Ketik nama user"
              className="border-2 border-custom-secondary input input-bordered w-full text-custom-tertiary"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm font-semibold text-custom-tertiary mb-2">
              No. HP
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Ketik nomor user"
              className="border-2 border-custom-secondary input input-bordered w-full text-custom-tertiary"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm font-semibold text-custom-tertiary mb-2">
              Berat Sampah (kg)
            </label>
            <input
              type="number"
              name="trashWeight"
              value={formData.trashWeight}
              onChange={handleInputChange}
              placeholder="(kg)"
              className="border-2 border-custom-secondary input input-bordered w-full text-custom-tertiary"
            />
          </div>
          <div className="mb-1">
            <label className="block text-sm font-semibold text-custom-tertiary mb-2">
              Jenis Sampah
            </label>
            <select
              name="trashType"
              value={formData.trashType}
              onChange={handleInputChange}
              className="text-custom-tertiary text-base border-2 border-custom-secondary select select-accent w-full"
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
            className="w-full btn btn-accent btn-outline border-2 rounded-full text-custom-primary"
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