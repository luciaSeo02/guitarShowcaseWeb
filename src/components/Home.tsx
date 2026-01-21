import CraftProcess from "./CraftProcess";
import CustomOrders from "./CustomOrders";
import FeatureWork from "./FeatureWork";
import Services from "./Services";
export default function Home() {
  return (
    <>
      <section className="px-4 pt-8 pb-6 overflow-hidden">
        <div className="grid grid-cols-[0.8fr_1.2fr] items-center">
          <div>
            <h1 className="text-4xl font-serif leading-tight mb-6">
              Handcraft guitars
              <br />
              and metal pieces
            </h1>

            <button className="bg-amber-700 text-white px-6 py-3 text-xs tracking-widest uppercase">
              View Work
            </button>
          </div>

          <div className="relative">
            <img
              src="/images/guitar.png"
              alt="Handcrafted guitar"
              className="object-contain translate-x-4"
            />
          </div>
        </div>
      </section>

      <FeatureWork />
      <Services />
      <CraftProcess />
      <CustomOrders />
    </>
  );
}
