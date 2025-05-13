import { FC } from "react";

const About: FC = () => {
  return (
    <section className="block">
      <h2 className="block antialiased tracking-normal font-sans text-2xl md:text-3xl lg:text-4xl text-primary leading-10 mt-6 font-extrabold">
        About the Event
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <p className="block antialiased tracking-normal text-muted-foreground text-base pt-4 leading-10 mb-6 col-span-1">
          Mongolia is known as the 'Land of Eternal Blue Sky,' and its tech scene
          shows great promise.
          <br />
          Don't just take our word for it; join us! Thousands of cloud enthusiasts
          will gather to discuss advanced cloud technology.
          <br />
          This time, we're organizing our second-largest cloud event in the
          capital city of Ulaanbaatar.
          <br />
          Want to experience the atmosphere of the event? Check out the video!
        </p>
        <img src="/AWS.webp" className="col-span-2" />
      </div>
      {/* <div className="block rounded-md overflow-hidden relative pb-[56.25%]">
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src="https://www.youtube.com/embed/O-L51SiQhtc?si=NiNxDllojeAmc4SG"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div> */}
    </section>
  );
};

export default About;
