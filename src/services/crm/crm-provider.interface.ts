/**
 * Contrato de provedor de CRM corporativo.
 * Permite plugar diferentes provedores (HubSpot, RD Station, Salesforce, Webhook)
 * sem necessidade de refatorar componentes visuais ou formulários.
 */

export type CrmLeadPayload = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  source: string;
  consentGivenAt: string;
};

export type CrmSubmissionResponse = {
  success: boolean;
  leadId?: string;
  error?: string;
};

export interface ICrmProvider {
  /**
   * Envia o lead qualificado para a plataforma de CRM de destino.
   */
  submitLead(payload: CrmLeadPayload): Promise<CrmSubmissionResponse>;
}
