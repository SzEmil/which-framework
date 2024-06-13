import { wrapper } from "./wrapper";
export const EmailTemplate = {
  fromCustomer: (name: string, email: string, message: string) =>
    wrapper(` <div>
      <h1>Wiadomość od klienta</h1>
      <div style="display: flex; gap: 10">
        <p>email:</p>
        <p>${email}</p>
     </div>
      <div style="display: flex; gap: 10">
        <p>Treść wiadomości:</p>
        <p>${message}</p>
       </div>
    </div>`),

  feedbackMessage: (name: string) =>
    wrapper(`
        <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; max-width: 600px; margin: auto; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h1 style="color: #333; text-align: center;">Dziękujemy za Twoją wiadomość, ${name}!</h1>
          <div style="padding: 20px; background-color: #f8f8f8; border-radius: 10px; margin: 20px 0;">
            <p style="font-size: 16px; color: #666;">
              Twoja wiadomość została przekazana do naszego zespołu. Odpowiemy na Twoje zapytanie jak najszybciej.
            </p>
          </div>
          <div style="padding: 20px; background-color: #ffffff; border-radius: 10px; text-align: center;">
            <p style="font-size: 16px; color: #333;">
              Jeśli masz dodatkowe pytania, skontaktuj się z nami bezpośrednio na:
              <a href="mailto:hello@minfdev.com" style="color: #0073e6; text-decoration: none;">hello@minfdev.com</a>
            </p>
          </div>
          <div style="text-align: center; margin-top: 40px;">
            <a href="https://minfdev.com" style="padding: 10px 20px; background-color: #0073e6; color: #ffffff; text-decoration: none; border-radius: 5px;">Odwiedź naszą stronę</a>
          </div>
        </div>
      `),

  newsletterSubscription: (email: string) =>
    wrapper(`
          <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; max-width: 600px; margin: auto; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            <h1 style="color: #333; text-align: center;">Dziękujemy za zapisanie się do naszego newslettera!</h1>
            <div style="padding: 20px; background-color: #f8f8f8; border-radius: 10px; margin: 20px 0;">
              <p style="font-size: 16px; color: #666;">
                Cieszymy się, że chcesz otrzymywać aktualizacje od nas. Twój adres email, ${email}, został pomyślnie zapisany do naszego newslettera.
              </p>
            </div>
            <div style="padding: 20px; background-color: #ffffff; border-radius: 10px; text-align: center;">
              <p style="font-size: 16px; color: #333;">
                Wkrótce otrzymasz od nas najnowsze wiadomości i aktualizacje.
              </p>
            </div>
            <div style="text-align: center; margin-top: 40px;">
              <a href="https://minfdev.com" style="padding: 10px 20px; background-color: #0073e6; color: #ffffff; text-decoration: none; border-radius: 5px;">Odwiedź naszą stronę</a>
            </div>
          </div>
        `),
};
