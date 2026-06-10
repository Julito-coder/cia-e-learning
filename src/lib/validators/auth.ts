import { z } from 'zod';
import i18n from '@/i18n';

// Lazy translator so the active language is read at parse time
const tr = (key: string) => i18n.t(key);

export const emailSchema = z
  .string()
  .trim()
  .min(1, { message: '' })
  .email({ message: '' })
  .max(255, { message: '' })
  // Re-map messages lazily so they always reflect the current language
  .superRefine((val, ctx) => {
    if (!val) ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr('auth.validation.emailRequired') });
    else if (val.length > 255) ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr('auth.validation.emailTooLong') });
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr('auth.validation.emailInvalid') });
  });

export const passwordSchema = z
  .string()
  .superRefine((val, ctx) => {
    if (val.length < 6) ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr('auth.validation.passwordMin') });
    if (val.length > 72) ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr('auth.validation.passwordMax') });
  });

export const nameSchema = z
  .string()
  .trim()
  .superRefine((val, ctx) => {
    if (val.length > 50) ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr('auth.validation.nameMax') });
  })
  .optional()
  .or(z.literal(''));

export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().superRefine((val, ctx) => {
    if (val.length < 1) ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr('auth.validation.passwordRequired') });
  }),
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
  .superRefine((d, ctx) => {
    if (d.password !== d.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirmPassword'],
        message: tr('auth.validation.passwordsDontMatch'),
      });
    }
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

export function getPasswordStrengthLabels(): readonly string[] {
  return [
    tr('auth.passwordStrength.tooShort'),
    tr('auth.passwordStrength.weak'),
    tr('auth.passwordStrength.ok'),
    tr('auth.passwordStrength.good'),
    tr('auth.passwordStrength.strong'),
  ];
}

// Backwards-compatible export (snapshot at module load — prefer the function for live updates)
export const passwordStrengthLabels = getPasswordStrengthLabels();