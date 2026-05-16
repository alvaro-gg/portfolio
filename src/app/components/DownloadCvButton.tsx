"use client";

import { useRef } from "react";

import CvDocument from "./CvDocument";
import { useLang } from "../context/LanguageContext";
import { cvData } from "../data/cv";

export default function DownloadCvButton() {
  const { lang } = useLang();
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!pdfRef.current) {
      return;
    }

    const html2pdfModule = await import("html2pdf.js");
    const html2pdf = html2pdfModule.default;

    const options = {
      margin: 0,
      filename: cvData[lang].filename,
      image: {
        type: "jpeg" as const,
        quality: 1,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "px" as const,
        format: [794, 1123] as [number, number],
        orientation: "portrait" as const,
      },
    };

    await html2pdf().set(options).from(pdfRef.current).save();
  };

  return (
    <>
      <button
        type="button"
        onClick={handleDownload}
        className="hero-secondary-link cursor-pointer"
      >
        {lang === "es" ? "Descargar CV" : "Download CV"}
      </button>

      <div className="fixed left-[-99999px] top-0">
        <div ref={pdfRef}>
          <CvDocument lang={lang} />
        </div>
      </div>
    </>
  );
}
