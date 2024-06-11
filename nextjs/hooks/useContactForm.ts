import { i18n } from "@/i18n/helpers";
import { useForm } from "@mantine/form";

type ValidateData = {
  [fieldName: string]: (value: any) => string | null;
};

export type ContactFormInitialData = {
  name: string;
  email: string;
  message: string;
  error?: any;
};

export const useContactForm = (lang: string) => {
  const initialData: ContactFormInitialData = {
    name: "",
    email: "",
    message: "",
    error: null,
  };

  const validateData: ValidateData = {
    email: (value) => (/^\S+@\S+$/.test(value) ? null : i18n(lang).footer.contactForm.form.error),
    // name: (value) => (value.length === 0 ? i18n(lang).contactForm.message.error : null),
    // message: (value) => (value.length === 0 ? i18n(lang).contactForm.message.error : null),
  };

  return useForm({
    initialValues: initialData,
    validate: validateData,
  });
};
