{/* PROFILE KEDAI KOPI */}

import Container from './Container';
import kopigigih from '../assets/images/kopigigih.jpg';

export default function KedaiProfile() {
  return (
<section>
<Container>
<div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-col items-center">
<div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
    <div class="w-200 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
    <img class="object-cover aspect-square" src={kopigigih} alt=""/>
    </div>

    <h4 class="font-medium text-custom-tertiary text-lg mb-4">KEDAI KOPI GIGIH</h4>

    <p class="font-normal text-gray-500 text-md">Alamat: Jalan Jalan</p>
</div>
</div>
</Container>
</section>
  )
};