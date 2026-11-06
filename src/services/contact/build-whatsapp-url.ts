import { siteConfig } from "../../config/site.ts";

export type ContactRequest = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export function buildWhatsAppContactUrl(request: ContactRequest): string {
  const normalizedRequest = Object.fromEntries(
    Object.entries(request).map(([key, value]) => [key, value.trim()])
  ) as ContactRequest;

  const text = [
    "Olá! Vim pelo site da Odontto e gostaria de solicitar um contato.",
    "",
    `Nome: ${normalizedRequest.name}`,
    `WhatsApp: ${normalizedRequest.phone}`,
    ...(normalizedRequest.email ? [`E-mail: ${normalizedRequest.email}`] : []),
    `Assunto: ${normalizedRequest.subject}`,
    `Mensagem: ${normalizedRequest.message}`,
  ].join("\n");

  return `${siteConfig.whatsapp.href}?text=${encodeURIComponent(text)}`;
}
