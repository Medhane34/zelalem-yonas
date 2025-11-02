// lib/forms/types.ts
export interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceSlug?: string; // Optional for service forms
  formId: string; // For GA, e.g., "cta-criminal-tax"
}