import { Button } from "@/components/ui/button";
import { ENUMs } from "@/lib/enums";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const COOKIE_KEY = "opg_cookie_consent";

const CookieBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] bg-primary text-white p-5 md:p-8 shadow-2xl border-t border-yellow/20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-5 md:items-center justify-between">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h3 className="font-bold text-lg text-yellow">{t("cookie.title")}</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            {t("cookie.body")}{" "}
            <Link
              to={ENUMs.PAGES.PRIVACY}
              className="underline text-yellow hover:text-yellow/80">
              {t("footer.legal.privacy")}
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Button
            onClick={() => choose("accepted")}
            className="font-semibold"
            size="lg">
            {t("cookie.accept")}
          </Button>
          <Button
            onClick={() => choose("rejected")}
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white"
            size="lg">
            {t("cookie.reject")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
