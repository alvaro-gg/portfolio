"use client";

import { useLang } from "@/app/context/LanguageContext";
import { i18n } from "@/app/data/i18n";
import CodePreview from "./CodePreview";
import DownloadCvButton from "./DownloadCvButton";
import Tag from "./Tag";

export default function HeroSection() {
  const { lang } = useLang();
  const t = i18n[lang].hero;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-status animate-fade-up">
            <span className="hero-status-dot" />
            <span>{t.available}</span>
          </div>

          <h1 className="hero-title animate-fade-up delay-1">Álvaro García</h1>

          <h2 className="hero-subtitle animate-fade-up delay-2">
            Full-Stack Developer
          </h2>

          <p className="hero-description animate-fade-up delay-3">
            {t.description}
          </p>

          <div className="hero-tags animate-fade-up delay-4">
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Node.js</Tag>
            <Tag>PostgreSQL</Tag>
          </div>

          <div className="hero-actions animate-fade-up delay-4">
            <a href="#projects" className="hero-primary-link">
              {t.cta}
            </a>

            <DownloadCvButton />
          </div>
        </div>

        <CodePreview />
      </div>
    </section>
  );
}
