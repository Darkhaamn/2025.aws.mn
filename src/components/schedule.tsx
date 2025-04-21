import { Schedule } from "@/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { FC } from "react";
import ScheduleContent from "./schedule-content";

const ScheduleSection: FC<{ speakerDay: Schedule[]; gameDay: Schedule[] }> = ({
  speakerDay,
  gameDay,
}) => {
  return (
    <section className="block py-10" id="agenda">
      <h2 className="block antialiased tracking-normal font-sans text-2xl md:text-3xl lg:text-4xl text-inherit leading-10 mt-6 font-extrabold">
        Event Agenda
      </h2>
      <p className="block antialiased tracking-normal text-muted-foreground text-base pt-4 leading-10 mb-6 ">
        We hope you enjoy the event! We've prepared a lineup of exciting talks
        brought to you by passionate community enthusiasts and builders.
      </p>

      <Tabs defaultValue="speakday" className="w-full">
        <TabsList className="flex gap-4 w-full grid-cols-2 bg-card rounded-md p-2 ">
          <TabsTrigger
            value="speakday"
            className="flex-1 hover:bg-muted/80 p-2 rounded-md data-[state=active]:bg-muted/90"
          >
            Speakers Day
          </TabsTrigger>
          <TabsTrigger
            value="gameday"
            className="flex-1 hover:bg-muted/80 p-2 rounded-md data-[state=active]:bg-muted/90"
          >
            Game Day
          </TabsTrigger>
        </TabsList>
        <TabsContent value="speakday">
          <ScheduleContent eventSchedule={speakerDay} />
        </TabsContent>
        <TabsContent value="gameday">
          <ScheduleContent eventSchedule={gameDay} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ScheduleSection;
