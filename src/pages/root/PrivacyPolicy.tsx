import Animation from "@/components/animation/Animation";
import PageHero from "@/components/shared/PageHero";
import { useGetPrivacySections } from "@/lib/react-query/query/privacy.query";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const { data: sections = [] } = useGetPrivacySections();

  return (
    <>
      <PageHero
        eyebrowKey="privacy.hero.eyebrow"
        titleKey="privacy.hero.title"
        bodyKey="privacy.hero.body"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto flex flex-col gap-10 md:gap-12">
          <Animation.Text
            as="p"
            className="text-sm text-primary/50">
            {t("privacy.updated")}
          </Animation.Text>

          {sections.map((section, index) => (
            <Animation.Container
              key={section.id}
              index={index}
              className="flex flex-col gap-3 text-primary">
              <Animation.Text
                as="h2"
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="text-xl md:text-2xl font-bold">
                {t(section.titleKey)}
              </Animation.Text>
              <Animation.Text
                as="p"
                transition={{ duration: 0.55, delay: index * 0.05 + 0.08 }}
                className="text-sm md:text-base text-primary/70 leading-relaxed whitespace-pre-line">
                {t(section.bodyKey)}
              </Animation.Text>
              {section.pointsKeys && section.pointsKeys.length > 0 && (
                <ul className="mt-2 flex flex-col gap-2 list-disc ps-5">
                  {section.pointsKeys.map((pointKey, i) => (
                    <Animation.Text
                      as="li"
                      key={pointKey}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.05 + 0.12 + i * 0.04,
                      }}
                      className="text-sm md:text-base text-primary/70 leading-relaxed">
                      {t(pointKey)}
                    </Animation.Text>
                  ))}
                </ul>
              )}
            </Animation.Container>
          ))}
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
