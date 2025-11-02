// components/forms/BaseForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { contactSchema, type ContactData } from "@/lib/forms/schemas";
import { Input, Textarea } from "@heroui/react";
import { SolidButton } from "@/components/atoms/Button";

interface BaseFormProps {
  onSuccess?: () => void;
  serviceSlug?: string;
  gaId: string; // e.g., "form-cta-criminal-tax"
}

export const BaseForm = ({ onSuccess, serviceSlug, gaId }: BaseFormProps) => {
  const { submit, loading, error } = useFormSubmission();
  const { register, handleSubmit, formState: { errors } } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactData) => {
    submit({ ...data, serviceSlug, gaId });
    if (!error) onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-ga-id={gaId} className="space-y-4">
      <div>
        <Input
          {...register("name")}
          placeholder="Full Name"
          isInvalid={!!errors.name}
          errorMessage={errors.name?.message}
        />
      </div>
      <div>
        <Input
          {...register("email")}
          type="email"
          placeholder="Email Address"
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
        />
      </div>
      <div>
        <Input
          {...register("phone")}
          type="tel"
          placeholder="Phone Number"
          isInvalid={!!errors.phone}
          errorMessage={errors.phone?.message}
        />
      </div>
      <div>
        <Textarea
          {...register("message")}
          placeholder="Tell us about your situation..."
          isInvalid={!!errors.message}
          errorMessage={errors.message?.message}
          rows={4}
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <SolidButton type="submit" loading={loading} color="brand" className="w-full">
        {loading ? "Sending..." : "Send Message"}
      </SolidButton>
    </form>
  );
};