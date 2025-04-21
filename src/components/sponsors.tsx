import { sponsors } from "@/data";
import { FC } from "react";

const Sponsors: FC = () => {
  return (
    <section className="block py-10" id="sponsors">
      <h2 className="block antialiased tracking-normal font-sans text-2xl md:text-3xl lg:text-4xl text-inherit leading-10 mt-6 font-extrabold">
        Meet our Sponsors
      </h2>
      <p className="block antialiased tracking-normal text-muted-foreground text-base pt-4 leading-10 mb-6 ">
        We extend our heartfelt gratitude to our generous sponsors — your
        support makes everything possible!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-center mt-6 gap-4">
        {sponsors.map((item) => {
          return (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              className="relative flex flex-col bg-clip-border rounded-md bg-card text-card-foreground shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-auto items-center"
            >
              <div className="relative w-full h-[150px] overflow-hidden flex items-center justify-center">
                <img
                  alt={item.name}
                  loading="lazy"
                  src={item.logo}
                  decoding="async"
                  data-nimg="1"
                  className="h-[150px] p-6 object-contain object-center grayscale-100 hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;
