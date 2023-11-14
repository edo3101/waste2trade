import Container from './Container';

export default function CodeNotif() {
  return (
    <section className="w-full bg-custom-primary">
      <Container className="py-5 lg:px-5">
        <div className="flex flex-col items-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center px-8 py-10 rounded-md bg-gray-50">
            <h1 className="mb-4 text-lg font-medium text-custom-tertiary">
              GIFTCODE / BARCODE
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
