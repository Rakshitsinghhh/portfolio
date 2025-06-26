import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import Column from "@/components/core/Column";
import SectionTitle from "../common/SectionTitle";

const HomeSection6 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      id={id}
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] dark:bg-dot-white/[0.15] bg-dot-white/[0.15] py-10"
    >
      <ConstrainedBox classNames="px-4">
        {/* Centered heading with half the original size */}
          <SectionTitle>GitHub Contributions</SectionTitle>
        <Column classNames="w-full mt-10">
          <div className="w-full overflow-x-auto pb-1">
            <img
              src="https://ghchart.rshah.org/green/rakshitsinghhh"
              alt="Rakshit's github contributions"
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

export default HomeSection6;