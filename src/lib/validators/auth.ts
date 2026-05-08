import { z } from 'zod';

export const emailSchema = z
  .string()
  .trim()
  .min(1, 'Email requis')
  .email('Email invalide')
  .max(255, 'Email trop long');

export const passwordSchema = z
  .string()
  .min(6, 'Au moins 6 caractères')
  .max(72, 'Mot de passe trop long');

export const nameSchema = z
  .string()
  .trim()
  .max(50, 'Maximum 50 caractères')
  .optional()
  .or(z.literal(''));

export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Mot de passe requis'),
});

export const signUpSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  firstName: nameSchema,
  lastName: nameSchema,
});

export const resetSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Les mots de passe ne correspondent pas',
  });

export function computePasswordScore(value: string): number {
  if (!value) return 0;
  let score = 0;
  if (value.length >= 6) score++;
  if (value.length >= 10) score++;
  if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score++;
  if (/\d/.test(value) && /[^A-Za-z0-9]/.test(value)) score++;
  return Math.min(score, 4);
}

export const passwordStrengthLabels = [
  'Trop court',
  'Faible',
  'Correct',
  'Bon',
  'Fort',
] as const;