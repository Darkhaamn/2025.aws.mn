import { Speaker } from "@/data";
import { FC } from "react";

const SpeakerItem: FC<{ speaker: Speaker }> = ({ speaker }) => {
  return (
    <div className="flex gap-4 items-center justify-center px-4">
      <div className="relative bg-clip-border overflow-hidden shadow-lg rounded-full w-9 h-9">
        <img
          alt={speaker.name}
          loading="lazy"
          src={speaker.image}
          decoding="async"
          data-nimg="1"
          className="w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-1 gap-1 flex-col">
        <div className="text-foreground">{speaker.name}</div>
        <div className="text-muted-foreground">{speaker.position}</div>
      </div>
    </div>
  );
};

export default SpeakerItem;
