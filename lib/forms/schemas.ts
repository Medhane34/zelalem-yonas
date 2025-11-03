import * as z from "zod";

// lib/forms/schemas.ts

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone too short"),
  message: z.string().min(10, "Message too short").max(1000),
  serviceSlug: z.string().optional(),
  pageType: z.string().min(1, "Page type required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;