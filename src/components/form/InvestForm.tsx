import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
} from "@/lib/form-styles";
import { useTranslation } from "react-i18next";
import { FormEvent, useState } from "react";

const capitalOptions = [
  "under_25",
  "25_50",
  "50_100",
  "100_250",
  "250_plus",
] as const;

const investorOptions = ["sophisticated", "hnwi", "other"] as const;
const hearOptions = ["referral", "linkedin", "search", "other"] as const;

const InvestForm = () => {
  const { t } = useTranslation();
  const [capital, setCapital] = useState<string>();
  const [investorType, setInvestorType] = useState<string>();
  const [heard, setHeard] = useState<string>();
  const [ack, setAck] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 w-full max-w-xl mx-auto">
      <div className="flex flex-col gap-2">
        <Label htmlFor="inv-name" className="text-primary">
          {t("forms.invest.full_name")}
        </Label>
        <Input
          id="inv-name"
          name="fullName"
          required
          placeholder={t("forms.invest.full_name_ph")}
          className={formFieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="inv-email" className="text-primary">
          {t("forms.invest.email")}
        </Label>
        <Input
          id="inv-email"
          name="email"
          type="email"
          required
          placeholder={t("forms.invest.email_ph")}
          className={formFieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="inv-phone" className="text-primary">
          {t("forms.invest.phone")}
        </Label>
        <Input
          id="inv-phone"
          name="phone"
          type="tel"
          required
          placeholder={t("forms.invest.phone_ph")}
          className={formFieldClass}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-primary">{t("forms.invest.capital")}</Label>
        <Select
          value={capital}
          onValueChange={(v) => setCapital(v ?? undefined)}>
          <SelectTrigger className={formSelectTriggerClass}>
            <SelectValue placeholder={t("forms.invest.capital_ph")} />
          </SelectTrigger>
          <SelectContent>
            {capitalOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {t(`forms.invest.capital_options.${opt}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-primary">{t("forms.invest.confirm")}</Label>
        <Select
          value={investorType}
          onValueChange={(v) => setInvestorType(v ?? undefined)}>
          <SelectTrigger className={formSelectTriggerClass}>
            <SelectValue placeholder={t("forms.invest.confirm_ph")} />
          </SelectTrigger>
          <SelectContent>
            {investorOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {t(`forms.invest.confirm_options.${opt}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="text-primary">{t("forms.invest.hear")}</Label>
        <Select value={heard} onValueChange={(v) => setHeard(v ?? undefined)}>
          <SelectTrigger className={formSelectTriggerClass}>
            <SelectValue placeholder={t("forms.invest.hear_ph")} />
          </SelectTrigger>
          <SelectContent>
            {hearOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {t(`forms.invest.hear_options.${opt}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <label className="flex items-start gap-3 text-sm text-primary/80">
        <Checkbox
          checked={ack}
          onCheckedChange={(v) => setAck(v === true)}
          required
          className="mt-0.5"
        />
        <span>{t("forms.invest.ack")}</span>
      </label>
      <Button type="submit" className="w-full font-semibold" size="lg">
        {t("forms.invest.submit")}
      </Button>
    </form>
  );
};

export default InvestForm;
