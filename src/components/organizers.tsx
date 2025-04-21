import { organizers } from "@/data";
import { FC } from "react";

const Organizers: FC = () => {
  return (
    <section className="block py-10" id="organizers">
      <h2 className="block antialiased tracking-normal font-sans text-2xl md:text-3xl lg:text-4xl text-inherit leading-10 mt-6 font-extrabold">
        Meet our Organizers
      </h2>
      <p className="block antialiased tracking-normal text-muted-foreground text-base pt-4 leading-10 mb-6 ">
        Who’s making all this awesome happen? Meet the organizers!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-center mt-6 gap-4">
        {organizers.map((item) => {
          return (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              className="relative flex flex-col bg-clip-border rounded-md bg-card text-card-foreground shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-auto items-center pb-4"
            >
              <div className="relative bg-clip-border mt-4 mx-4 overflow-hidden bg-card text-card-foreground shadow-lg rounded-full w-[200px] h-[200px]">
                <img
                  alt={item.name}
                  loading="lazy"
                  src={item.image}
                  decoding="async"
                  data-nimg="1"
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="p-6 pb-0 flex flex-col max-h-[11.5rem] text-center transition-all duration-500 ease-in-out hover:max-h-[50rem] overflow-hidden">
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
                  {item.name}
                </h4>
                <p className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-primary font-medium">
                  {item.position}
                </p>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-light pt-3 text-center">
                  {item.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Organizers;
