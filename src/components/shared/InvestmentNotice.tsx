import Animation from "@/components/animation/Animation";
import { useTranslation } from "react-i18next";

type InvestmentNoticeProps = {
  bodyKey: string;
};

const InvestmentNotice = ({ bodyKey }: InvestmentNoticeProps) => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F2EEE4] py-10 md:py-14">
      <Animation.Container className="max-w-3xl mx-auto text-center flex flex-col items-center gap-3">
        <span className="text-yellow text-xs font-semibold uppercase tracking-[0.2em]">
          {t("common.investment_notice")}
        </span>
        <p className="text-xs md:text-sm text-primary/70 leading-relaxed whitespace-pre-line">
          {t(bodyKey)}
        </p>
      </Animation.Container>
    </section>
  );
};

export default InvestmentNotice;
