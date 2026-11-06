import { test, describe } from "node:test";
import assert from "node:assert/strict";

import { buildWhatsAppContactUrl } from "../src/services/contact/build-whatsapp-url.ts";
import { siteConfig } from "../src/config/site.ts";

describe("WhatsApp URL Builder Service", () => {
  test("generates properly formatted wa.me link with encoded parameters", () => {
    const url = buildWhatsAppContactUrl({
      name: "Dr. Marcelo",
      phone: "(21) 98765-4321",
      email: "marcelo@clinica.com",
      subject: "BPO Financeiro",
      message: "Gostaria de terceirizar o financeiro do consultório.",
    });

    assert.ok(url.startsWith(siteConfig.whatsapp.href));
    assert.ok(url.includes("text="));
    assert.ok(url.includes(encodeURIComponent("Dr. Marcelo")));
    assert.ok(url.includes(encodeURIComponent("BPO Financeiro")));
  });

  test("omits the optional email when it is blank", () => {
    const url = buildWhatsAppContactUrl({
      name: "Dra. Ana",
      phone: "(21) 98765-4321",
      email: "",
      subject: "Abertura de clínica",
      message: "Quero entender os próximos passos.",
    });

    assert.ok(!decodeURIComponent(url).includes("E-mail:"));
  });
});
