import CraftProcess from "./CraftProcess";
import CustomOrders from "./CustomOrders";
import FeatureWork from "./FeatureWork";
import Services from "./Services";
export default function Home() {
  return (
    <>
      <section className="px-6 pt-2 pb-2 overflow-hidden bg-neutral-800/30">
        <div className="grid grid-cols-[0.7fr_1.3fr] items-center">
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

          <div className="relative h-[24gi0px] pb-0">
            <img
              src="/images/guitar3.png"
              alt="Handcrafted guitar"
              className="absolute right-[-5px] pb-0 top-1/2 h-[420px] -translate-y-1/2 object-contain"
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
