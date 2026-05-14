"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";

type Lang = "es" | "en";

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  toggleLang: () => {},
});

export function LanguageProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("es");

  const toggleLang = () => {
    setLang((l) => (l === "es" ? "en" : "es"));
  };

  const value = useMemo(
    () => ({
      lang,
      toggleLang,
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
