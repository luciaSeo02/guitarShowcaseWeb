import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function CustomOrders() {
  const { t } = useTranslation();

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-serif mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("customOrder.sectionTitle")}
        </motion.h2>

        <motion.p
          className="text-neutral-400 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("customOrder.sectionText")}
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link
            to="/custom-order"
            className="inline-block px-8 py-4 md:px-10 md:py-5 bg-amber-700 hover:bg-amber-600 transition text-sm tracking-widest shadow-lg hover:shadow-2xl"
          >
            {t("customOrder.sectionButton")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
