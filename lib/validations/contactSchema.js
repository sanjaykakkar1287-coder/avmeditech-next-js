import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number"),

  inquiryType: z
    .string()
    .trim()
    .min(1, "Please select an inquiry type"),

  message: z
    .string()
    .trim()
    .max(1000, "Message is too long")
    .optional()
    .or(z.literal("")),
});