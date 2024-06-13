"use server";
import { transporter } from "../transporter";
import Mail from "nodemailer/lib/mailer";
import { nanoid } from "nanoid";
import cron from "node-cron";
import fs from "fs";
import path from "path";

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

// Dodaj subskrybenta
const addSubscriber = (email: string) => {
  const subscribersPath = path.resolve(process.cwd(), "db/subscribers.json");
  const subscribers = JSON.parse(fs.readFileSync(subscribersPath, "utf-8"));
  if (!subscribers.subscribers.includes(email)) {
    subscribers.subscribers.push(email);
    fs.writeFileSync(subscribersPath, JSON.stringify(subscribers, null, 2));
    console.log(`Added subscriber: ${email}`);
  } else {
    console.log(`Subscriber ${email} already exists.`);
  }
};

// Funkcja wysyłająca newsletter do wszystkich subskrybentów
const sendNewsletter = async () => {
  const subscribersPath = path.resolve(process.cwd(), "db/subscribers.json");
  const subscribers = JSON.parse(fs.readFileSync(subscribersPath, "utf-8"));
  const html = "<p>This is your weekly newsletter!</p>";
  const subject = "Weekly Newsletter";

  for (const email of subscribers.subscribers) {
    await sendEmail({ to: email, html, subject });
  }
};

// Planowanie wysyłki newslettera co tydzień w poniedziałek o 8:00
cron.schedule("0 8 * * 1", () => {
  console.log("Sending weekly newsletter...");
  sendNewsletter();
});

export { sendEmail, addSubscriber };
