{/* MITRA START */}

import Container from './Container';

export default function MitraLogin() {
  return (
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
  )
};