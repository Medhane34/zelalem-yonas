// components/forms/ContactForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { Input, Textarea, Checkbox, Select } from "@heroui/react"; // ← FIXED: Unified import
import { SolidButton } from "@/components/atoms/Button";
import { contactSchema, type ContactFormData } from "@/lib/forms/schemas";

interface ContactFormProps {
  serviceSlug?: string;
  formId: string;
}

export const ContactForm = ({ serviceSlug, formId }: ContactFormProps) => {
  const { submit, loading, error } = useFormSubmission();

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    submit({ ...data, serviceSlug, formId });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-form-id={formId} className="space-y-4">
      <Input
        {...register("name")}
        placeholder="Full Name *"
        isInvalid={!!errors.name}
        errorMessage={errors.name?.message}
      />
      <Input
        {...register("email")}
        type="email"
        placeholder="Email Address *"
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
      />
      <Input
        {...register("phone")}
        type="tel"
        placeholder="Phone Number *"
        isInvalid={!!errors.phone}
        errorMessage={errors.phone?.message}
      />
      <Textarea
        {...register("message")}
        placeholder="Tell us about your situation *"
        isInvalid={!!errors.message}
        errorMessage={errors.message?.message}
        rows={4}
      />
      {serviceSlug && (
        <input type="hidden" {...register("serviceSlug")} value={serviceSlug} />
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <SolidButton type="submit" isLoading={loading} color="brand" className="w-full">
        {loading ? "Sending..." : "Schedule Consultation"}
      </SolidButton>
    </form>
  );
};