import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import Column from "@/components/core/Column";
import SectionTitle from "@/components/common/SectionTitle";

const HomeSection7 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      id={id}
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] dark:bg-dot-white/[0.15] bg-dot-white/[0.15] py-10"
    >
      <ConstrainedBox classNames="px-4">
        <SectionTitle className="mb-4">Github Contributions</SectionTitle>
        <Column classNames="w-full mt-6">
          <div className="w-full overflow-x-auto pb-2">
            <img
              src="https://ghchart.rshah.org/green/rakshitsinghhh"
              alt="Rakshit's GitHub contributions"
              className="mx-auto"
              style={{ minWidth: "680px" }}
              loading="lazy"
            />
          </div>
        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection7;