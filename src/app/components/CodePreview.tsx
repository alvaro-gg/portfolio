"use client";

import { useLang } from "@/app/context/LanguageContext";
import { i18n } from "@/app/data/i18n";

export default function CodePreview() {
  const { lang } = useLang();
  const t = i18n[lang].codePreview;

  return (
    <div className="code-preview-wrapper animate-fade-up delay-3">
      <div className="code-preview-glow" />
      <div className="code-preview-border">
        <div className="code-preview-card">
          <div className="code-preview-header">
            <span className="code-preview-dot code-preview-dot-red" />
            <span className="code-preview-dot code-preview-dot-yellow" />
            <span className="code-preview-dot code-preview-dot-green" />
            <span className="code-preview-file">portfolio.tsx</span>
          </div>
          <div className="code-preview-body">
            <p>
              <span className="code-keyword">const</span>
              {" developer = {"}
            </p>
            <p className="code-indent">
              {"name: "}
              <span className="code-string">{'"Álvaro García"'}</span>
              {","}
            </p>
            <p className="code-indent">
              {"role: "}
              <span className="code-string">{'"Full-Stack Developer"'}</span>
              {","}
            </p>
            <p className="code-indent">
              {"stack: ["}
              <span className="code-array">{'"React"'}</span>
              {", "}
              <span className="code-array">{'"Node"'}</span>
              {", "}
              <span className="code-array">{'"PostgreSQL"'}</span>
              {"],"}
            </p>
            <p className="code-indent">
              {"focus: "}
              <span className="code-string">{t.focus}</span>
              {","}
            </p>
            <p>{"}"}</p>
            <div className="code-preview-features">
              {t.features.map((item) => (
                <div key={item} className="code-preview-feature">
                  <span>✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
