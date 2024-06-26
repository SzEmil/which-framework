import { i18n } from "@/i18n/helpers";
import { useForm } from "@mantine/form";

type ValidateData = {
  [fieldName: string]: (value: any) => string | null;
};

export type ContactFormInitialData = {
  email: string;
  error?: any;
};

export const useNewsletterForm = (lang: string) => {
  const initialData: ContactFormInitialData = {
    email: "",
    error: null,
  };

  const validateData: ValidateData = {
    email: (value) =>
      /^\S+@\S+$/.test(value) ? null : i18n(lang).footer.newsLetterForm.form.error,
  };

  return useForm({
    initialValues: initialData,
    validate: validateData,
  });
};
