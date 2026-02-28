import { useNavigate } from "react-router-dom";
import CraftProcess from "./CraftProcess";
import CustomOrders from "./CustomOrders";
import FeatureWork from "./FeatureWork";
import Services from "./Services";
export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="px-6 md:px-10 lg:px-16 pt-6 md:pt-12 pb-6 md:pb-12 overflow-hidden bg-neutral-800/30">
        <div className="grid grid-cols-[0.7fr_1.3fr] md:grid-cols-2 items-center max-w-7xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Handcraft guitars
              <br />
              and metal pieces
            </h1>

            <button
              onClick={() => navigate("/custom-order")}
              className="bg-amber-700 text-white px-3 py-3 text-xs tracking-widest uppercase"
            >
              Start a Custom Build
            </button>
          </div>

          <div className="relative h-[240px] md:h-[400px] lg:h-[500px]">
            <img
              src="/images/guitar3.png"
              alt="Handcrafted guitar"
              className="absolute right-[-15px] md:right-0 top-1/2 h-[420px] md:h-[500px] lg:h-[600px] -translate-y-1/2 object-contain"
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
