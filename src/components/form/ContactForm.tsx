import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  formFieldClass,
  formSelectTriggerClass,
  formTextareaClass,
} from "@/lib/form-styles";
import { useTranslation } from "react-i18next";
import { FormEvent, useState } from "react";

const enquiryOptions = [
  "general",
  "landowner",
  "investor",
  "developer",
  "care",
  "design",
] as const;

const ContactForm = () => {
  const { t } = useTranslation();
  const [enquiry, setEnquiry] = useState<string>();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-2">
        <Label htmlFor="fullName" className="text-primary">
          {t("forms.contact.full_name")}
        </Label>
        <Input
          id="fullName"
          name="fullName"
          required
          placeholder={t("forms.contact.full_name_ph")}
          className={formFieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-primary">
          {t("forms.contact.email")}
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t("forms.contact.email_ph")}
          className={formFieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone" className="text-primary">
          {t("forms.contact.phone")}
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder={t("forms.contact.phone_ph")}
          className={formFieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-primary">{t("forms.contact.enquiry")}</Label>
        <Select
          value={enquiry}
          onValueChange={(v) => setEnquiry(v ?? undefined)}>
          <SelectTrigger className={formSelectTriggerClass}>
            <SelectValue placeholder={t("forms.contact.enquiry_ph")} />
          </SelectTrigger>
          <SelectContent>
            {enquiryOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {t(`forms.contact.enquiry_options.${opt}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-primary">
          {t("forms.contact.message")}
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t("forms.contact.message_ph")}
          className={formTextareaClass}
        />
      </div>
      <Button type="submit" className="w-full font-semibold" size="lg">
        {t("forms.contact.submit")}
      </Button>
    </form>
  );
};

export default ContactForm;
