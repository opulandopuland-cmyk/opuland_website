export type Stat = {
  id: string;
  value: string;
  labelKey: string;
};

export const homeStats: Stat[] = [
  { id: "years", value: "11+", labelKey: "stats.years" },
  { id: "sites", value: "70+", labelKey: "stats.sites" },
  { id: "largest", value: "£42m", labelKey: "stats.largest" },
  { id: "sectors", value: "5", labelKey: "stats.sectors" },
];

export const projectsStats: Stat[] = [
  { id: "sites", value: "70+", labelKey: "stats.sites" },
  { id: "years", value: "11+", labelKey: "stats.years" },
  { id: "largest", value: "£42m", labelKey: "stats.largest" },
  { id: "sectors", value: "5", labelKey: "stats.sectors" },
];
