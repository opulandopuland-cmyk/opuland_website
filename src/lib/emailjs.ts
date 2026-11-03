import emailjs from "@emailjs/browser";
import { ENUMs } from "@/lib/enums";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export type FormEmailPayload = {
  formType: "Contact" | "Care Sector" | "Invest";
  fullName: string;
  email: string;
  phone?: string;
  fields: Record<string, string>;
};

const ensureConfig = () => {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in .env"
    );
  }
};

const buildMessageBody = (payload: FormEmailPayload) => {
  const lines = [
    `Form: ${payload.formType}`,
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "—"}`,
    "",
    "Details:",
    ...Object.entries(payload.fields).map(([key, value]) => `${key}: ${value}`),
  ];
  return lines.join("\n");
};

export const sendFormEmail = async (payload: FormEmailPayload) => {
  ensureConfig();

  return emailjs.send(
    serviceId!,
    templateId!,
    {
      to_email: ENUMs.GLOBAL.EMAIL,
      from_name: payload.fullName,
      from_email: payload.email,
      reply_to: payload.email,
      phone: payload.phone || "—",
      form_type: payload.formType,
      subject: `[OPG] ${payload.formType} enquiry from ${payload.fullName}`,
      message: buildMessageBody(payload),
    },
    { publicKey: publicKey! }
  );
};
