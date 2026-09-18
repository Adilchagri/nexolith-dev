"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Mail, Copy, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function ProjectConfigurator() {
  const { language, isRTL } = useLanguage();
  const t = translations[language].configurator;

  const [projectType, setProjectType] = useState<string>("SITE WEB");
  const [serviceNeed, setServiceNeed] = useState<string>("SOLUTION COMPLÈTE");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");
  const [formattedSummary, setFormattedSummary] = useState("");

  const targetMail = "nexolithdev@gmail.com";

  const projectTypes =
    language === "fr"
      ? ["SITE WEB", "E-COMMERCE", "APPLICATION MOBILE", "SOLUTION IA", "OUTIL INTERNE", "AUTRE"]
      : ["WEBSITE", "E-COMMERCE", "MOBILE APP", "AI SOLUTION", "INTERNAL TOOL", "OTHER"];

  const serviceNeeds =
    language === "fr"
      ? ["DESIGN", "DÉVELOPPEMENT", "DESIGN + DÉVELOPPEMENT", "SOLUTION COMPLÈTE"]
      : ["DESIGN", "DEVELOPMENT", "DESIGN + DEVELOPMENT", "END-TO-END PRODUCT"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setStatus("error");
      setErrorMessage(
        language === "fr"
          ? "Veuillez renseigner votre nom et votre email."
          : "Please provide your name and email."
      );
      return;
    }

    if (!email.includes("@")) {
      setStatus("error");
      setErrorMessage(
        language === "fr"
          ? "Veuillez renseigner un email valide."
          : "Please provide a valid email address."
      );
      return;
    }

    setStatus("submitting");

    const isEn = language === "en";
    const subjectText = isEn
      ? `[NEXOLITH DEV] Project: ${projectType} - ${name}`
      : `[NEXOLITH DEV] Projet: ${projectType} - ${name}`;

    const bodyText = isEn
      ? `Hello Adil & Amine,

New project inquiry configured from NEXOLITH DEV portfolio:

• Client Name: ${name}
• Contact Email: ${email}
• Project Category: ${projectType}
• Selected Services: ${serviceNeed}

Project Description & Vision:
${description || "(No description provided)"}

---
Sent from nexolith.dev portfolio`
      : `Bonjour Adil & Amine,

Nouveau projet configuré depuis le portfolio NEXOLITH DEV :

• Nom : ${name}
• Email de contact : ${email}
• Type de projet : ${projectType}
• Services requis : ${serviceNeed}

Description & Objectifs :
${description || "(Non renseigné)"}

---
Envoyé depuis le portfolio nexolith.dev`;

    const encodedSubject = encodeURIComponent(subjectText);
    const encodedBody = encodeURIComponent(bodyText);
    const generatedMailto = `mailto:${targetMail}?subject=${encodedSubject}&body=${encodedBody}`;

    setMailtoUrl(generatedMailto);
    setFormattedSummary(bodyText);

    // 1. Direct Background AJAX Delivery to nexolithdev@gmail.com
    fetch("https://formsubmit.co/ajax/nexolithdev@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: subjectText,
        projectType: projectType,
        serviceNeed: serviceNeed,
        message: description || "Projet configuré depuis le configurateur en ligne.",
      }),
    }).catch((err) => {
      console.warn("Background dispatch notice:", err);
    });

    // 2. Open mail client as immediate local action
    try {
      window.location.href = generatedMailto;
    } catch {
      // Handled gracefully in UI
    }

    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  const handleCopySummary = () => {
    if (!formattedSummary) return;
    navigator.clipboard.writeText(formattedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setStatus("idle");
    setDescription("");
    setName("");
    setEmail("");
    setCopied(false);
  };

  return (
    <section id="configurateur" className="relative py-28 bg-[#040A12] border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#5CFFD0] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5CFFD0]" />
            {t.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white uppercase whitespace-pre-line">
            {t.title}
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#8C98A8] font-sans">
            {t.desc}
          </p>
        </div>

        {/* Interactive Form Card */}
        <div className="rounded-3xl p-8 sm:p-12 bg-[#06111C]/95 border border-white/10 shadow-2xl relative overflow-hidden">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-6 max-w-lg mx-auto"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#2ECC71]/20 border border-[#2ECC71]/40 flex items-center justify-center text-[#5CFFD0]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {t.success_title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8C98A8] leading-relaxed">
                  {t.success_desc}
                </p>
              </div>

              {/* Action Buttons to ensure delivery */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={mailtoUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-nexolith-white hover:bg-white text-nexolith-dark font-display font-bold text-xs tracking-wider uppercase transition-all shadow-xl hover:scale-105"
                >
                  <Mail className="w-4 h-4 text-nexolith-blue" />
                  <span>{t.open_mail}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-white border border-white/10 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#2ECC71]" />
                      <span className="text-[#5CFFD0]">{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#8C98A8]" />
                      <span>{t.copy_summary}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-mono text-[#8C98A8] hover:text-white transition-colors"
                >
                  ← {language === "fr" ? "Nouvelle configuration" : "New inquiry"}
                </button>

                <a
                  href={`mailto:${targetMail}`}
                  className="text-xs font-mono text-[#5CFFD0] hover:underline"
                >
                  {targetMail}
                </a>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/20 text-white font-bold">
                    01
                  </span>
                  <label className="text-xs sm:text-sm font-mono tracking-widest text-white uppercase font-semibold">
                    {t.step1}
                  </label>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`py-3 px-3 rounded-xl text-xs font-mono font-medium transition-all text-center border ${
                        projectType === type
                          ? "bg-[#1769FF]/20 text-[#5CFFD0] border-[#1769FF]/60 shadow-lg"
                          : "bg-white/[0.02] text-[#8C98A8] hover:text-white border-white/5 hover:border-white/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/20 text-white font-bold">
                    02
                  </span>
                  <label className="text-xs sm:text-sm font-mono tracking-widest text-white uppercase font-semibold">
                    {t.step2}
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {serviceNeeds.map((need) => (
                    <button
                      key={need}
                      type="button"
                      onClick={() => setServiceNeed(need)}
                      className={`py-3 px-4 rounded-xl text-xs font-mono font-medium transition-all text-center border ${
                        serviceNeed === need
                          ? "bg-[#2ECC71]/20 text-[#5CFFD0] border-[#2ECC71]/50 shadow-lg"
                          : "bg-white/[0.02] text-[#8C98A8] hover:text-white border-white/5 hover:border-white/10"
                      }`}
                    >
                      [ {need} ]
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/20 text-white font-bold">
                    03
                  </span>
                  <label className="text-xs sm:text-sm font-mono tracking-widest text-white uppercase font-semibold">
                    {t.step3}
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[#8C98A8] mb-1 uppercase">
                      {t.name_lbl}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === "fr" ? "Alexandre Dupont" : language === "en" ? "Alex Morgan" : "عادل الشاغري"}
                      className="w-full px-4 py-3 rounded-xl bg-[#030810] border border-white/10 focus:border-[#1769FF] text-sm text-white placeholder:text-[#8C98A8]/40 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-[#8C98A8] mb-1 uppercase">
                      {t.email_lbl}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contact@entreprise.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#030810] border border-white/10 focus:border-[#1769FF] text-sm text-white placeholder:text-[#8C98A8]/40 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#8C98A8] mb-1 uppercase">
                    {t.desc_lbl}
                  </label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={
                      language === "fr"
                        ? "Présentez brièvement vos ambitions ou calendrier..."
                        : language === "en"
                        ? "Briefly explain your vision, timeline, and requirements..."
                        : "اكتب نبذة مختصرة عن فكرة مشروعك والأهداف المرجوة..."
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#030810] border border-white/10 focus:border-[#1769FF] text-sm text-white placeholder:text-[#8C98A8]/40 outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {status === "error" && (
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center gap-2 text-xs text-red-200">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#1769FF] to-[#2ECC71] hover:opacity-95 text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(23,105,255,0.3)] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <span>...</span>
                ) : (
                  <>
                    <span>{t.submit}</span>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
