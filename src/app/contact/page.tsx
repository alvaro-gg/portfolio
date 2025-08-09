"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/" className="inline-flex items-center gap-2 text-strong">
        <ArrowLeft className="w-5 h-5" /> Volver
      </Link>

      <h1 className="mt-4 text-3xl font-bold mb-6 text-strong">Contacto</h1>

      <p className="mb-6 text-black/80">
        ¿Te interesa trabajar conmigo? <strong>¡No dudes en contactarme!</strong>
      </p>

      <ul className="flex flex-col gap-4">
        <li>
          <a
            href="https://www.linkedin.com/in/alvaro-gg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <FaLinkedin className="text-2xl" aria-hidden="true" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/alvaro-gg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <FaGithub className="text-2xl" aria-hidden="true" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </li>

        <li>
          <a
            href="mailto:alvarogg.dev@gmail.com"
            className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <FaEnvelope className="text-2xl" aria-hidden="true" />
            <span className="text-sm font-medium">Correo</span>
          </a>
        </li>

        <li>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <FaFileAlt className="text-2xl" aria-hidden="true" />
            <span className="text-sm font-medium">Ver CV</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
