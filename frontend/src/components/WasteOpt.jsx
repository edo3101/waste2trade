{/* OPSI SAMPAH */}
import Container from './Container';
import plastik from '../assets/images/plastik.jpg';
import plastik from '../assets/images/plastik.jpg';
import botol from '../assets/images/botol-gelas-kaleng.jpg';
import kertas from '../assets/images/kertas-kardus.jpg';

export default function WasteOpt() {
  return (
    <section>
        <Container>
<div class="container max-w-screen-xl mx-auto px-4">
<h1 class="font-medium text-custom-secondary text-lg md:text-2xl uppercase my-8">TUKARKAN SAMPAHMU!</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
            <div class="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
            <img class="object-cover h-20 w-20 rounded-full" src={plastik} alt=""/>
            </div>

            <h4 class="font-medium text-custom-tertiary text-lg mb-4">Plastik</h4>

            <p class="font-normal text-gray-500 text-md">Sampah plastik ada sebanyak 18,55%, masih mau nambah lagi?</p>
        </div>
        
        <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
            <div class="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
            <img class="object-cover h-20 w-20 rounded-full" src={botol} alt=""/>
            </div>

            <h4 class="font-medium text-custom-tertiary text-lg mb-4">Botol, gelas, dan kaleng bekas</h4>

            <p class="font-normal text-gray-500 text-md">Sebagai peminum kopi, kamu pasti membuang banyak sampah ini, ayo, berubah!</p>
        </div>
        
        <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
            <div class="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
            <img class="object-cover h-20 w-20 rounded-full" src={kertas} alt=""/>
            </div>

            <h4 class="font-medium text-custom-tertiary text-lg mb-4">Kardus dan kertas</h4>

            <p class="font-normal text-gray-500 text-md">Sampah kertas/karton totalnya ada 11,04%, yuk, kurangi!</p>
        </div>
    </div>

</div>
</Container>
</section>
  )
};