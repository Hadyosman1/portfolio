import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email address"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
