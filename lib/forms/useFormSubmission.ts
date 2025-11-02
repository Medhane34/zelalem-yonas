// lib/forms/useFormSubmission.ts
"use client";

import { useState } from "react";import {addToast, ToastProvider} from "@heroui/toast";
import type { ContactData } from "./types";

export const useFormSubmission = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: ContactData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");
addToast({
            title: "Message sent!",
            description: "We'll reply within 24 hours.",
          });    } catch (err) {
      const message = err instanceof Error ? err.message : "Submission failed—try again.";
addToast({
            title: "Error",
            description: "Toast Description",
          });      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
};
/* export const useFormSubmission = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: ContactData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");
      addToast({
            title: "Message sent!",
            description: "We'll reply within 24 hours.",
          });
      
    } catch (err) {
      const message = err instanceof Error ? err.message : "Submission failed—try again.";
      addToast({
            title: "Error",
            description: "Toast Description",
          });
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
}; */