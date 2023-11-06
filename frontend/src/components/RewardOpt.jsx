import Container from './Container';
import kopi from '../assets/images/kopi-reward.jpg';
import totebag from '../assets/images/totebag-reward.jpg';
import tumbler from '../assets/images/tumbler-reward.jpg';

export default function RewardOpt() {
  return (
<section>
<Container>
 <div class="container max-w-screen-xl mx-auto px-4 items-center">
 <h1 class="font-medium text-custom-secondary text-lg md:text-2xl uppercase my-8">PILIH HADIAH MENARIK!</h1>
     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
             <div class="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
             <img class="object-cover h-20 w-20 rounded-full" src={kopi} alt=""/>
             </div>
             <h4 class="font-medium text-custom-tertiary text-lg mb-4">Kopi Gula Aren</h4>
             <h4 class="font-medium text-custom-tertiary text-lg mb-4">5 Poin</h4>

           
         </div>
         
         <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
             <div class="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
             <img class="object-cover h-20 w-20 rounded-full" src={totebag} alt=""/>
             </div>
             <h4 class="font-medium text-custom-tertiary text-lg mb-4">Tote Bag</h4>
             <h4 class="font-medium text-custom-tertiary text-lg mb-4">15 Poin</h4>

         
         </div>
         
         <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
             <div class="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
             <img class="object-cover h-20 w-20 rounded-full" src={tumbler} alt=""/>
             </div>
             <h4 class="font-medium text-custom-tertiary text-lg mb-4">Tumbler</h4>
             <h4 class="font-medium text-custom-tertiary text-lg mb-4">30 Poin</h4>

         </div>
     </div>
 </div>
 </Container>
 </section>
  )
};