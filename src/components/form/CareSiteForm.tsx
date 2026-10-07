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

const roleOptions = ["operator", "investor", "landowner", "other"] as const;

const CareSiteForm = () => {
  const { t } = useTranslation();
  const [role, setRole] = useState<string>();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 w-full max-w-xl mx-auto">
      <div className="flex flex-col gap-2">
        <Label htmlFor="care-name" className="text-primary">
          {t("forms.care.full_name")}
        </Label>
        <Input
          id="care-name"
          name="fullName"
          required
          placeholder={t("forms.care.full_name_ph")}
          className={formFieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="care-phone" className="text-primary">
          {t("forms.care.phone")}
        </Label>
        <Input
          id="care-phone"
          name="phone"
          type="tel"
          required
          placeholder={t("forms.care.phone_ph")}
          className={formFieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="care-email" className="text-primary">
          {t("forms.care.email")}
        </Label>
        <Input
          id="care-email"
          name="email"
          type="email"
          required
          placeholder={t("forms.care.email_ph")}
          className={formFieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-primary">{t("forms.care.role")}</Label>
        <Select value={role} onValueChange={(v) => setRole(v ?? undefined)}>
          <SelectTrigger className={formSelectTriggerClass}>
            <SelectValue placeholder={t("forms.care.role_ph")} />
          </SelectTrigger>
          <SelectContent>
            {roleOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {t(`forms.care.role_options.${opt}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="care-reqs" className="text-primary">
          {t("forms.care.requirements")}
        </Label>
        <Textarea
          id="care-reqs"
          name="requirements"
          required
          rows={5}
          placeholder={t("forms.care.requirements_ph")}
          className={formTextareaClass}
        />
      </div>
      <Button type="submit" className="w-full font-semibold" size="lg">
        {t("forms.care.submit")}
      </Button>
    </form>
  );
};

export default CareSiteForm;
