import Container from './Container';
import w2tImage from '../assets/images/w2t-hero.png';
import w2tProfile from '../assets/images/ProfileUser.jpg';
import plastik from '../assets/images/plastik.jpg';
import botol from '../assets/images/botol-gelas-kaleng.jpg';
import kertas from '../assets/images/kertas-kardus.jpg';
import kopi from '../assets/images/kopi-reward.jpg';
import totebag from '../assets/images/totebag-reward.jpg';
import tumbler from '../assets/images/tumbler-reward.jpg';
import kopigigih from '../assets/images/kopigigih.jpg';
import kopikiran from '../assets/images/kopikiran.jpg';
import kopipopipo from '../assets/images/kopipopipo.jpg';
import kopigigihcoba from '../assets/images/kopigigihbesar.jpg';


export default function Hero() {
  return (
    <section className='py-10'>
      <Container>
        <h2 className="text-2xl lg:text-4xl lg:mt-20 font-bold text-center text-custom-tertiary tracking-tighter">Tentang Kami</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="self-end lg:w-1/2 mt-6 lg:my-20">
            <img src={w2tImage} />
          </div>
          <div className='self-center lg:w-1/4 lg:mx-10'>
            <h1 className="text-3xl lg:text-6xl font-bold text-custom-tertiary mt-7 tracking-tighter">Waste2Trade<span className='lg:block'> Indonesia</span></h1>
            <p className="text-md lg:text-base my-5 lg:my-6 text-custom-tertiary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum repellat, quia vitae id error corrupti sunt sequi quasi. Libero?</p>
            <button className="w-full lg:w-1/4 btn btn-accent btn-outline rounded-full lg:px-20 text-custom-primary mb-5"><span className='text-base'>More</span></button>
          </div>
        </div>
{/*LOGIN USER START */}
        <section className='w-full bg-custom-primary'>
        <Container className='py-5 lg:px-5'>
        <div class="min-h-screen bg-custom-secondary flex items-center">
  <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
    <div class="py-12 p-10 bg-custom-primary">
    <div class="mb-6">
    <h2 className="text-2xl lg:text-4xl font-bold lg:mb-5 tracking-tighter text-center text-custom-tertiary">USER</h2>
        <label class="mr-4 text-custom-tertiary font-bold inline-block mb-2" for="name">Email</label>
        <input type="text" placeholder="email@" className="input input-bordered input-accent w-full max-w-xs  text-custom-tertiary " />
      </div>
      <div class="mb-6">
        <label class="mr-4 text-custom-tertiary font-bold inline-block mb-2" for="name">Password</label>
        <input type="password" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs  text-custom-tertiary "/>
      </div>
      <div className="flex justify-center">
      <button className="w-full lg:w-1/4 btn btn-accent btn-outline rounded-full lg:px-20 text-custom-primary mb-5 "><span className='text-base'>Login</span></button>
    </div>
    </div>
  </div>
</div>
        </Container>
      </section>
  {/*LOGIN USER END */}
    
{/*LOGIN MITRA START */}
      <section className='w-full bg-custom-primary'>
        <Container className='py-5 lg:px-5'>
        <div class="min-h-screen bg-custom-secondary flex items-center">
  <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
    <div class="py-12 p-10 bg-custom-primary ">
    <div class="mb-6">
    <h2 className="text-2xl lg:text-4xl font-bold lg:mb-5 tracking-tighter text-center text-custom-tertiary">MITRA</h2>
        <label class="mr-4 text-custom-tertiary font-bold inline-block mb-2" for="name">Email</label>
        <input type="text" placeholder="email@" className="input input-bordered input-accent w-full max-w-xs  text-custom-tertiary " />
      </div>
      <div class="mb-6">
        <label class="mr-4 text-custom-tertiary font-bold inline-block mb-2" for="name">Password</label>
        <input type="password" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs  text-custom-tertiary "/>
      </div>
      <div className="flex justify-center">
      <button className="w-full lg:w-1/4 btn btn-accent btn-outline rounded-full lg:px-20 text-custom-primary mb-5 "><span className='text-base'>Login</span></button>
    </div>
    </div>
  </div>
</div>
        </Container>
      </section>
    {/* LOGIN MITRA END */}

    {/* PROFILE USER START */}
    <section class="py-10 md:py-16 bg-custom-primary">
            <div class="container max-w-screen-xl mx-auto px-4">
                <div class="text-center">
                    <h1 class="font-medium text-custom-secondary text-lg md:text-2xl uppercase mb-8">Hi, Coffee Lover!</h1>
                </div>
                
                <div class="text-center">
                    <div class="flex justify-center mb-16">
                        <img class="object-cover h-80 w-80 rounded-full" src={w2tProfile} alt=""/>
                    </div>

                    <h6 class="font-medium text-custom-secondary text-lg md:text-2xl uppercase mb-8">Jane Doe</h6>

                    <h6 class="font-medium text-custom-secondary text-lg md:text-2xl uppercase mb-8">Umur: 16</h6>

                    <h6 class="font-medium text-custom-secondary text-lg md:text-2xl uppercase mb-8">Domisili: Jakarta</h6>

                    <h6 class="font-medium text-custom-secondary text-lg md:text-2xl uppercase mb-8">Poin Terkumpul: 1010</h6>
                    <a href="#" className="w-full lg:w-1/4 btn btn-accent btn-outline rounded-full lg:px-20 text-custom-primary mb-5">Scan Barcode</a>
                </div>
            </div>
          </section>
     {/* PROFILE USER END */}
      
      {/* YANG JADINYA DIPISAH, INI PAGE UMUM SEBELUM LOGIN */}
      
            {/* OPSI SAMPAH */}
            <section class="py-10 md:py-16 bg-custom-primary">
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
            {/* OPSI HADIAH*/}
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
            {/* OPSI KEDAI*/}
            <div class="container max-w-screen-xl mx-auto px-4">
            <h1 class="font-medium text-custom-secondary text-lg md:text-2xl uppercase my-8">KEDAI KOPI TERDEKAT</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
                        <div class="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                        <img class="object-cover h-20 w-20" src={kopigigih} alt=""/>
                        </div>

                        <h4 class="font-medium text-custom-tertiary text-lg mb-4">Kedai Kopi Gigih</h4>

                        <p class="font-normal text-gray-500 text-md">Alamat: </p>
                    </div>
                    
                    <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
                        <div class="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                        <img class="object-cover h-20 w-20" src={kopikiran} alt=""/>
                        </div>

                        <h4 class="font-medium text-custom-tertiary text-lg mb-4">Kedai Kopi Kiran</h4>

                        <p class="font-normal text-gray-500 text-md">Alamat: </p>
                    </div>
                    
                    <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
                        <div class="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                        <img class="object-cover h-20 w-20" src={kopipopipo} alt=""/>
                        </div>

                        <h4 class="font-medium text-custom-tertiary text-lg mb-4">Kedai Kopi Popipo</h4>

                        <p class="font-normal text-gray-500 text-md">Alamat: </p>
                    </div>
                </div>
            </div>
        </section>
   {/* YANG JADINYA DIPISAH, INI PAGE UMUM SEBELUM LOGIN */}
        
    {/* PROFILE KEDAI KOPI AJA ONLY */}
    <div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-col items-center">
                    <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
                        <div class="w-200 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                        <img class="object-cover aspect-square" src={kopigigih} alt=""/>
                        </div>

                        <h4 class="font-medium text-custom-tertiary text-lg mb-4">KEDAI KOPI GIGIH</h4>

                        <p class="font-normal text-gray-500 text-md">Alamat: Jalan Jalan</p>
                    </div>
                    </div>
    {/*opsi penukaran sampahnya */}
    {/* OPSI SAMPAH */}
    <div class="container max-w-screen-xl mx-auto px-4 items-center">
            <h1 class="font-medium text-custom-secondary text-lg md:text-2xl uppercase my-8">TUKARKAN POINMU!</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
                        <div class="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                        <img class="object-cover aspect-square h-50 w-50 rounded-md" src={kopi} alt=""/>
                        </div>
                        <h4 class="font-medium text-custom-tertiary text-lg mb-4">Kopi Gula Aren</h4>
                        <h4 class="font-medium text-custom-tertiary text-lg mb-4">5 Poin</h4>

                      
                    </div>
                    
                    <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
                        <div class="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                        <img class="object-cover aspect-square h-50 w-50 rounded-md" src={totebag} alt=""/>
                        </div>
                        <h4 class="font-medium text-custom-tertiary text-lg mb-4">Tote Bag</h4>
                        <h4 class="font-medium text-custom-tertiary text-lg mb-4">15 Poin</h4>

                    
                    </div>
                    
                    <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
                        <div class="w-20 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                        <img class="object-cover aspect-square h-50 w-50 rounded-md" src={tumbler} alt=""/>
                        </div>
                        <h4 class="font-medium text-custom-tertiary text-lg mb-4">Tumbler</h4>
                        <h4 class="font-medium text-custom-tertiary text-lg mb-4">30 Poin</h4>

                    </div>
                </div>
            </div>

{/** AWAL PENUKARAN SAMPAH MITRA 7 TUGAS TAMBAHAN KEMAREN */}
{/* PROFILE KEDAI KOPI */}
<section className='w-full bg-custom-primary'>
        <Container className='py-5 lg:px-5'>
<div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-col items-center">
                    <div class="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">
                        <div class="w-200 py-6 flex justify-center bg-gray-50 rounded-md mb-4">
                        <img class="object-cover aspect-square" src={kopigigih} alt=""/>
                        </div>

                        <h4 class="font-medium text-custom-tertiary text-lg mb-4">HI, KEDAI KOPI GIGIH!</h4>
                        <div className="btn my-5 bg-custom-primary text-custom-tertiary">
                          Poin kedai Anda sudah terkumpul:
                          <div className="badge text-custom-tertiary">1000</div>
                          </div>
                    </div>
                    </div>

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

{/*TANGGAL */}
<div class="relative max-w-sm my-5">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"></input>
</div>

{/*UPLOAD */}
<label class="block mt-5 mb-2 text-sm font-medium text-custom-secondary dark:text-white" for="user_avatar">Upload foto</label>
<input type="file" className=" bg-custom-tertiary file-input file-input-bordered file-input-accent w-full max-w-xs" />

<div className="my-5 flex justify-left">
  <button className="w-30 h-10 btn btn-accent btn-outline rounded-full text-sm text-custom-primary">
    <span className='text-sm'>Submit</span>
  </button>
</div>
</Container>
</section>
      {/** END OF PERHITUNGAN SAMPAH MITRA 7 */}

{/** COUNTER JUMLAH TUKARKAN */}
<section className="w-full bg-custom-primary">
  <Container className="py-5 lg:px-5">
    <div className="min-h-screen bg-custom-secondary flex justify-center items-center">
      <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
        <div className="py-12 p-10 bg-custom-primary">
          <div className="mb-6 text-center">
            <img
              className="object-cover h-20 w-20 rounded-full mx-auto"
              src={kopi}
              alt=""/>
            <div className="custom-number-input h-10 w-32 mx-auto">
              <label for="custom-input-number" className="w-full text-custom-secondary text-sm font-semibold">
              Jumlah
              </label>
              <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent my-5">
                <button data-action="decrement" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                  <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input type="number" className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none" name="custom-input-number" value="0" />
                <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                <span className="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
            <a href="#" className="w-full lg:w-1/4 btn btn-accent btn-outline rounded-full lg:px-20 text-custom-primary my-20">Tukarkan</a>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

{/** NOTIFICATION */}
<section className="w-full bg-custom-primary">
<div class="flex h-screen">
  <div class="m-auto">
    <div class="bg-custom-secondary rounded-lg border-gray-300 border p-3 shadow-lg">
      <div class="flex flex-row">
        <div class="px-2">
          <svg width="24" height="24" viewBox="0 0 1792 1792" fill="#44C997" xmlns="http://www.w3.org/2000/svg">
            <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
            </svg>
        </div>
        <div class="ml-2 mr-6">
          <span class="font-semibold">SELAMAT!</span>
          <span class="block text-gray-500">PENUKARAN BERHASIL!</span>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

  </Container>
</section>

  );
}
