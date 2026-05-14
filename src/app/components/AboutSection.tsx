"use client";

import { useLang } from "@/app/context/LanguageContext";
import { i18n } from "@/app/data/i18n";
import AvatarImage from "./AvatarImage";
import SectionLabel from "./SectionLabel";

export default function AboutSection() {
  const { lang } = useLang();
  const t = i18n[lang].about;

  return (
    <section id="about" className="about-section">
      <SectionLabel>{t.label}</SectionLabel>
      <div className="about-grid">
        <div className="about-content">
          <h2 className="about-title">{t.title}</h2>

          <p className="about-text">{t.p1}</p>

          <p className="about-text">
            {t.p2_pre}
            <strong className="about-highlight">Autoplanify</strong>
            {t.p2_mid}
            <strong className="about-highlight">AutoGym</strong>
            {t.p2_post}
          </p>

          <p className="about-text">
            {t.p3_pre}
            <strong>{t.p3_highlight}</strong>
            {t.p3_post}
          </p>
        </div>

        <div className="about-avatar">
          <AvatarImage />
        </div>
      </div>
    </section>
  );
}
