import { faqsData } from "@/data";
import { FC } from "react";
import FAQItem from "./faq-item";

const FAQs: FC = () => {
  return (
    <section className="block py-10" id="faqs">
      <h2 className="block antialiased tracking-normal font-sans text-2xl md:text-3xl lg:text-4xl text-inherit leading-10 mt-6 font-extrabold">
        Frequently Asked Questions (FAQs)
      </h2>
      <p className="block antialiased tracking-normal text-muted-foreground text-base pt-4 leading-10 mb-6 ">
        Got questions? Check our FAQs or chat with us on{" "}
        <a href="https://t.me/+fYDhCL-0ofQ2ZjM1" target="_blank">
          Telegram!
        </a>
      </p>

      <div className="flex flex-col gap-4">
        {faqsData.map((item) => {
          return <FAQItem key={item.question} item={item} />;
        })}
      </div>
    </section>
  );
};

export default FAQs;
