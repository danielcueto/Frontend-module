import type { UseFormRegister, FieldErrors } from 'react-hook-form';

export interface FormData {
  // Personal Info
  name: string;
  age: number;
  email: string;
  // Address Info
  country: string;
  city: string;
  zipCode: string;
  // Preferences
  contactMethod: 'email' | 'phone' | 'whatsapp';
  newsletter: boolean;
}

export interface StepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export interface ReviewStepProps {
  formData: FormData;
}
