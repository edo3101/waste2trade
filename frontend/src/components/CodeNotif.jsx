import Container from './Container';

export default function CodeNotif() {
  return (
    <section className="w-full bg-custom-primary">
      <Container className="py-5 lg:px-5">
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex flex-col items-center">
          <div className="bg-gray-50 px-8 py-10 rounded-md flex flex-col items-center">

            <h1 className="font-medium text-custom-tertiary text-lg mb-4">
              GIFTCODE / BARCODE
            </h1>
          
          </div>
        </div>
      </Container>
    </section>
  );
}