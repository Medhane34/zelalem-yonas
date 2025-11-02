// components/forms/ServiceCTAForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSubmission } from "@/lib/forms/useFormSubmission";
import { Checkbox } from "@heroui/checkbox";
import { Input, Textarea } from "@heroui/input";
import { Select } from "@heroui/select";
import { SolidButton } from "@/components/atoms/Button";
import type { FormField } from "@/types/services";
import { contactSchema, serviceInquirySchema } from "@/lib/forms/schemas";
import type { ContactFormData, ServiceInquiryFormData } from "@/lib/forms/schemas";

interface ServiceCTAFormProps {
  serviceSlug: string;
  gaId: string;
  formFields: FormField[];
}

export const ServiceCTAForm = ({ serviceSlug, gaId, formFields }: ServiceCTAFormProps) => {
  const { submit, loading, error } = useFormSubmission();

  const schema = serviceSlug ? serviceInquirySchema : contactSchema;
  type FormData = typeof schema extends z.ZodObject<infer Z> ? z.infer<Z> : never;

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    submit({ ...data, serviceSlug, gaId } as any);
  };

  // Map string[] to Select items
  const mapOptions = (options: string[] | undefined) => 
    options?.map((opt) => ({ value: opt.toLowerCase(), label: opt })) || [];

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-ga-id={gaId} className="space-y-4">
      {formFields.map((field, index) => (
        <div key={index}>
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1">
            {field.label} {field.required ? "*" : ""}
          </label>
          {field.type === "text" || field.type === "email" || field.type === "tel" ? (
            <Input
              {...register(field.name as keyof FormData)}
              type={field.type}
              isInvalid={!!errors[field.name as keyof FormData]}
              errorMessage={(errors[field.name as keyof FormData] as any)?.message}
            />
          ) : field.type === "textarea" ? (
            <Textarea
              {...register(field.name as keyof FormData)}
              isInvalid={!!errors[field.name as keyof FormData]}
              errorMessage={(errors[field.name as keyof FormData] as any)?.message}
              rows={4}
            />
          ) : field.type === "select" ? (
            <Select
              {...register(field.name as keyof FormData)}
              items={mapOptions(field.options)}
              isInvalid={!!errors[field.name as keyof FormData]}
              errorMessage={(errors[field.name as keyof FormData] as any)?.message}
            />
          ) : field.type === "checkbox" ? (
            <div className="flex items-start space-x-2">
              <Checkbox
                {...register(field.name as keyof FormData)}
              />
              <span className="text-sm text-text-light dark:text-text-dark">
                {field.label}
              </span>
            </div>
          ) : null}
          {(errors[field.name as keyof FormData] as any)?.message && (
            <p className="text-red-500 text-xs mt-1">
              {(errors[field.name as keyof FormData] as any)?.message}
            </p>
          )}
        </div>
      ))}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <SolidButton type="submit" isLoading={loading} color="brand" className="w-full">
        {loading ? "Sending..." : "Schedule Consultation"}
      </SolidButton>
    </form>
  );
};