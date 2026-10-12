import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ENUMs } from "@/lib/enums";
import Cookie from "cookie-ts";
import { cn } from "@/lib/utils";

const langs = [
  { code: "en" as const, short: "EN", labelKey: "langs.en" },
  { code: "ckb" as const, short: "کوردی", labelKey: "langs.ckb" },
];

export function LangToggle() {
  const { t, i18n } = useTranslation();
  const active = langs.find((l) => l.code === i18n.language) ?? langs[0];

  useEffect(() => {
    let cookieLang = Cookie.get(ENUMs.GLOBAL.LANG_COOKIE);
    if (cookieLang) {
      i18n.changeLanguage(cookieLang);
    } else {
      i18n.changeLanguage("en");
    }
    if (i18n.language == "en") {
      document.dir = "ltr";
      document.body.classList.add("english_font");
      document.body.classList.remove("kurdish_font");
    } else {
      document.dir = "rtl";
      document.body.classList.add("kurdish_font");
      document.body.classList.remove("english_font");
    }
  }, [i18n]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-yellow/50",
          "bg-yellow/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
          "text-yellow hover:bg-yellow hover:text-primary transition-colors duration-200",
          "outline-none focus-visible:ring-2 focus-visible:ring-yellow/40"
        )}>
        <span className="size-1.5 rounded-full bg-yellow shrink-0" />
        <span>{active.short}</span>
        <ChevronDown className="size-3.5 opacity-80" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="z-[9999] min-w-[140px] border-yellow/20 bg-primary p-1"
        align="end">
        {langs.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              i18n.changeLanguage(lang.code);
              Cookie.set(ENUMs.GLOBAL.LANG_COOKIE, lang.code, 864000);
              window.location.reload();
            }}
            className={cn(
              "cursor-pointer rounded-md text-sm transition-colors duration-200",
              "text-white/85 focus:bg-yellow focus:text-primary",
              i18n.language === lang.code && "bg-yellow/20 text-yellow",
              lang.code === "en" ? "english_font" : "kurdish_font"
            )}>
            {String(t(lang.labelKey))}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
