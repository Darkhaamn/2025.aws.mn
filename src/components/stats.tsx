import { FC } from "react";

const items = [
  {
    title: "Community Members",
    value: "1200+",
  },
  {
    title: "Events Organized",
    value: "50+",
  },
  {
    title: "AWS Certified Members",
    value: "20+",
  },
  {
    title: "Years of Community",
    value: "5+",
  },
];
const Stats: FC = () => {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-md flex flex-col items-center justify-center space-y-2 px-4 py-6 md:px-6"
            >
              <div className="text-4xl font-bold text-orange-500 dark:text-orange-400">
                {item.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
