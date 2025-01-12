import { SpecialOffers, Subscribe, SuperQuality, Hero, Footer, PopularProduct, Services, CustomerReviews } from "./sections";
import Nav from "./components/Nav";

const App = () => {
  return ( 
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
         <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x pb-8 text-white">
        <Footer />
      </section>
    </main>
   );
}
 
export default App;