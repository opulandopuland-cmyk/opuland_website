import ProjectCard from "@/components/card/ProjectCard";
import PageHero from "@/components/shared/PageHero";
import PreFooterCta from "@/components/shared/PreFooterCta";
import SectionHeader from "@/components/shared/SectionHeader";
import StatsBand from "@/components/shared/StatsBand";
import {
  useGetProjects,
  useGetTeamExperience,
} from "@/lib/react-query/query/projects.query";
import { useGetProjectsStats } from "@/lib/react-query/query/stats.query";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const { data: projects = [] } = useGetProjects();
  const { data: stats = [] } = useGetProjectsStats();
  const { data: team = [] } = useGetTeamExperience();

  return (
    <>
      <PageHero
        eyebrowKey="projects.hero.eyebrow"
        titleKey="projects.hero.title"
        bodyKey="projects.hero.body"
      />

      <section className="bg-white py-16 md:py-24">
        <SectionHeader
          eyebrowKey="projects.opg.eyebrow"
          titleKey="projects.opg.title"
          align="left"
        />
        <div className="flex flex-col gap-12">
          {projects.map((p, index) => (
            <ProjectCard key={p.id} {...p} index={index} />
          ))}
        </div>
      </section>

      <StatsBand stats={stats} />

      <section className="bg-[#F2EEE4] py-16 md:py-24">
        <SectionHeader
          eyebrowKey="projects.team.eyebrow"
          titleKey="projects.team.title"
          bodyKey="projects.team.intro"
        />
        <p className="italic text-sm text-primary/60 mb-8 text-center max-w-3xl mx-auto">
          {t("projects.team.note")}
        </p>
        <div className="overflow-x-auto rounded-xl shadow-sm">
          <table className="w-full text-sm text-primary min-w-[600px]">
            <thead>
              <tr className="bg-primary text-white text-start">
                <th className="p-4 font-semibold text-start">
                  {t("projects.team.col_project")}
                </th>
                <th className="p-4 font-semibold text-start">
                  {t("projects.team.col_value")}
                </th>
                <th className="p-4 font-semibold text-start">
                  {t("projects.team.col_role")}
                </th>
              </tr>
            </thead>
            <tbody>
              {team.map((row, i) => (
                <tr
                  key={row.id}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#EEF3EE]"}>
                  <td className="p-4">{t(row.projectKey)}</td>
                  <td className="p-4 font-semibold text-yellow">{row.value}</td>
                  <td className="p-4">{t(row.roleKey)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <PreFooterCta />
    </>
  );
};

export default Projects;
