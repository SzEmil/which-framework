"use client";

import { i18n } from "@/i18n/helpers";
import { Button, Stack, Text, TextInput } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { LangType } from "@/types/types";
import { ContactFormInitialData, useNewsletterForm } from "@/hooks/useNewsletterForm";
import { EmailTemplate } from "@/services/Email/templates";
import { addSubscriber, sendEmail } from "@/services/Email/operations/sendEmail";
type NewsletterProps = {
  lang: LangType;
};
export const Newsletter = ({ lang }: NewsletterProps) => {
  const form = useNewsletterForm(lang);

  const handleOnEmailSend = async (values: ContactFormInitialData) => {
    try {
      await sendEmail({
        lang,
        to: values.email,
        subject: "Newsletter",
        html: EmailTemplate.newsletterSubscription(values.email),
      });
      addSubscriber(values.email);
      // //  notify.onCustomerEmailSend(lang);
    } catch (e) {
      console.log("Error sending email:", e);
      // notify.onEmailSendError(lang);
    }
    form.reset();
  };
  return (
    <Stack>
      <Text fw={500} fz={20}>
        {i18n(lang).footer.newsLetterForm.title}
      </Text>
      <form onSubmit={form.onSubmit(handleOnEmailSend)}>
        <TextInput
          radius={"lg"}
          withAsterisk
          placeholder={i18n(lang).footer.newsLetterForm.form.placeholder}
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <Button
          mt={20}
          w={"100%"}
          bg={"themePrimary.6"}
          autoContrast
          type="submit"
          rightSection={<IconArrowRight size={14} />}
        >
          {i18n(lang).footer.newsLetterForm.form.btn}
        </Button>
      </form>
    </Stack>
  );
};
