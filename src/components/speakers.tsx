import { FC } from "react";

const Speakers: FC = () => {
  return (
    <section className="block py-10" id="speakers">
      <div className="flex mt-6 items-center gap-6">
        <div className="antialiased tracking-normal font-sans text-2xl md:text-3xl lg:text-4xl text-inherit leading-10 font-extrabold">
          Meet our Speakers
        </div>
        <div>
          <div className="relative items-center font-bold uppercase whitespace-nowrap select-none bg-primary text-white py-1 px-2 text-xs rounded-md text-center inline mr-1">
            Coming Soon
          </div>
        </div>
      </div>
      <p className="block antialiased tracking-normal text-muted-foreground text-base pt-4 leading-10 mb-6 ">
        Get ready to hear from inspiring speakers—from AWS experts to our local
        leaders—who are excited to share their knowledge and experiences with
        you!
      </p>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start justify-center mt-6 gap-4">
        {speakers.map((item) => {
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
      </div> */}
    </section>
  );
};

export default Speakers;
