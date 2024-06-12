"use server";
import { transporter } from "../transporter";
import Mail from "nodemailer/lib/mailer";
import { nanoid } from "nanoid";

type EmailOptions = {
  lang?: string;
  to?: string;
  html: string;
  attachments?: { filename: string; content: Buffer }[];
  subject?: string;
};

const sendEmail = async ({
  lang = "en",
  to = "powiadomienia@minfdev.com",
  html,
  attachments,
  subject = `New subject: Ticket #${nanoid()}`,
}: EmailOptions) => {
  const mailOptions: Mail.Options = {
    from: "powiadomienia@minfdev.com",
    to,
    subject,
    html,
    attachments: attachments?.map((file) => ({
      filename: file.filename,
      //@ts-ignore
      content: Buffer.from(file.content.data),
    })),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
