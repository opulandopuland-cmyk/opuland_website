import PathwayCard from "@/components/card/PathwayCard";
import { useGetAudiencePathways } from "@/lib/react-query/query/audience-pathways.query";

const PathwaysSection = () => {
  const { data: pathways = [] } = useGetAudiencePathways();

  return (
    <section className="bg-[#F2EEE4] no-padding w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full divide-y md:divide-y-0 md:divide-x divide-primary/15">
        {pathways.map((item) => (
          <PathwayCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PathwaysSection;
