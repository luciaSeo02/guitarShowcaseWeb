import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CustomOrderPage() {
  const navigate = useNavigate();

  const location = useLocation();
  const selectedService = location.state?.service || "";
  const referencePiece = location.state?.reference || "";
  const referenceDescription = location.state?.description || "";

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: referencePiece
      ? t("customOrder.defaultMessage", {
          reference: referencePiece,
          description: referenceDescription,
        })
      : "",
    service: selectedService,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 md:py-16 bg-neutral-900 min-h-screen">
      <div className="max-w-2xl md:max-w-3xl mx-auto">
        {!isSuccess && (
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-neutral-400 mb-8 cursor-pointer"
          >
            <ArrowLeft size={18} />
            {t("customOrder.back")}
          </button>
        )}

        {!isSuccess ? (
          <>
            <h1 className="text-3xl md:text-4xl font-serif mb-6">
              {t("customOrder.pageTitle")}
            </h1>

            {selectedService && (
              <div className="mb-6 bg-neutral-800 border border-neutral-700 p-4 rounded">
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                  {t("customOrder.selectedService")}
                </p>
                <p className="text-amber-500">{selectedService}</p>
              </div>
            )}

            {referencePiece && (
              <div className="mb-6 bg-neutral-800 border border-neutral-700 p-4 rounded">
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                  {t("customOrder.inspiredBy")}
                </p>
                <p className="text-amber-500">{referencePiece}</p>
              </div>
            )}

            <p className="text-neutral-400 mb-12 md:mb-14">
              {t("customOrder.descriptionText")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  {t("customOrder.fullName")}
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 border border-neutral-700 px-4 py-3 md:py-4 focus:outline-none focus:border-amber-600 transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  {t("customOrder.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 border border-neutral-700 px-4 py-3 md:py-4 focus:outline-none focus:border-amber-600 transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  {t("customOrder.describeIdea")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 border border-neutral-700 px-4 py-3 md:py-4 focus:outline-none focus:border-amber-600 transition"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 md:py-5 tracking-widest text-sm transition-all duration-300 cursor-pointer rounded-md ${
                  isSubmitting
                    ? "bg-neutral-700 cursor-not-allowed animate-pulse"
                    : "bg-amber-700 hover:bg-amber-600 shadow-md hover:shadow-lg"
                }`}
              >
                {isSubmitting
                  ? t("customOrder.sending")
                  : t("customOrder.submit")}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-20 md:py-32 animate-fade-in max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif mb-4">
              {t("customOrder.successTitle")}
            </h2>
            <p className="text-neutral-400 mb-8">
              {t("customOrder.successText")}
            </p>

            <button
              onClick={() => navigate("/")}
              className="px-8 py-4 bg-amber-700 hover:bg-amber-600 transition text-sm tracking-widest cursor-pointer"
            >
              {t("customOrder.backHome")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
