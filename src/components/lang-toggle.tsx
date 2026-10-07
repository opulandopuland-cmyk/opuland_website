import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ENUMs } from "@/lib/enums";
import Cookie from "cookie-ts";

export function LangToggle() {
  const { t, i18n } = useTranslation();
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
      <DropdownMenuTrigger>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-yellow/60 bg-white text-primary hover:bg-yellow hover:text-primary hover:border-yellow">
          <Languages className="h-5 w-5 text-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[9999]" align="end">
        {(["en", "ckb"] as const).map((val) => (
          <DropdownMenuItem
            key={val}
            onClick={() => {
              i18n.changeLanguage(val);
              Cookie.set(ENUMs.GLOBAL.LANG_COOKIE, val, 864000);
              window.location.reload();
            }}
            className={`${
              i18n.language === val ? "bg-yellow text-primary" : "text-primary"
            } focus:bg-yellow focus:text-primary transition-colors duration-200 cursor-pointer ${
              val === "en" ? "english_font" : "kurdish_font"
            }`}>
            {String(t(`langs.${val}`))}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
