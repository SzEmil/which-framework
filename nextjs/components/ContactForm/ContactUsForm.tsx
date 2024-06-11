"use client";

import { i18n } from "@/i18n/helpers";
import { Button, Stack, Text, TextInput, Textarea } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { LangType } from "@/types/types";

import { ContactFormInitialData, useContactForm } from "@/hooks/useContactForm";

type ContactUsFormProps = {
  lang: LangType;
};
export const ContactUsForm = ({ lang }: ContactUsFormProps) => {
  const form = useContactForm(lang);

  const handleOnEmailSend = async (values: ContactFormInitialData) => {
    try {
      //   await sendEmail(lang, {
      //     subject: values.topic,
      //     html: EmailTemplate.onCustomer(values.email, values.message),
      //   });
      // //  notify.onCustomerEmailSend(lang);
      console.log(values);
    } catch (e) {
      console.error("Error sending email:", e);
      // notify.onEmailSendError(lang);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.onSubmit(handleOnEmailSend)} style={{ width: "100%" }}>
      <Stack w={"100%"} gap={40}>
        <TextInput
          radius={"lg"}
          w={"100%"}
          withAsterisk
          placeholder={i18n(lang).footer.contactForm.form.placeholder}
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <TextInput
          radius={"lg"}
          withAsterisk
          placeholder={i18n(lang).footer.contactForm.form.placeholder}
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <Textarea
          radius={"lg"}
          withAsterisk
          placeholder={i18n(lang).footer.contactForm.form.placeholder}
          key={form.key("message")}
          {...form.getInputProps("message")}
        />
        <Button
          mt={20}
          w={"100%"}
          bg={"themePrimary.6"}
          autoContrast
          type="submit"
          rightSection={<IconArrowRight size={14} />}
        >
          {i18n(lang).footer.contactForm.form.btn}
        </Button>
      </Stack>
    </form>
  );
};
