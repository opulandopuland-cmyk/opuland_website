export type Project = {
  id: string;
  titleKey: string;
  locationKey: string;
  statusKey: string;
  tagKey: string;
  bodyKey: string;
  image: string;
};

export type TeamExperience = {
  id: string;
  projectKey: string;
  value: string;
  roleKey: string;
};

export const projects: Project[] = [
  {
    id: "bromyard",
    titleKey: "projects.opg.bromyard.title",
    locationKey: "projects.opg.bromyard.location",
    statusKey: "projects.opg.bromyard.status",
    tagKey: "projects.opg.bromyard.tag",
    bodyKey: "projects.opg.bromyard.body",
    image: "/images/projects.jpg",
  },
];

export const teamExperience: TeamExperience[] = [
  {
    id: "civic",
    projectKey: "projects.team.civic.project",
    value: "£15m",
    roleKey: "projects.team.civic.role",
  },
  {
    id: "myoderm",
    projectKey: "projects.team.myoderm.project",
    value: "£7.5m",
    roleKey: "projects.team.myoderm.role",
  },
  {
    id: "nuneaton",
    projectKey: "projects.team.nuneaton.project",
    value: "£5m",
    roleKey: "projects.team.nuneaton.role",
  },
  {
    id: "pershore",
    projectKey: "projects.team.pershore.project",
    value: "£6m",
    roleKey: "projects.team.pershore.role",
  },
  {
    id: "portfield",
    projectKey: "projects.team.portfield.project",
    value: "£3.5m",
    roleKey: "projects.team.portfield.role",
  },
  {
    id: "palace",
    projectKey: "projects.team.palace.project",
    value: "£3.2m",
    roleKey: "projects.team.palace.role",
  },
  {
    id: "windmill",
    projectKey: "projects.team.windmill.project",
    value: "£7.2m",
    roleKey: "projects.team.windmill.role",
  },
  {
    id: "printworks",
    projectKey: "projects.team.printworks.project",
    value: "£42m",
    roleKey: "projects.team.printworks.role",
  },
];
