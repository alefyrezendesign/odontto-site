import { test, describe } from "node:test";
import assert from "node:assert/strict";

import {
  contactFieldLimits,
  validateContactForm,
  formatBrPhone,
  type ContactFormData,
} from "../src/services/contact/contact-schema.ts";

describe("Contact Schema & Validation", () => {
  const validData: ContactFormData = {
    name: "Dra. Ana Silveira",
    phone: "21987654321",
    email: "ana.silveira@clinicaodontto.com.br",
    subject: "abertura",
    message: "Gostaria de abrir uma clínica odontológica e preciso de assessoria.",
    consentLgpd: true,
  };

  test("validates complete and correct form data successfully", () => {
    const result = validateContactForm(validData);
    assert.equal(result.isValid, true);
    assert.deepEqual(result.errors, {});
  });

  test("rejects submission if name is missing or too short", () => {
    const result = validateContactForm({ ...validData, name: "Dr" });
    assert.equal(result.isValid, false);
    assert.ok(result.errors.name);
  });

  test("rejects submission if phone has fewer than 10 digits", () => {
    const result = validateContactForm({ ...validData, phone: "1234567" });
    assert.equal(result.isValid, false);
    assert.ok(result.errors.phone);
  });

  test("rejects invalid email formats", () => {
    const result = validateContactForm({ ...validData, email: "invalid-email" });
    assert.equal(result.isValid, false);
    assert.ok(result.errors.email);
  });

  test("accepts a contact request without optional email", () => {
    const result = validateContactForm({ ...validData, email: "" });
    assert.equal(result.isValid, true);
  });

  test("rejects submission without LGPD consent", () => {
    const result = validateContactForm({ ...validData, consentLgpd: false });
    assert.equal(result.isValid, false);
    assert.ok(result.errors.consentLgpd);
  });

  test("rejects oversized messages before generating an external URL", () => {
    const result = validateContactForm({
      ...validData,
      message: "a".repeat(contactFieldLimits.message + 1),
    });
    assert.equal(result.isValid, false);
    assert.ok(result.errors.message);
  });

  test("flags honeypot filled by malicious spam bots", () => {
    const result = validateContactForm({
      ...validData,
      honeypot: "https://spam-bot.site",
    });
    assert.equal(result.isValid, false);
    assert.ok(result.errors.honeypot);
  });
});

describe("Phone Auto-Masking (formatBrPhone)", () => {
  test("formats 11-digit mobile phone correctly", () => {
    const formatted = formatBrPhone("21987654321");
    assert.equal(formatted, "(21) 98765-4321");
  });

  test("formats 10-digit landline phone correctly", () => {
    const formatted = formatBrPhone("2126354903");
    assert.equal(formatted, "(21) 2635-4903");
  });

  test("ignores non-numeric characters", () => {
    const formatted = formatBrPhone("abc21def98765gh4321");
    assert.equal(formatted, "(21) 98765-4321");
  });
});
