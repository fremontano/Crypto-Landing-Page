import { useEffect } from "react";


import { useCryptoStore } from "./features/crypto/store/crypto.store";

import { Footer } from "./components/Footer";
import { ProfileUsers } from "./features/crypto/components/ProfileUsers";
import { TickerItemList } from "./features/crypto/components/TickerItemList";
import { Hero } from "./features/crypto/components/Hero";


import { QuoteForm } from "./features/crypto/components/QuoteForm";
import { QuoteResult } from "./features/crypto/components/QuoteResult";
// import { getCryptos } from "./features/crypto/services/crypto.service";

function App() {


  const {
    cryptos,
    fetchCryptoData,
  } = useCryptoStore();

  console.log('cryptos', cryptos)

  useEffect(() => {
    fetchCryptoData();
  }, [fetchCryptoData]);

  console.log(cryptos);






  return (
    <main className="min-h-screen bg-[#071521] text-white">

      <Hero />

      <TickerItemList />

      <ProfileUsers />

      <section
        id="cotizador"
        className="bg-[#071521] px-4 py-12"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">

          <QuoteForm />

          <QuoteResult />

        </div>
      </section>

      <Footer />

    </main>
  );
}

export default App;
