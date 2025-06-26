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
        {/* Wrap SectionTitle in a div for margin control */}
        <div className="mb-4">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">leetcode Contributions</h1>
        </div>
        
        <Column classNames="w-full mt-6">
          <div className="w-full overflow-x-auto pb-2">
            <img
              src="https://camo.githubusercontent.com/6bdaa5b1a9ed7f39246bfc70aa3b8f3c10214715968fd7bfe0c5e344d9d80862/68747470733a2f2f6c656574636172642e6a61636f626c696e2e636f6f6c2f52616b7368697473696e676868683f6578743d686561746d6170"
              alt="Rakshit's leetcode contributions"
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
