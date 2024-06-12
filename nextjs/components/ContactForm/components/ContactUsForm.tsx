"use client";

import { i18n } from "@/i18n/helpers";
import { Box, Button, FileInput, Stack, Text, TextInput, Textarea } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { LangType } from "@/types/types";
import { Buffer } from "buffer";
import { ContactFormInitialData, useContactForm } from "@/hooks/useContactForm";
import sendEmail from "@/services/Email/operations/sendEmail";
import { EmailTemplate } from "@/services/Email/templates";
import css from "./ContactUsForm.module.css";

type ContactUsFormProps = {
  lang: LangType;
};
export const ContactUsForm = ({ lang }: ContactUsFormProps) => {
  const form = useContactForm(lang);

  const handleOnEmailSend = async (values: ContactFormInitialData) => {
    try {
      const files = await Promise.all(
        values.file.map(async (file) => {
          const arrayBuffer = await file.arrayBuffer();
          return {
            filename: file.name,
            content: Buffer.from(arrayBuffer),
          };
        }),
      );

      await Promise.all([
        sendEmail({
          lang,
          subject: "New conversation with customer",
          html: EmailTemplate.fromCustomer(values.name, values.email, values.message),
          attachments: files,
        }),
        sendEmail({
          lang,
          subject: "Thank you for contact with Minfdev",
          to: values.email,
          html: EmailTemplate.feedbackMessage(values.name),
        }),
      ]);

      // notify.onCustomerEmailSend(lang);
    } catch (e) {
      console.error("Error sending email:", e);
      // notify.onEmailSendError(lang);
    }
    form.reset();
  };

  return (
    <form onSubmit={form.onSubmit(handleOnEmailSend)} style={{ width: "100%", maxWidth: "385px" }}>
      <Stack w={"100%"} gap={40}>
        <TextInput
          radius={"md"}
          w={"100%"}
          withAsterisk
          placeholder={i18n(lang).contactForm.form.name.placeholder}
          key={form.key("name")}
          {...form.getInputProps("name")}
          classNames={{ input: css.input }}
        />
        <TextInput
          radius={"md"}
          withAsterisk
          placeholder={i18n(lang).contactForm.form.email.placeholder}
          key={form.key("email")}
          {...form.getInputProps("email")}
          classNames={{ input: css.input }}
        />
        <Textarea
          radius={"md"}
          withAsterisk
          placeholder={i18n(lang).contactForm.form.message.placeholder}
          key={form.key("message")}
          {...form.getInputProps("message")}
          classNames={{ input: css.input }}
        />
        <FileInput
          key={form.key("file")}
          placeholder={i18n(lang).contactForm.form.uploadBtn}
          radius={"lg"}
          clearable
          multiple
          size="lg"
          description={i18n(lang).contactForm.form.optional}
          {...form.getInputProps("file")}
          classNames={{ input: css.inputFile }}
        />
        <Box mt={40}>
          <Text fw={400} fz={12}>
            {i18n(lang).contactForm.form.declaration}
          </Text>
          <Button
            mt={10}
            w={"100%"}
            bg={"supportColor.1"}
            c={"grayscale1.0"}
            type="submit"
            fw={500}
            size="md"
            rightSection={<IconArrowRight size={16} stroke={1.5} />}
          >
            {i18n(lang).contactForm.form.submitBtn}
          </Button>
        </Box>
      </Stack>
    </form>
  );
};
