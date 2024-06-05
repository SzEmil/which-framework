'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { i18n } from '@/i18n/helpers';
import { Button, Stack, Text, TextInput } from '@mantine/core';
import { ContactFormInitialData } from '@/hooks/useContactForm';
import { IconArrowRight } from '@tabler/icons-react';
import { LangType } from '@/types/types';

type NewsletterProps = {
  lang: LangType;
};
export const Newsletter = ({ lang }: NewsletterProps) => {
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
      console.error('Error sending email:', e);
      // notify.onEmailSendError(lang);
    }
    form.reset();
  };
  return (
    <Stack>
      <Text fw={500} fz={20}>
        {i18n(lang).footer.contactForm.title}
      </Text>
      <form onSubmit={form.onSubmit(handleOnEmailSend)}>
        <TextInput
          radius={'lg'}
          withAsterisk
          placeholder={i18n(lang).footer.contactForm.form.placeholder}
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <Button
          mt={20}
          w={'100%'}
          bg={'themePrimary.6'}
          autoContrast
          type="submit"
          rightSection={<IconArrowRight size={14} />}
        >
          {i18n(lang).footer.contactForm.form.btn}
        </Button>
      </form>
    </Stack>
  );
};
