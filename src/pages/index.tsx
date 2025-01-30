import type { InferGetStaticPropsType, GetStaticProps } from "next";

import LeaseCalculationsList from "@/features/lease/components/LeaseCalculationsList";
import LeaseCalculator from "@/features/lease/components/LeaseCalculator";
import LeaseCalculatorForm from "@/features/lease/components/LeaseCalculatorForm";
import { useLeaseCalculator } from "@/features/lease/hooks";
import { fetchLeaseBoundaries } from "@/services/api";
import { LeaseBoundaries } from "@/types/lease";

export const getStaticProps = (async () => {
  const config = await fetchLeaseBoundaries();

  return {
    props: {
      config: {
        leaseBoundaries: config.data.boundaries,
      },
    },
  };
}) satisfies GetStaticProps<{
  config: {
    leaseBoundaries: LeaseBoundaries;
  };
}>;

const Page = ({ config }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { savedItems, fetchLeaseCalculation } = useLeaseCalculator();
  return (
    <LeaseCalculator className="flex">
      <LeaseCalculatorForm
        fetchLeaseCalculation={fetchLeaseCalculation}
        className="p-6 min-w-[627px]"
        leaseBoundaries={config.leaseBoundaries}
      />
      <LeaseCalculationsList
        items={savedItems}
        className="p-6 bg-[#F6F6F6] min-w-[328px]"
      />
    </LeaseCalculator>
  );
};

export default Page;
