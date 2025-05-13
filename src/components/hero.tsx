import { useCountDown } from "ahooks";
import { FC } from "react";

const Hero: FC = () => {
  const [, formattedRes] = useCountDown({
    targetDate: `2025-06-13 12:00:00`,
  });

  return (
    <section className="flex gap-4 flex-col lg:flex-row items-center justify-between py-10 lg:py-30">
      <div className="flex-1">
        <div className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          AWS <span className="text-primary">Community Day</span> Ulaanbaatar{" "}
          <span className="text-primary">2025</span>
        </div>
        <div className="max-w-[600px] text-muted-foreground md:text-xl pt-4">
          Join the third AWS Community Day in Ulaanbaatar! Engage with cloud
          experts, explore advanced topics, and network with like-minded
          individuals. Enhance your cloud skills at this special event!
        </div>
        <div className="max-w-[600px] text-foreground md:text-xl pt-4">
          Scheduled date: 2025 June 13-14
        </div>

        <div className="flex gap-2 md:gap-4 pt-2">
          <div className="bg-card flex flex-col items-center justify-center text-center w-16 h-16 rounded-md">
            <div className="text-foreground md:text-xl">
              {formattedRes.days}
            </div>
            <div className="text-foreground text-sm">Days</div>
          </div>
          <div className="bg-card flex flex-col items-center justify-center text-center w-16 h-16 rounded-md">
            <div className="text-foreground md:text-xl">
              {formattedRes.hours}
            </div>
            <div className="text-foreground text-sm">Hours</div>
          </div>
          <div className="bg-card flex flex-col items-center justify-center text-center w-16 h-16 rounded-md">
            <div className="text-foreground md:text-xl">
              {formattedRes.minutes}
            </div>
            <div className="text-foreground text-sm">Min</div>
          </div>
          <div className="bg-card flex flex-col items-center justify-center text-center w-16 h-16 rounded-md">
            <div className="text-foreground md:text-xl">
              {formattedRes.seconds}
            </div>
            <div className="text-foreground text-sm">Seconds</div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 relative">
        <img
          src="https://blog.aws.mn/content/images/size/w1600/2024/06/JAY09088.jpg"
          alt="AWS Mongolia Community"
          width="550"
          height="550"
          loading="lazy"
          decoding="async"
          className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
        ></img>
      </div>
    </section>
  );
};

export default Hero;
