import { useTranslation } from "react-i18next";

export default function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const currentLang = i18n.language;

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-900/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wide">Logo</h1>

        <div className="flex gap-4 text-xs tracking-widest uppercase">
          <button
            onClick={() => changeLanguage("en")}
            className={`transition cursor-pointer ${
              currentLang === "en"
                ? "text-amber-500"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => changeLanguage("es")}
            className={`transition cursor-pointer ${
              currentLang === "es"
                ? "text-amber-500"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
}
