import { useGetFooterColumns } from "@/lib/react-query/query/footer.query";
import { useGetSocialLinks } from "@/lib/react-query/query/contact-info.query";
import { getIcon } from "@/lib/icons";
import { ENUMs } from "@/lib/enums";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const { data: columns = [] } = useGetFooterColumns();
  const { data: social = [] } = useGetSocialLinks();

  return (
    <footer className="bg-primary text-white w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5 md:px-[50px] lg:px-[100px] py-14 md:py-20">
        <div className="flex flex-col gap-4">
          <h3 className="text-yellow font-bold uppercase tracking-wider text-sm">
            {t("header.label")}
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            {t("footer.tagline")}
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.id} className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">
              {t(col.titleKey)}
            </h4>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-yellow transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-sm uppercase tracking-wider">
            {t("footer.columns.contact")}
          </h4>
          <a
            href={`mailto:${ENUMs.GLOBAL.EMAIL}`}
            className="text-sm text-white/70 hover:text-yellow">
            {ENUMs.GLOBAL.EMAIL}
          </a>
          <a
            href={`tel:${ENUMs.GLOBAL.PHONE.replace(/\s/g, "")}`}
            className="text-sm text-white/70 hover:text-yellow">
            {ENUMs.GLOBAL.PHONE}
          </a>
          <p className="text-sm text-white/70">{t("footer.location")}</p>
          <div className="flex gap-3 mt-2">
            {social.map((item) => {
              const Icon = getIcon(item.icon);
              if (!Icon) return null;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t(item.labelKey)}
                  className="size-9 rounded-md border border-white/20 flex items-center justify-center hover:border-yellow hover:text-yellow transition-colors">
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 md:px-[50px] lg:px-[100px] py-5 flex flex-col md:flex-row gap-3 justify-center items-center text-xs text-white/50">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
