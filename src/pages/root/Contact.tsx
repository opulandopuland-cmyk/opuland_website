import ContactForm from "@/components/form/ContactForm";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import {
  useGetContactDetails,
  useGetSocialLinks,
} from "@/lib/react-query/query/contact-info.query";
import { getIcon } from "@/lib/icons";
import { ENUMs } from "@/lib/enums";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const { data: details = [] } = useGetContactDetails();
  const { data: social = [] } = useGetSocialLinks();

  return (
    <>
      <PageHero
        titleKey="contact.hero.title"
        eyebrowKey="contact.hero.eyebrow"
        bodyKey="contact.hero.body"
        eyebrowBelow
      />

      <section className="bg-white py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {t("contact.form.title")}
            </h2>
            <p className="text-sm text-primary/60 mb-4">
              {t("contact.form.sub")}
            </p>
            <ContactForm />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-8 text-primary">
            <h3 className="text-xl font-bold">{t("contact.info.title")}</h3>

            {details.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div key={item.id} className="flex gap-4">
                  {Icon && (
                    <div className="size-10 rounded-lg bg-[#EEF3EE] flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-yellow" strokeWidth={1.5} />
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary/50">
                      {t(item.labelKey)}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.id === "whatsapp" ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-sm hover:text-yellow transition-colors">
                        {item.value ?? (item.valueKey ? t(item.valueKey) : "")}
                      </a>
                    ) : (
                      <span className="text-sm">
                        {item.value ?? (item.valueKey ? t(item.valueKey) : "")}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            <Button
              render={
                <a
                  href={ENUMs.GLOBAL.WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                />
              }
              variant="whatsapp"
              className="w-full"
              size="lg">
              <FaWhatsapp className="size-5" />
              {t("cta.whatsapp")}
            </Button>

            <div className="rounded-xl overflow-hidden bg-[#EEF3EE] aspect-video">
              <iframe
                title="Office map"
                src="https://maps.google.com/maps?q=Handsworth,Birmingham,England&z=13&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-primary/50">
              {t("contact.info.map_note")}
            </p>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary/50">
                {t("contact.info.follow")}
              </span>
              <div className="flex gap-3 mt-3">
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
                      className="size-10 rounded-md border border-primary/20 flex items-center justify-center text-primary hover:border-yellow hover:text-yellow transition-colors">
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
