import { Link } from "react-router-dom";
export default function CustomOrders() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Custom Orders</h2>
        <p className="text-neutral-400 mb-10">
          Each piece is made to order. Tell us your idea.
        </p>
        <Link
          to="/custom-order"
          className="inline-block px-8 py-4 md:px-10 md:py-5 bg-amber-700 hover:bg-amber-600 transition text-sm tracking-widest"
        >
          START A CUSTOM ORDER
        </Link>
      </div>
    </section>
  );
}
