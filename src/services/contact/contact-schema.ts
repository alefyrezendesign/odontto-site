/**
 * Schema de validação e tipos para contato e captura de leads.
 * Executável tanto no cliente (feedback instantâneo) quanto no servidor (Route Handler).
 */

export type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  consentLgpd: boolean;
  honeypot?: string;
};

export type FormValidationResult = {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
};

export const contactFieldLimits = {
  name: 120,
  phone: 15,
  email: 254,
  subject: 80,
  message: 1500,
} as const;

/**
 * Validação rigorosa dos campos de contato com respeito à LGPD e higienização.
 */
export function validateContactForm(data: Partial<ContactFormData>): FormValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  // Nome
  const name = (data.name ?? "").trim();
  if (!name) {
    errors.name = "O nome é obrigatório.";
  } else if (name.length < 3) {
    errors.name = "Informe o nome completo (mínimo de 3 caracteres).";
  } else if (name.length > contactFieldLimits.name) {
    errors.name = `O nome deve ter no máximo ${contactFieldLimits.name} caracteres.`;
  }

  // Telefone / WhatsApp (mínimo 10 dígitos numéricos)
  const digits = (data.phone ?? "").replace(/\D/g, "");
  if (!digits) {
    errors.phone = "O WhatsApp de contato é obrigatório.";
  } else if (digits.length < 10 || digits.length > 11) {
    errors.phone = "Informe um número de WhatsApp válido com DDD (10 ou 11 dígitos).";
  }

  // E-mail
  const email = (data.email ?? "").trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    errors.email = "Informe um endereço de e-mail válido.";
  } else if (email.length > contactFieldLimits.email) {
    errors.email = `O e-mail deve ter no máximo ${contactFieldLimits.email} caracteres.`;
  }

  // Assunto
  const subject = (data.subject ?? "").trim();
  if (!subject) {
    errors.subject = "Selecione o assunto da consulta.";
  } else if (subject.length > contactFieldLimits.subject) {
    errors.subject = "O assunto informado é inválido.";
  }

  // Mensagem
  const message = (data.message ?? "").trim();
  if (!message) {
    errors.message = "A mensagem é obrigatória.";
  } else if (message.length < 6) {
    errors.message = "Por favor, descreva brevemente seu cenário ou necessidade.";
  } else if (message.length > contactFieldLimits.message) {
    errors.message = `A mensagem deve ter no máximo ${contactFieldLimits.message} caracteres.`;
  }

  // Consentimento LGPD
  if (!data.consentLgpd) {
    errors.consentLgpd = "Você precisa concordar com o envio pelo WhatsApp para prosseguir.";
  }

  // Honeypot anti-spam (deve estar estritamente vazio)
  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.honeypot = "Submissão rejeitada.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formata número de telefone brasileiro no padrão (XX) XXXXX-XXXX
 */
export function formatBrPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}
