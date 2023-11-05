import Container from './Container';


export default function LoginUser() {
    return (
      <section className='w-full bg-custom-primary'>
        <Container className='py-5 lg:px-5'>
        <div class="min-h-screen bg-gray-100 flex items-center">
  <div class="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
    <div class="py-12 p-10 bg-custom-primary">
      <div class="mb-6">
        <label class="mr-4 text-custom-tertiary font-bold inline-block mb-2" for="name">Email: </label>
        <input type="text" class="border bg-custom-primary py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your name" />
      </div>
      <div class="">
        <label class="mr-4 text-custom-tertiary font-bold inline-block mb-2" for="name">Password: </label>
        <input type="text" class="border bg-custom-primary py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="@email" />
      </div>
      <button className="w-full lg:w-1/4 btn btn-accent rounded-full lg:px-10 text-custom-primary mb-5"><span className='text-base'>Login</span></button>
    </div>
  </div>
</div>
        </Container>
      </section>
    );
  }
