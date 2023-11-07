import Container from './Container';

export default function TukarSampah() {
    return (
  <section>
  <Container>
{/* Nomor HP */}
<label class="block mt-5 mb-2 text-sm font-medium text-custom-secondary">No. HP</label>
<input type="text" placeholder="Ketik nomor user" className="input input-bordered w-full max-w-xs text-custom-tertiary" />
{/* Berat (gram) */}
<label class="block mt-5 mb-2 text-sm font-medium text-custom-secondary">Berat Sampah</label>
<input type="text" placeholder="(gram)" className="input input-bordered w-full max-w-xs text-custom-tertiary" />
{/* PILIHAN SAMPAH */}
<label class="block mt-5 mb-2 text-sm font-medium text-custom-secondary">Jenis Sampah</label>
<select className="bg-custom-tertiary text-custom-primary select select-accent w-full max-w-xs">
  <option disabled selected>Pilih Jenis Sampahmu!</option>
  <option>Plastik</option>
  <option>Botol/Gelas Plastik</option>
  <option>Kaleng</option>
  <option>Kertas</option>
  <option>Kardus</option>
</select>
</Container>
</section>
    );
}