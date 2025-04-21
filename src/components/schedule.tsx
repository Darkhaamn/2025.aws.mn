import { FC } from "react";

const ScheduleSection: FC = () => {
  return (
    <section className="block py-10" id="agenda">
      <div className="flex mt-6 items-center gap-6">
        <div className="antialiased tracking-normal font-sans text-2xl md:text-3xl lg:text-4xl text-inherit leading-10 font-extrabold">
          Event Agenda
        </div>
        <div>
          <div className="relative items-center font-bold uppercase whitespace-nowrap select-none bg-primary text-white py-1 px-2 text-xs rounded-md text-center inline mr-1">
            Coming Soon
          </div>
        </div>
      </div>
      <p className="block antialiased tracking-normal text-muted-foreground text-base pt-4 leading-10 mb-6 ">
        We hope you enjoy the event! We've prepared a lineup of exciting talks
        brought to you by passionate community enthusiasts and builders.
      </p>

      {/* <Tabs defaultValue="speakday" className="w-full">
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
      </Tabs> */}
    </section>
  );
};

export default ScheduleSection;
