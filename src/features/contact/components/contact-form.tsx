"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";

import { contactSubjects } from "@/features/contact/contact-content";
import { buildWhatsAppContactUrl } from "@/services/contact/build-whatsapp-url";
import {
  contactFieldLimits,
  formatBrPhone,
  validateContactForm,
  type ContactFormData,
} from "@/services/contact/contact-schema";

const emptyForm: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
  consentLgpd: false,
  honeypot: "",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [whatsappPreparedUrl, setWhatsappPreparedUrl] = useState<string | null>(null);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = event.target;
    const checked = (event.target as HTMLInputElement).checked;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : name === "phone" ? formatBrPhone(value) : value,
    }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name as keyof ContactFormData];
        return next;
      });
    }

    setWhatsappPreparedUrl(null);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      requestAnimationFrame(() => {
        formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
      return;
    }

    const subjectLabel =
      contactSubjects.find((item) => item.value === formData.subject)?.label ?? formData.subject;

    setErrors({});
    setWhatsappPreparedUrl(
      buildWhatsAppContactUrl({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        subject: subjectLabel,
        message: formData.message.trim(),
      })
    );
  }

  return (
    <div id="formulario" className="card-base scroll-mt-28 p-6 shadow-soft sm:p-8">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-aqua-light text-aqua-strong">
          <MessageCircle size={16} aria-hidden="true" />
        </span>
        <h2 className="text-2xl font-bold text-navy">Inicie uma conversa</h2>
      </div>
      <p className="mt-2 text-sm leading-6 text-secondary">
        Preencha os dados para preparar a mensagem. Nada será enviado até você confirmar a abertura
        do WhatsApp.
      </p>

      <form ref={formRef} className="mt-6 grid gap-5" onSubmit={handleSubmit} noValidate>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-company-site">Não preencha este campo</label>
          <input
            type="text"
            id="contact-company-site"
            name="honeypot"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-bold text-navy">
            Nome completo{" "}
            <span aria-hidden="true" className="text-red-600">
              *
            </span>
          </label>
          <input
            className={`form-control ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
            type="text"
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            maxLength={contactFieldLimits.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder="Dr(a). Seu nome"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p
              id="contact-name-error"
              role="alert"
              className="mt-0.5 text-xs font-semibold text-red-700"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-1.5">
            <label htmlFor="contact-phone" className="text-sm font-bold text-navy">
              WhatsApp{" "}
              <span aria-hidden="true" className="text-red-600">
                *
              </span>
            </label>
            <input
              className={`form-control ${errors.phone ? "border-red-500 focus:border-red-500" : ""}`}
              type="tel"
              id="contact-phone"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              required
              maxLength={contactFieldLimits.phone}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "contact-phone-error" : undefined}
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p
                id="contact-phone-error"
                role="alert"
                className="mt-0.5 text-xs font-semibold text-red-700"
              >
                {errors.phone}
              </p>
            )}
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="contact-email" className="text-sm font-bold text-navy">
              E-mail profissional (opcional)
            </label>
            <input
              className={`form-control ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
              type="email"
              id="contact-email"
              name="email"
              autoComplete="email"
              inputMode="email"
              maxLength={contactFieldLimits.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              placeholder="contato@suaclinica.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p
                id="contact-email-error"
                role="alert"
                className="mt-0.5 text-xs font-semibold text-red-700"
              >
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="contact-subject" className="text-sm font-bold text-navy">
            Como podemos ajudar?{" "}
            <span aria-hidden="true" className="text-red-600">
              *
            </span>
          </label>
          <select
            className={`form-control ${errors.subject ? "border-red-500 focus:border-red-500" : ""}`}
            id="contact-subject"
            name="subject"
            required
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {contactSubjects.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p
              id="contact-subject-error"
              role="alert"
              className="mt-0.5 text-xs font-semibold text-red-700"
            >
              {errors.subject}
            </p>
          )}
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="contact-message" className="text-sm font-bold text-navy">
            Sua mensagem{" "}
            <span aria-hidden="true" className="text-red-600">
              *
            </span>
          </label>
          <textarea
            className={`form-control min-h-28 resize-y ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
            id="contact-message"
            name="message"
            rows={4}
            required
            maxLength={contactFieldLimits.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : "contact-message-help"}
            placeholder="Descreva seu momento atual (ex.: abertura de consultório, redução de impostos ou transição de contador)."
            value={formData.message}
            onChange={handleChange}
          />
          <p id="contact-message-help" className="text-right text-xs text-secondary">
            {formData.message.length}/{contactFieldLimits.message}
          </p>
          {errors.message && (
            <p
              id="contact-message-error"
              role="alert"
              className="text-xs font-semibold text-red-700"
            >
              {errors.message}
            </p>
          )}
        </div>

        <div className="rounded-xl border border-border/80 bg-offwhite p-3.5">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="consentLgpd"
              required
              checked={formData.consentLgpd}
              onChange={handleChange}
              aria-invalid={Boolean(errors.consentLgpd)}
              aria-describedby={
                errors.consentLgpd ? "contact-consent-error" : "contact-consent-help"
              }
              className="mt-1 h-4 w-4 rounded border-border text-aqua-strong focus:ring-aqua-strong"
            />
            <span id="contact-consent-help" className="text-xs leading-5 text-secondary">
              Concordo em compartilhar os dados preenchidos ao abrir uma conversa com a Odontto pelo
              WhatsApp, serviço operado pela Meta.
            </span>
          </label>
          {errors.consentLgpd && (
            <p
              id="contact-consent-error"
              role="alert"
              className="mt-1 pl-7 text-xs font-semibold text-red-700"
            >
              {errors.consentLgpd}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="button button-primary w-full rounded-xl text-base shadow-sm hover:shadow-md"
        >
          <MessageCircle size={18} aria-hidden="true" />
          <span>
            {whatsappPreparedUrl ? "Atualizar mensagem" : "Preparar conversa no WhatsApp"}
          </span>
        </button>

        <p className="flex items-start justify-center gap-1.5 text-center text-xs leading-5 text-secondary">
          <ShieldCheck size={14} className="mt-0.5 shrink-0 text-aqua-strong" aria-hidden="true" />
          <span>
            O formulário apenas monta a mensagem no seu navegador; o envio depende da sua
            confirmação no WhatsApp.
          </span>
        </p>
      </form>

      {whatsappPreparedUrl && (
        <div
          role="status"
          aria-live="polite"
          className="mt-5 rounded-2xl border border-aqua/40 bg-aqua-light p-5 text-sm text-navy"
        >
          <div className="flex items-center gap-2 font-bold text-navy">
            <CheckCircle2 size={18} className="text-aqua-strong" aria-hidden="true" />
            <span>Mensagem pronta para revisão</span>
          </div>
          <p className="mt-1.5 text-xs leading-5 text-secondary">
            O próximo botão abre o WhatsApp. Revise a mensagem antes de enviá-la.
          </p>
          <a
            href={whatsappPreparedUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-primary mt-4 w-full rounded-xl"
          >
            <span>Continuar para o WhatsApp</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  );
}
