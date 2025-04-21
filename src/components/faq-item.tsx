import type { FAQItemType } from "@/data";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FC, useState } from "react";
import { Button } from "./ui/button";

const FAQItem: FC<{ item: FAQItemType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div
        className="flex relative gap-4 py-4 cursor-pointer border-b border-b-muted-foreground/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <div className="block antialiased font-sans text-foreground text-lg opacity-90 max-w-[85%] font-bold">
            {item.question}
          </div>
        </div>
        <div className="flex absolute right-4 top-4">
          <Button className="stroke-slate-900" variant={"outline"}>
            <ChevronDown
              className={cn(
                "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all",
                { "-rotate-90 scale-0": isOpen }
              )}
            />
            <ChevronUp
              className={cn(
                "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all",
                { "rotate-0 scale-100": isOpen }
              )}
            />
            <span className="sr-only">Toggle collapse</span>
          </Button>
        </div>
      </div>

      <CollapsibleContent className="block text-muted-foreground mt-4">
        {item.answer}
        {item.answerList?.map((answer, index) => {
          return (
            <div
              key={index}
              className="block antialiased font-sans font-normal text-base"
            >
              * {answer}
            </div>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FAQItem;
